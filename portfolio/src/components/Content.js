import { InView } from 'react-intersection-observer'
const Content = (props) => {
    const {navItems, setActive} = props

    return (

        <div>
            {
                navItems.map((item) => {
                    return (
                        <InView as="section" 
                          key={item.id}
                          id={item.target} 
                          onChange={(inView, entry) => inView && setActive(item.id)}
                        >
                            <div>
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