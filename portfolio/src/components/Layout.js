import LColumn from './LColumn'
import RColumn from './RColumn'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const Layout = (props) => {

    return (
        <div className='grid'>
            <article className='nodule desktop-12 tablet-12'>
                <Header />
            </article>
            <article className='module desktop-2 tablet-4 col'>
                <LColumn />
            </article>
            <article className='module desktop-8 tablet-8'>
                <Content />
            </article>
            <article className='module desktop-2 tablet-4 col'>
                <RColumn />
            </article>
        </div>
    )
}

export default Layout