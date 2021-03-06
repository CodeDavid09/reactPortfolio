import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    // NavBtn,
    // NavBtnLink,
} from './NavbarElements';



export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onclick={toggleHome}>DG Web Development</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}>
                                    About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects"
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}>
                                    Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills"
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}>
                                    Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}>
                                    Contact Me</NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to="/contact">Contact Me</NavBtnLink>
                        </NavBtn> */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;