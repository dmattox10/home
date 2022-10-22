import LColumn from './LColumn'
import RColumn from './RColumn'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = (props) => {
    const { navItems, activeItem, setActive, socials } = props

    return (
        <div className='grid'>
            <article className='module desktop-12 tablet-12'>
                <Header navItems={navItems} activeItem={activeItem} setActive={setActive} />
            </article>
            <article className='module desktop-1 tablet-1 col'>
                <LColumn socials={ socials }/>
            </article>
            <article className='module desktop-10 tablet-10'>
                <Content navItems={navItems} activeItem={activeItem} setActive={setActive} />
            </article>
            <article className='module desktop-1 tablet-1 col'>
                <RColumn/>
            </article>
            <article className="module desktop-12 tablet-12">
                <Footer />
            </article>
        </div>
    )
}

export default Layout