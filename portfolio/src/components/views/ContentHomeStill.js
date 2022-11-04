import styled from 'styled-components'

    const ContentHomeStill = () => {

        const StillWrapper = styled.div`
        span {
            opacity: 1;
            display: block;
        }
        `

        return (
            <StillWrapper className='section-body done'>
                <span className='layer-1'>
                        <h1>Hi, I'm</h1>
                </span>
                <span className='layer-1'>
                    <h2>Daniel Mattox, <div>your new</div></h2>
                </span>
                <span className='layer-1'>
                    <h3>Full-Stack Web Developer.</h3>
                </span>
                <span className='layer-1'>
                    <h4>I've no pen to sell you, but since you're here, take this<button className='btn'>Resume!</button></h4>
                </span>
            </StillWrapper>
        )
    }

    export default ContentHomeStill