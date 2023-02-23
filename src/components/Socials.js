import React from 'react';
import links from '../assets/links.json';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiCodewars,  SiFrontendmentor } from 'react-icons/si';

const Socials = () => {
    const {linkedin, github, frontendMentor, codewars} = links;
    return(
        <div className='social__icons'>
            <a href={linkedin} target='_blank'><i>{<BsLinkedin />}</i></a>
            <a href={github} target='_blank'><i>{<BsGithub />}</i></a>
            <a href={codewars} target='_blank'><i>{<SiCodewars />}</i></a>
            <a href={frontendMentor} target='_blank'><i>{<SiFrontendmentor />}</i></a>
        </div>
    )
}

export default Socials;