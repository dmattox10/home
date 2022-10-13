import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = (props) => {

    const [active, updateActive] = useState(0)
    
    const setActive = (id) => {
        updateActive(prevState => id)
    }

    const navItems = [
        {
            id: 0,
            name: 'About',
            target: '#about'
        },
        {
            id: 1,
            name: 'Work',
            target: '#work'
        },
        {
            id: 2,
            name: 'Experience',
            target: '#experience'
        },
        {
            id: 3,
            name: 'Contact',
            target: '#contact'
        },
        {
            id: 4,
            name: 'Resume',
            target: '#resume'
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container">
            <AnchorLink className="navbar-brand" href="#">MX</AnchorLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                {navItems.map((item) => {
                    return (
                        <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`nav-item ${active == item.id && 'active'}`}
                        >
                            <AnchorLink offset={() => 100} className='nav-link' href={item.target}>{item.name}</AnchorLink>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header