import { InView } from 'react-intersection-observer'
const Content = (props) => {
    const {navItems, setActive} = props

    return (

        <div>
            <InView as="section"
                id='home'
            >
                <div className='section-body'>Home</div>
            </InView>
            {
                navItems.map((item) => {
                    return (
                        <InView as="section" 
                          key={item.id}
                          id={item.target} 
                          onChange={(inView, entry) => inView && setActive(item.id)}
                        >
                            <div className='section-body'>
                                {item.name}
                            </div>
                        </InView>
                    )
                })
            }
        </div>
    )
}

export default Content