import LColumn from './layout/LColumn'
import RColumn from './layout/RColumn'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

const Layout = (props) => {
  const { navItems, activeItem, setActive, socials, hasTimerElapsed } = props

  return (
    <div className='grid'>
      <article className='module desktop-12 tablet-12'>
        <Header navItems={navItems} activeItem={activeItem} setActive={setActive} />
      </article>
      <article className='module desktop-1 tablet-1 col'>
        <LColumn socials={socials} />
      </article>
      <article className='module desktop-10 tablet-10'>
        <Content navItems={navItems} activeItem={activeItem} setActive={setActive} hasTimerElapsed={hasTimerElapsed} />
      </article>
      <article className='module desktop-1 tablet-1 col'>
        <RColumn />
      </article>
      <article className='module desktop-12 tablet-12'>
        <Footer />
      </article>
    </div>
  )
}

export default Layout
