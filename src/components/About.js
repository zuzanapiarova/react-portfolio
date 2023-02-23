import React from 'react';
import selfie from '../assets/images/selfie.png';
import iuLogo from '../assets/images/iu-logo.png';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { GiPaintBrush } from 'react-icons/gi';
import { GoBook } from 'react-icons/go';
import LinkButtons from './LinkButtons';

const About = () => {
    return(
        <section id='about'>
            <h5>GET TO KNOW ME</h5>
            <h1>ABOUT</h1>
            <div className='container'>
                <div className='about__top'>
                    <div className='introduction'>
                        <div className='selfie--wrapper'>
                            <img src={selfie} alt='self-portrait'/>
                        </div>
                        <div className='general__info'>
                                <p>AGE: 22</p>
                                <p>BASED IN: Banská Bystrica, SLOVAKIA</p>
                                <p>CURRENT CITY: Eindhoven, NETHERLANDS</p>
                                <p>UNIVERSITY: International university of Applied Sciences, GERMANY</p>
                                <p>FIELD OF STUDY: Bachelor of Science in Software development</p>
                                
                                <div className='cta'>
                                <a href='https://www.iu.org/about/story-of-iu/' target='_blank'><img className='iu-logo--wrapper' src={iuLogo}></img></a>
                                    <LinkButtons name='CVdownload' />
                                    <LinkButtons name='CVopen' /> 
                                </div> 
                        </div>
                    </div>
                    
                    <div className='about__cards'>
                        <h4>HOW I WOULD DESCRIBE MYSELF</h4>
                        <div className='about__card'>
                                    <div className='characteristic'>
                                        <i><GiPaintBrush /></i> 
                                        <p>Creative<br/>person</p>
                                    </div>
                                    <div className='characteristic'>
                                        <i><HiOutlinePuzzle /></i>
                                        <p>Problem<br/>solver</p>
                                    </div>
                                    <div className='characteristic'>
                                       <i><GoBook /> </i>
                                       <p>Fast<br/>learner </p> 
                                    </div>                                                                 
                        </div> 
                    </div>
                </div>
                <div className='about__bottom'>
                <div id='timeline' className='about__container'>
                    <div className='timestamps'>
                        <p>started studying ARCHITECTURE at CVUT, Prague </p>
                        <p>left university 2 years later due to COVID pandemic</p>
                        <p>moved to NETHERLANDS</p>
                        <p>started learning PROGRAMMING on my own</p>
                        <p>enrolled in a university to study SOFTWARE DEVELOPMENT</p>
                        <p>started working on personal PROJECTS and PORTFOLIO</p>
                        <p>searching for an INTERNSHIP</p>
                    </div>
                </div>
                <div id='personal' className='about__container'>
                        <div className='hobbies'>
                            <p>started studying ARCHITECTURE at CVUT, Prague </p>
                            <p>left university 2 years later due to COVID pandemic</p>
                            <p>moved to NETHERLANDS</p>
                            <p>started learning PROGRAMMING on my own</p>
                            <p>enrolled in a university to study SOFTWARE DEVELOPMENT</p>
                            <p>started working on personal PROJECTS and PORTFOLIO</p>
                            <p>searching for an INTERNSHIP</p>
                        </div>
                </div>
                </div>        
            </div>       
        </section>
    )
}

export default About;




//introduction
    //description  name, age, origin

//education
    //description
    //archi
    //iu
    //codecademy certificates

//timeline

//hobbies
    //piano
    //thrifting
    //interior design
    //crafts
    //hiking

    //hobby card
        //name
        //background-photo



