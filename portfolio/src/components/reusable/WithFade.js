import React from 'react'
import { useFade } from '../../hooks/useFade'
import { useEffectOnceWhen } from 'rooks'

const WithFade = (Component, props) => {

    const { time, hasTimerElapsed } = props

    const [isVisible, setVisible, fadeProps] = useFade(false, time)

    useEffectOnceWhen(() => {
        setTimeout(() => {
            setVisible(true, time)
            console.log(hasTimerElapsed)
        }, time * 2)
    }, hasTimerElapsed)

    return function WithFadeComponent () {

    return (
        <div className='withFade'>
            {
                isVisible && <Component {...fadeProps} {...props} />
            }
        </div>
    )
  }
}

export default WithFade