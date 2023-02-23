import React, { useState } from 'react'; 
import { CgDarkMode } from 'react-icons/cg';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('#')
    //change active link to the one thats in the window!!!
    return(
        <nav>
            <div className='links'>
                <a href='#' onClick={() => setActiveLink('#')} className={activeLink === '#' ? 'active' : ''}>Home</a>
                <a href='#skills' onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''} >Skills</a>
                <a href='#projects' onClick={() => setActiveLink('#projects')} className={activeLink === '#projects' ? 'active' : ''}>Projects</a>
                <a href='#about' onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}>About me</a>
                <a href='#contact' onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''} >Contact</a>
                <button id='dark-mode'>{<CgDarkMode />}</button>
            </div>
        </nav>
    )
}

export default Nav;