import LColumn from './LColumn'
import RColumn from './RColumn'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Banner from './Banner'

const Layout = (props) => {
    const {navItems, activeItem, setActive} = props

    return (
        <div className='grid'>
            <article className='module desktop-12 tablet-12'>
                <Header navItems={navItems} activeItem={activeItem} setActive={setActive} />
            </article>
            <article className='module desktop-2 tablet-2 col'>
                <LColumn/>
            </article>
            <article className='module desktop-8 tablet-8'>
                <Content navItems={navItems} activeItem={activeItem} setActive={setActive} />
            </article>
            <article className='module desktop-2 tablet-2 col'>
                <RColumn/>
            </article>
            <article className="module desktop-12 tablet-12">
                <Footer />
            </article>
        </div>
    )
}

export default Layout