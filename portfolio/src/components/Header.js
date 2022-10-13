import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = (props) => {
    
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container">
            <AnchorLink className="navbar-brand" href="#">MX</AnchorLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <AnchorLink offset={() => 100} className='nav-link' href='#about'>About</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink offset={() => 100} className='nav-link' href='#work'>Work</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink offset={() => 100} className='nav-link' href='#experience'>Experience</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink offset={() => 100} className='nav-link' href='#contact'>Contact</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink offset={() => 100} className='nav-link' href='/public/Resume.pdf'>Resume</AnchorLink>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    )
}

export default Header