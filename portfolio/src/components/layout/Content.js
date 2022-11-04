import { InView } from 'react-intersection-observer'
import ContentHome from '../views/ContentHome'

const Content = (props) => {
  const { navItems, setActive, started, finished, activeItem } = props



  return (

    <div>
      <InView
        as='section'
        id='home'
      >
        <ContentHome started={started} finished={finished} activeItem={activeItem} setActive={setActive} />
      </InView>
      {
                navItems.map((item) => {
                  return (
                    <InView
                      as='section'
                      key={item.id}
                      id={item.target}
                      onChange={(inView, entry) => inView && setActive(item.id)}
                    >
                      <div className='section-body'>
                        {item.component}
                      </div>
                    </InView>
                  )
                })
            }
    </div>
  )
}

export default Content
