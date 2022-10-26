import MovingText from 'react-moving-text'

const ContentHome = (props) => {

    return (
        <div className="section-body">
            <MovingText
                type='fadeIn'
                duration='1s'
                delay='1s'
                direction='normal'
                timing='ease'
                iteration='1'
                >
                    Hi, I'm
                </MovingText>
        </div>
    )
}

export default ContentHome