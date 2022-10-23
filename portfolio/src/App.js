import { useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'

import { useTimeout } from './hooks/useTimeout'

import Layout from './components/Layout'
import Loader from './Loader'
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
        target: 'about'
    },
    {
        id: 2,
        name: 'Work',
        target: 'work'
    },
    {
        id: 3,
        name: 'Experience',
        target: 'experience'
    },
    {
        id: 4,
        name: 'Contact',
        target: 'contact'
    },
    {
        id: 5,
        name: 'Resume',
        target: 'resume'
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
      { hasTimerElapsed ?
      <Layout 
        navItems={ navItems }
        activeItem={ activeItem }
        setActive={ setActive }
        socials={ socials }
       />
       :
       <Loader />
      }
    </div>
  )
}

export default App
