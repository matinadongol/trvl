import React, { useState, useEffect } from 'react';
import { NavLink } from  'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] =useState(true);

    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container ">
                    <NavLink exact activeClassName="active_class" to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <NavLink exact activeClassName="active_class" to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className = 'nav-item'>
                            <NavLink exact activeClassName="active_class" to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className = 'nav-item'>
                            <NavLink exact activeClassName="active_class" to='/offers' className='nav-links' onClick={closeMobileMenu}>
                                Offers and Packages
                            </NavLink>
                        </li>
                        <li className = 'nav-item'>
                            <NavLink exact activeClassName="active_class" to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className = 'nav-item'>
                            <NavLink exact activeClassName="active_class" to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
