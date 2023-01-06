import React, { useState, useEffect, createRef, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import cuid  from 'cuid'

const ContentHome = (props) => {

    const { onClickResume, started, finished } = props

    const [show, setShow] = useState(false) 

    useEffect(() => {
        if (!show) {
            setShow(true)
        }
    }, [show])

    const homeItems = [
        {
            contents: (<h1>Hi, I'm</h1>),
            nodeRef: createRef(null),
            id: cuid()

        },
        {
            contents: (<h2>Daniel Mattox, <div>your new</div></h2>),
            nodeRef: createRef(null),
            id: cuid()
        },
        {
            contents: (<h3>Full-Stack Web Developer.</h3>),
            nodeRef: createRef(null),
            id: cuid()
        },
        {
            contents: (<h4>I've no pen to sell you, but since you're here, take this<button onClick={() => onClickResume()} className='btn'>Resume!</button></h4>),
            nodeRef: createRef(null),
            id: cuid()
        },
    ]

    
    const MovingComponent = () => {

        return ( 
            
                <TransitionGroup className='section-body'>
                    {homeItems.map(({ contents, nodeRef, id }) => {
                        return (<CSSTransition
                        key={id}
                        classNames="anim"
                        appear
                        nodeRef={nodeRef}
                        timeout={1000}
                        onEnter={() => {
                            console.log(id)
                        }}
                        in={true}
                        unmountOnExit={true}
                        >
                        <span className='layer-1 anim'>
                            {contents}
                        </span>
                    </CSSTransition>)
                    })}
                </TransitionGroup>
            
        )
    }

    // <CSSTransition
    //                     key={id}
    //                     classNames="anim"
    //                     appear
    //                     timeout={400}
    //                     onEnter={() => {
    //                         console.log(1)
    //                     }}
    //                     in={show}
    //                     unmountOnExit
    //                     >
    //                     <span className='anim'>
    //                         <h1>Hi, I'm</h1>
    //                     </span>
    //                 </CSSTransition>
    //                 <CSSTransition
    //                 key="line2"
    //                 classNames="anim"
    //                     appear
    //                     timeout={400}
    //                     onEnter={() => {
    //                         console.log(1)
    //                     }}
    //                     in={show}
    //                     unmountOnExit
    //                 >
                        
    //                 </CSSTransition>
    //                 <CSSTransition
    //                 key="line3"
    //                 classNames="anim"
    //                 appear
    //                 timeout={400}
    //                 onEnter={() => {
    //                     console.log(1)
    //                 }}
    //                 in={show}
    //                 unmountOnExit
    //                 >
    //                     <span className='anim'>
    //                         <h3>Full-Stack <div></div>Web Developer.</h3>
    //                     </span>
    //                 </CSSTransition>
    //                 <CSSTransition
    //                 key="line4"
    //                 classNames="anim"
    //                     appear
    //                     timeout={400}
    //                     onEnter={() => {
    //                         console.log(1)
    //                     }}
    //                     in={show}
    //                     unmountOnExit
    //                 >
    //                     <span className='anim'>
    //                         <h4>I've no pen to sell you, but since you're here, take this<button className='btn'>Resume!</button></h4>
    //                     </span>
    //                 </CSSTransition>

    // <MovingWrapper className='section-body'>
    // </MovingWrapper>

    // useEffect(() => {
    //     if (!started && !finished) {
    //         setActiveItem(<StillComponent />)
    //     }
    //     else if (started && !finished) {
    //         setActiveItem(<MovingComponent />)
    //     }
    //     else if (started && finished) {
    //         setActiveItem(<StillComponent />)
    //     }
    // }, [started, finished])

    // const Component = () => {
    //     const componentBody = activeItem
    //     return componentBody
    // }

    return <MovingComponent />
    
}

export default ContentHome

// const skewBlur = keyframes`
//     0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
//     25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
//     100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
//   `

//     const MovingWrapper = styled.div`

//     span {
//         opacity: 0;
//         display: block;
//         animation-name: ${skewBlur};
//         animation-duration: 6s;
//         animation-fill-mode: forwards;
//         -webkit-animation-fill-mode: forwards;
//         animation-iteration-count: 1;
//     }

//     span:nth-last-child(1) { 
//         animation-delay: 0.2s;
//     }

//     span:nth-last-child(2) {
//         animation-delay: 0.4s;
//     }

//     span:nth-last-child(3) {
//         animation-delay: 0.6s;
//     }

//     span:nth-last-child(4) {
//         animation-delay: 0.8s;
//     }

//     span:nth-last-child(5) {
//         animation-delay: 1s;
//     }`

    // const StillWrapper = styled.div`
    // span {
    //     opacity: 1;
    //     display: block;
    // }
    // `

    // const StillComponent = () => {


    //     return (
    //         <StillWrapper>
    //             <span className='layer-1'>
    //                     <h1>Hi, I'm</h1>
    //             </span>
    //             <span className='layer-1'>
    //                 <h2>Daniel Mattox, <div>your new</div></h2>
    //             </span>
    //             <span className='layer-1'>
    //                 <h3>Full-Stack Web Developer.</h3>
    //             </span>
    //             <span className='layer-1'>
    //                 <h4>I've no pen to sell you, but since you're here, take this<button className='btn'>Resume!</button></h4>
    //             </span>
    //         </StillWrapper>
    //     )
    // }

    // const dopple = ( started, finished ) => {

    //     if (!started && !finished) {
    //         return <StillComponent />
    //     }
    //     else if (started && !finished) {
    //         return <MovingComponent />
    //     }
    //     else if (started && finished) {
    //         return <StillComponent />
    //     }
        
    // }

    // const [started, setStarted] = useState(false)
    // const [finished, setFinished] = useState(false)
    // const [activeItem, setActiveItem] = useState(dopple())

    // useEffect(() => {
    //     if (!started && !finished) {
    //         setStarted(true)
    //         console.log('starting')
    //         setTimeout(6000, setFinished(true))
    //         setActiveItem(dopple)
    //     }
    //     else if (started && !finished) {
    //         console.log('started')
    //         setActiveItem(dopple)
    //     }
    //     else if (started && finished) {
    //         console.log('finished')
    //         setActiveItem(dopple)
    //     }
    // }, [started, finished])
