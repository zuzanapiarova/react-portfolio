import React, { useState, useEffect } from 'react'; 
import { CgDarkMode } from 'react-icons/cg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Nav = () => {

    //const [activeLink, setActiveLink] = useState('#');
    
    //onClick={() => setActiveLink('#')} className={activeLink === '#' ? 'active' : ''}
    // onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}
    //onClick={() => setActiveLink('#projects')} className={activeLink === '#projects' ? 'active' : ''}
    // onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}
    // onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}

    useEffect(() => {
    }, []);

    let isLight = true;
    let blobs;
    let characteristicsBlobs;

    useEffect(() => {
        blobs = [...document.documentElement.querySelectorAll([".blob"])];
        characteristicsBlobs = [...document.documentElement.querySelectorAll([".characteristic"])];
    }, [])

    const darkMode = () => {
        if(isLight){
            document.documentElement.style.setProperty('--text', '#d1d1d1'); //set text to light
            document.documentElement.style.setProperty('--text-white', '#222222'); //set white text to dark
            document.documentElement.style.setProperty('--secondary', 'rgba(111, 255, 0)'); //set red to green
            document.documentElement.style.setProperty('--bg', '#222222'); //set background to dark
            document.documentElement.style.setProperty('--glass', 'rgba(0, 0, 0, 0.197)');      
            // invert blob colors
            blobs.forEach(blob => {
                blob.style.filter = 'invert(100%)'
            })
            characteristicsBlobs.forEach(blob => {
                blob.style.filter = 'invert(100%)'
            })
            //invert gradients
            document.documentElement.style.setProperty('--gradient1', 'linear-gradient(45deg, rgba(111, 255, 0), rgba(21, 201, 225), rgba(0, 59, 255)');
            isLight = false;
        }  else {
            document.documentElement.style.setProperty('--text', '');
            document.documentElement.style.setProperty('--text-white', '');
            document.documentElement.style.setProperty('--secondary', '');
            document.documentElement.style.setProperty('--bg', '');
            document.documentElement.style.setProperty('--glass', '');
            blobs.forEach(blob => {
                blob.style.filter = ''
            })
            document.documentElement.style.setProperty('--gradient1', '');
            isLight =true;
            characteristicsBlobs.forEach(blob => {
                blob.style.filter = ''
            })
        }
    }

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
                <button onClick={darkMode} id='dark-mode'>{<CgDarkMode />}</button>
            </div>
        </nav>
    )
}

export default Nav;