import LColumn from './LColumn'
import RColumn from './RColumn'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = (props) => {

    return (
        <div className='grid'>
            <article className='module desktop-12 tablet-12'>
                You can't see me!
                <Header />
            </article>
            <article className='module desktop-2 tablet-2 col'>
                <LColumn/>
            </article>
            <article className='module desktop-8 tablet-8'>
                <Content />
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