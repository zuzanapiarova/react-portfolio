import React, { useRef, useEffect } from 'react';
import selfie from '../assets/images/selfie.png';
import iuLogo from '../assets/images/iu-logo.png';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { GiPaintBrush } from 'react-icons/gi';
import { GoBook } from 'react-icons/go';
import LinkButtons from './LinkButtons';
import TimelineEvent from './TimelineEvent.js';
import { v4 as uuid } from 'uuid';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

import { register } from 'swiper/element/bundle';
register();

const About = () => {

    const timestamps = [
        {
            id:uuid(), 
            num: 1,
            description: 'started studying ARCHITECTURE at CVUT, Prague ', 
            date: 'September 2019'
        }, 
        {
            id:uuid(), 
            num: 2,
            description: 'left university 2 years later due to COVID pandemic', 
            date: 'June 2021'
        }, 
        {
            id:uuid(), 
            num: 3,
            description: 'moved to NETHERLANDS', 
            date: 'October 2021'
        }, 
        {
            id:uuid(), 
            num: 4,
            description: 'started learning PROGRAMMING on my own', 
            date: 'December 2021'
        }, 
        {
            id:uuid(), 
            num: 5,
            description: 'enrolled in a university to study SOFTWARE DEVELOPMENT', 
            date: 'April 2022'
        },
        {
            id:uuid(), 
            num: 6,
            description: 'started working on personal PROJECTS and PORTFOLIO', 
            date: 'November 2022'
        }, 
        {
            id:uuid(), 
            num: 7,
            description: 'searching for an INTERNSHIP', 
            date: 'March 2023'
        }
    ]

    const populateTimeline = timestamps.map(event => {
        return (
            <TimelineEvent event={event} />
        )
    });

    const images = [img1, img2];

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
          const [swiper, progress] = e.detail;
          console.log(progress);
        });
    
        swiperElRef.current.addEventListener('slidechange', (e) => {
          console.log('slide changed');
        });
      }, []);

 
    const populateImages = images.map((image) => {
        return (
            <swiper-slide>
            <div className='gallery__card'>            
                  <img src={image}/>            
            </div>  
            </swiper-slide>      
        ) 
    })

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
                                <p>AGE: 22</p>
                                <p>BASED IN: Banská Bystrica, SLOVAKIA</p>
                                <p>CURRENT CITY: Eindhoven, NETHERLANDS</p>
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
                        {populateTimeline}
                    </div>
                   <div className='gallery'>
                    <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true" pagination="true"> 
                        
                         {populateImages}
                        
                    </swiper-container>
                    </div> 
                </div>      
            </div>       
        </section>
    )
}

export default About;


/* 
<h5>LET ME INTRODUCE MYSELF USING PICTURES</h5>
                            <p>started studying ARCHITECTURE at CVUT, Prague </p>
                            <p>left university 2 years later due to COVID pandemic</p>
                            <p>moved to NETHERLANDS</p>
                            <p>started learning PROGRAMMING on my own</p>
                            <p>enrolled in a university to study SOFTWARE DEVELOPMENT</p>
                            <p>started working on personal PROJECTS and PORTFOLIO</p>
                            <p>searching for an INTERNSHIP</p>


<div className='timestamps'>
                        <p>started studying ARCHITECTURE at CVUT, Prague </p>
                        <p>left university 2 years later due to COVID pandemic</p>
                        <p>moved to NETHERLANDS</p>
                        <p>started learning PROGRAMMING on my own</p>
                        <p>enrolled in a university to study SOFTWARE DEVELOPMENT</p>
                        <p>started working on personal PROJECTS and PORTFOLIO</p>
                        <p>searching for an INTERNSHIP</p>
                    </div>
                    */

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



