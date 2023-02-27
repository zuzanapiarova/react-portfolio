import React, { useRef, useEffect } from "react";

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import img8 from '../assets/images/img8.jpeg';
import img9 from '../assets/images/img9.jpeg';
import img10 from '../assets/images/img10.jpeg';
import img11 from '../assets/images/img11.jpeg';
import img12 from '../assets/images/img12.jpeg';
import img13 from '../assets/images/img13.png';
import img14 from '../assets/images/img14.png';

import { v4 as uuid } from 'uuid';
import { register } from 'swiper/element/bundle';
register();

const Gallery = () => {

    const gallery = [
        {
          id: uuid(),
          num: 1, 
          image: img1, 
          description: 'I am working on paintings and wall art in my gallery wall'
        }, 
        {
          id: uuid(),
          num: 2, 
          image: img2, 
          description: 'I like to play puzzle and other board games'
        }, 
        {
          id: uuid(),
          num: 3, 
          image: img3, 
          description: 'Exploring thrift stores'
        }, 
        {
          id: uuid(),
          num: 5, 
          image: img5, 
          description: 'Going on walks and hikes'
        }, 
        {
            id: uuid(),
            num: 8, 
            image: img14, 
            description: 'Doing Codewars challenges to practice logic and algorithms'
          },
          {
            id: uuid(),
            num: 4, 
            image: img4, 
            description: 'Drawing (these drawings I did for an architecture class)'
          },
        {
          id: uuid(),
          num: 6, 
          image: img6, 
          description: 'Abstract paintings'
        },   
        {
          id: uuid(),
          num: 9, 
          image: img9, 
          description: 'Snowboarding during winter'
        }, 
        {
          id: uuid(),
          num: 12, 
          image: img12, 
          description: 'When at home, spending time outdoors with my family'
        }, 
      {
        id: uuid(),
        num: 13, 
        image: img13, 
        description: '... and learning to code :)'
      }
      /* {
          id: uuid(),
          num: 11, 
          image: img11, 
          description: 'More thrifting'
        }, 
        {
        id: uuid(),
        num: 10, 
        image: img10, 
        description: 'More painting and wall art'
      },
      {
          id: uuid(),
          num: 7, 
          image: img7, 
          description: 'More board games'
        }*/
      ];
  
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
  

    const populateGallery = gallery.map((slide) => {
        return (
            <swiper-slide>
            <div className='gallery__card'>            
                  <img src={slide.image}/>  
                  <p>{slide.description}</p>          
            </div>  
            </swiper-slide>      
        ) 
    })

    return (
        <div  className='gallery--wrapper' >
                   <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true" pagination="true">   
                        {populateGallery}     
                   </swiper-container>
                   
                   
        </div>
    )
}

export default Gallery;