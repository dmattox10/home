import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = (props) => {

    const [active, updateActive] = useState(0)

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
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
        <nav className="navbar navbar-expand-md fixed-top navbarScroll">
        <div className="container-md">
            <AnchorLink className="navbar-brand" href="#">MX</AnchorLink>
                <button 
                className='navbar-toggler bento-menu'
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'></span>
	            </button>
            <div
            className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
            id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto">
                {navItems.map((item) => {
                    return (
                        <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`nav-item`}
                        >
                            <AnchorLink 
                                offset={() => 100} 
                                className={`nav-link ${active === item.id && 'active'}`} 
                                href={item.target}>{item.name}</AnchorLink>
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