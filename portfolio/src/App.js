import { useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'

import { useTimeout } from './hooks/useTimeout'

import Layout from './components/Layout'
import Loader from './Loader'

import ContentAbout from './components/views/ContentAbout'
import ContentContact from './components/views/ContentContact'
import ContentExperience from './components/views/ContentExperience'
import ContentResume from './components/views/ContentResume'
import ContentWork from './components/views/ContentWork'

const App = (props) => {
  const { time } = props
  const {
    isScrollingUp,
    isScrollingDown
  } = useScrollDirection()

  const [hasTimerElapsed, setTimerElapsed] = useState(false)

  useTimeout(() => {
    setTimerElapsed(true)
  }, time)

  const navItems = [
    {
      id: 1,
      name: 'About',
      target: 'about',
      component: <ContentAbout />
    },
    {
      id: 2,
      name: 'Work',
      target: 'work',
      component: <ContentWork />
    },
    {
      id: 3,
      name: 'Experience',
      target: 'experience',
      component: <ContentExperience />
    },
    {
      id: 4,
      name: 'Contact',
      target: 'contact',
      component: <ContentContact />
    },
    {
      id: 5,
      name: 'Resume',
      target: 'resume',
      component: <ContentResume />
    }
  ]
  const socials = [
    'https://github.com/dmattox10',
    'https://linkedin.com/in/dmattox10',
    'https://medium.com/@damndanieldaniel/',
    'https://twitter.com/dmattox10'
  ]

  const [activeItem, setActiveItem] = useState()

  const setActive = (id) => {
    setActiveItem(prevState => id)
  }

  return (
    <div className='App'>
      {hasTimerElapsed
        ? <Layout
            navItems={navItems}
            activeItem={activeItem}
            setActive={setActive}
            socials={socials}
            hasTimerElapsed={hasTimerElapsed}
          />
        : <Loader />}
    </div>
  )
}

export default App
