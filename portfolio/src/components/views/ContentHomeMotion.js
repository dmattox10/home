import styled, { keyframes } from 'styled-components'

const ContentHomeMotion = () => {

    const skewBlur = keyframes`
    0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
    25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
    100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  `

    const MovingWrapper = styled.div`

    span {
        opacity: 0;
        display: block;
        animation-name: ${skewBlur};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }

    span:nth-last-child(1) { 
        animation-delay: 0.2s;
    }

    span:nth-last-child(2) {
        animation-delay: 0.4s;
    }

    span:nth-last-child(3) {
        animation-delay: 0.6s;
    }

    span:nth-last-child(4) {
        animation-delay: 0.8s;
    }

    span:nth-last-child(5) {
        animation-delay: 1s;
    }`

    return ( 
        <MovingWrapper className='section-body'>
            <span className='layer-1'>
                 <h1>Hi, I'm</h1>
            </span>
            <span className='layer-1'>
                <h2>Daniel Mattox, <div>your new</div></h2>
            </span>
            <span className='layer-1'>
                <h3>Full-Stack <div>Web Developer.</div></h3>
            </span>
            <span className='layer-1'>
                <h4>I've no pen to sell you, but since you're here, take this<button className='btn'>Resume!</button></h4>
            </span>
        </MovingWrapper>
    )
}

export default ContentHomeMotion