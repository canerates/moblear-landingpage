import React, {useState} from 'react';
import logo from '../assets/webpage-logo.png';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
    const [navStatus, setNavStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavStatus(true);
        }
        else {
            setNavStatus(false);
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.addEventListener('scroll', changeBackground);

    return(
            <Navbar expand='xs' fixed='top' container='md' className={navStatus || isOpen ? 'navbar-active' : ''}>
                <NavbarBrand href="#home">
                    <div className='logo'>
                        <img src={logo} alt=''/>
                    </div>
                </NavbarBrand>
                <Nav className={isOpen ? 'nav-opened ms-auto' : 'ms-auto'} navbar>
                    <NavItem>
                        <a className='nav-link' activeClass='active' target='_blank' rel='noopener noreferrer' href='https://testflight.apple.com/join/IK7rzLiG'>Download</a>
                    </NavItem>
                </Nav>
            </Navbar>
    );
}

export default NavigationBar;
