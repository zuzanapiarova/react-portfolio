import React, { useState } from 'react'; 
import { CgDarkMode } from 'react-icons/cg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Nav = () => {

    //const [activeLink, setActiveLink] = useState('#');
    
    //onClick={() => setActiveLink('#')} className={activeLink === '#' ? 'active' : ''}
    // onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}
    //onClick={() => setActiveLink('#projects')} className={activeLink === '#projects' ? 'active' : ''}
    // onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}
    // onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}

    //change active link to the one thats in the window!!!
    return(
        <nav>
            <div className='links'>
                <Link activeClass="active" offset={-300} smooth spy to="home">
                    <a >Home</a>
                </Link>
                <Link activeClass="active" offset={-300} smooth spy to="skills">
                    <a >Skills</a>
                </Link>
                <Link activeClass="active" offset={-300} smooth spy to="projects">
                    <a >Projects</a>
                </Link>
                <Link activeClass="active" offset={-300} smooth spy to="about">
                    <a >About me</a>
                </Link>
                <Link activeClass="active" offset={-300} smooth spy to="contact">
                    <a >Contact</a>
                </Link>
                <button id='dark-mode'>{<CgDarkMode />}</button>
            </div>
        </nav>
    )
}

export default Nav;