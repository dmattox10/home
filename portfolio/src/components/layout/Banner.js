import { useLayoutEffect, useState } from 'react'
import { useIntervalWhen } from 'rooks'

const Banner = (props) => {
  const timeDelay = 2000

  const startingClassName = 'top showTop'
  const endingClassName = 'top hideTop'

  const [startTimer, updateStartTimer] = useState(false)
  const [className, updateClassName] = useState(startingClassName)

  useIntervalWhen(() => {
    updateClassName(endingClassName)
  }, timeDelay, startTimer)

  useLayoutEffect(() => {
    updateStartTimer(prevState => true)
  },[])

  return (
    <div className={className}>
      My portfolio is 0% template!
    </div>
  )
}

export default Banner
