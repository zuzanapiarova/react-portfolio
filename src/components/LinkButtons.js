import React from "react";

import CV from '../assets/CV.pdf';
import links from '../assets/links.json';

import { BsDownload } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiCodewars,  SiFrontendmentor } from 'react-icons/si';
import { IoBrowsersSharp } from 'react-icons/io5';


//here edit buttons and what they reference and how they look
//for filled button change classNAme to btn__filled
//if you want more buttons wrap them in div with className='cta'
const LinkButtons = (props) => {

   const {linkedin, github, frontendMentor, codewars} = links;

   const getLink = () => {
    //possible buttons
        if(props.name == 'github'){
            return <a className='btn' href={github} target='_blank'> {<BsGithub />} Check my GitHub repositories</a>

        } else if(props.name == 'CVdownload'){
            return <a className='btn' href={CV} download> {<BsDownload />} Download CV</a>

        } else if (props.name == 'CVopen'){
           return  <a className='btn' href={CV} target='_blank'> {<IoBrowsersSharp />} Open CV</a>

        } else if(props.name == 'codewars'){
            return <a className='btn' href={codewars} target='_blank'> {<SiCodewars />} Check my Codewars solutions</a>

        } else if( props.name == 'frontendmentor'){
            return <a className='btn' href={frontendMentor} target='_blank'> {<SiFrontendmentor />}Check my FrontendMentor challenges</a>

        } else if(props.name == 'contact'){
            return <a className='btn__filled' href='#contact'>{<AiOutlineMail />} Contact me</a>

        }  else if(props.name == 'linkedin'){
            return <a className='btn' href={linkedin} target='_blank'> {<BsLinkedin />}View my LinkedIn profile</a>
        }
    } 

    return(
        <div className='cta'> 
            {getLink()}
        </div>
    )
}

export default LinkButtons;