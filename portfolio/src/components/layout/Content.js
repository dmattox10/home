import { InView } from 'react-intersection-observer'
import ContentHome from '../views/ContentHome'
import { createRef, useRef } from 'react'
import RefWrapper from '../reusable/RefWrapper'

const Content = (props) => {
  const { navItems, setActive, started, finished, activeItem, onClickResume } = props

  return (

    <div>
      <InView
        as='section'
        id='home'
      >
        <ContentHome nodeRef={createRef(null)} started={started} finished={finished} onClickResume={onClickResume} />
      </InView>
      {
                navItems.map(({id, name, target, component, nodeRef}) => {
                  return (
                    <InView
                      as='section'
                      key={id}
                      id={target}
                      onChange={(inView) => inView && setActive(id)}
                    >
                      <div className='section-body'>
                        <RefWrapper nodeRef={nodeRef} >
                          {component}
                        </RefWrapper>
                      </div>
                    </InView>
                  )
                })
            }
    </div>
  )
}

export default Content
