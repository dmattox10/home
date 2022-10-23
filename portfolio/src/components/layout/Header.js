import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo32 from '../../img/logo32.png'
const Header = (props) => {
    const {navItems, activeItem, setActive} = props

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return (
        <nav className="navbar navbar-expand-md fixed-top navbarScroll">
            <div className="container-md">
                <AnchorLink className="navbar-brand" href="#">
                    <div className='logo-box'>
                        <img className='logo' src={logo32} alt='logo'/>
                    </div>
                </AnchorLink>
                <button 
                className='navbar-toggler bento-menu'
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'><p>Y</p></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'><p>X</p></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'><p>B</p></span>
                    <span className='navbar-toggler-icon'></span>
                    <span className='navbar-toggler-icon'><p>A</p></span>
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
                                className={`nav-link ${activeItem === item.id && 'active'}`} 
                                href={`#${item.target}`}>{item.name}</AnchorLink>
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