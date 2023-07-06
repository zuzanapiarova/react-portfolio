import React from 'react';
import selfie from '../assets/images/selfie.png';
import iuLogo from '../assets/images/iu-logo.png';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { GiPaintBrush } from 'react-icons/gi';
import { GoBook } from 'react-icons/go';
import LinkButtons from './LinkButtons';
import Timeline from './Timeline.js';
import { v4 as uuid } from 'uuid';
import Gallery from './Gallery.js';

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
                                <p>NAME: ZUZANA PIAROVA</p>
                                <p>AGE: 23</p>
                                <p>FROM: Banská Bystrica, SLOVAKIA</p>
                                <p>BASED IN: Prague, CZECHIA</p>
                                <p>UNIVERSITY: International university of Applied Sciences, GERMANY</p>
                                <p>FIELD OF STUDY: Bachelor of Science in Software development</p>
                                
                                <div className='cta'>
                                    <a href='https://www.iu.org/about/story-of-iu/' target='_blank' rel="noreferrer"><img className='iu-logo--wrapper' src={iuLogo} alt='international university of applied sciences logo'></img></a>
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
                    <div className='timeline'>
                        <h5>IMPORTANT EVENTS</h5>
                        <Timeline />
                    </div>
                    <div className='gallery'>
                      <h5>IN MY FREE TIME ... </h5>
                      <Gallery />
                    </div> 
                </div>      
            </div>       
        </section>
    )
}

export default About;


