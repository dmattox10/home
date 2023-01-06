import React, { useState, Suspense, useEffect, createRef } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import pMinDelay from 'p-min-delay'
import { useTimeoutWhen } from 'rooks'

import { useTimeout } from './hooks/useTimeout'

// import Layout from './components/Layout'
import Loader from './Loader'

import ContentAbout from './components/views/ContentAbout'
import ContentContact from './components/views/ContentContact'
import ContentExperience from './components/views/ContentExperience'
import ContentResume from './components/views/ContentResume'
import ContentWork from './components/views/ContentWork'

const Layout = React.lazy(() => pMinDelay(import('./components/Layout'), 800))

const App = (props) => {

  const time = 800

  const {
    isScrollingUp,
    isScrollingDown
  } = useScrollDirection()

  const [hasTimerElapsed, setTimerElapsed] = useState(false)
  const [finished, setFinished] = useState(false)

  useTimeout(() => setTimerElapsed(true), time)
  useTimeoutWhen(() => setFinished(true), 6000, hasTimerElapsed)

  const navItems = [
    {
      id: 1,
      name: 'About',
      target: 'about',
      component: <ContentAbout />,
      nodeRef: createRef(null)
    },
    {
      id: 2,
      name: 'My Work',
      target: 'work',
      component: <ContentWork />,
      nodeRef: createRef(null)
    },
    {
      id: 3,
      name: 'Experience',
      target: 'experience',
      component: <ContentExperience />,
      nodeRef: createRef(null)
    },
    {
      id: 4,
      name: 'Contact',
      target: 'contact',
      component: <ContentContact />,
      nodeRef: createRef(null)
    },
    {
      id: 5,
      name: 'Resume',
      target: 'resume',
      component: <ContentResume />,
      nodeRef: createRef(null)
    }
  ]
  const socials = [
    'https://github.com/dmattox10',
    // 'https://codepen.io/dmattox10',
    'https://medium.com/@damndanieldaniel/',
    'https://linkedin.com/in/dmattox10',
    'https://twitter.com/dmattox10'
  ]

  const [activeItem, setActiveItem] = useState()

  const setActive = (id) => {
    setActiveItem(prevState => id)
  }

  function onClickResume() {

  }

  useEffect(() => {
    if (hasTimerElapsed) {
      setFinished(true)
    }
  }, [hasTimerElapsed])

  return (
    <div className='App'>
      <Suspense fallback={<Loader time={time} hasTimerElapsed={hasTimerElapsed} />}>
        <Layout 
          navItems={navItems}
          activeItem={activeItem}
          setActive={setActive}
          socials={socials}
          started={hasTimerElapsed}
          finished={finished}
          onClickResume={onClickResume}
        />
      </Suspense>
    </div>
  )
}

export default App