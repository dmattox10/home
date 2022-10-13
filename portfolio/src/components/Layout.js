import LColumn from './LColumn'
import RColumn from './RColumn'
import Header from './Header'
import Content from './Content'

const Layout = (props) => {

    return (
        <div className='grid'>
            <article className='module desktop-12 tablet-12'>
                <Header />
            </article>
            <article className='module desktop-2 tablet-4 col'>
                <LColumn id='primary' />
            </article>
            <article className='module desktop-8 tablet-8'>
                <Content />
            </article>
            <article className='module desktop-2 tablet-4 col'>
                <RColumn  id='secondary' />
            </article>
        </div>
    )
}

export default Layout