import React from 'react';
import { v4 as uuid } from 'uuid';

import ProjectCard from './ProjectCard.js';
import LinkButtons from './LinkButtons';

import blob from '../assets/images/magicpattern-blob-1677062059902.svg';
import cardValidation from '../assets/images/card-validation.png';
import FAQaccordion from '../assets/images/FAQaccordion.png';
import pricingComponent from '../assets/images/pricingComponent.png';
import signupForm from '../assets/images/signupForm.png';
import ratingComponent from '../assets/images/ratingComponent.png';
import weatherApp from '../assets/images/weatherApp.png';
import contactManager from '../assets/images/contactManager.png';
import panelGallery from '../assets/images/panelGallery.png';
import clockApp from '../assets/images/clockApp.png';
import stickyNav from '../assets/images/stickyNav.png';
import slideIn from '../assets/images/slideIn.png';
import typeAhead from '../assets/images/typeAhead.png';

const Projects = () => {

    const projects = [
        { 
          number: 1,
          id: uuid(), 
          image: cardValidation,
          name: 'Card Validation Form', 
          description: 'This was  a very advanced project for me and I learned a lot by doing this challenge. I dived deeply into form validations and learned regex for this project. I tested a lot here so the submit button is truly "foolproof" - it will not accept forbidden values and show proper error messages.',
          skills: 'HTML, CSS, Flexbox, JavaScript, Regular expressions',
          github: 'https://github.com/zuzanapiarova/interactive-card',
          site: 'https://zuzanapiarova.github.io/interactive-card/'
        }, 
        {
            number: 9,
            id: uuid(), 
            image: clockApp,
            name: 'Digital and analog clock', 
            description: 'Practiced Javascript date and time objects and did simple Math in Javascript, styled the clock with ::before and ::after pseudo elements, added my twist to a challenge from JavaScript30 challenges by Wes Bos',
            skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
            github: 'https://github.com/zuzanapiarova/clock--app',
            site: 'https://zuzanapiarova.github.io/clock--app/'
          }, 
        {
          number: 2,
          id: uuid(), 
          image: pricingComponent,
          name: 'Pricing Component with Toggle button', 
          description: 'Toggle component that toggles yearly/monthly prices. Worked with an input type checkbox for the first time. Practiced using events and event.currentTarget and learned a little about event propagation. Also practiced for and forEach loops. ',
          skills:'HTML, CSS, Flexbox, Vanilla Javascript',
          github: 'https://github.com/zuzanapiarova/pricing-component',
          site: 'https://zuzanapiarova.github.io/pricing-component/'
        }, 
        {
          number: 3,
          id: uuid(), 
          image: FAQaccordion,
          name: 'FAQ collapsible answers', 
          description: 'I learned how to make collapsible elements and got to practice for loops in JavaScript. What challenged me in this project were the images and their proper responsive sizing. I added a scroll bar if the expanded answers would be too high, so the height of our component stays the same even when there is more content expanded.',
          skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
          github: 'https://github.com/zuzanapiarova/8-faq-collapsible-elements',
          site: 'https://zuzanapiarova.github.io/8-faq-collapsible-elements/'
        }, 
        {
          number: 4,
          id: uuid(), 
          image: signupForm,
          name: 'Signup form validation', 
          description: 'This was my first bigger project and it was a challenge, but it gave me a lot and after completing this I felt like I understand Javascript much better. First time created a form validation in HTML, learned how to write validation errors in JS and how to style our own validation errors in CSS.',
          skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
          github: 'https://github.com/zuzanapiarova/6-signup-form',
          site: 'https://zuzanapiarova.github.io/6-signup-form/'
        }, 
        {
            number: 5,
            id: uuid(), 
            image: ratingComponent,
            name: 'Rating component', 
            description: 'One of the first projects I did on my own. Practiced changing components visibility and saving user input in Javascript variables, and showing this variable in another component.',
            skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
            github: 'https://github.com/zuzanapiarova/7-rating-component',
            site: 'https://zuzanapiarova.github.io/7-rating-component/'
          }, 
          {
            number: 6,
            id: uuid(), 
            image: weatherApp,
            name: 'Weather app using API', 
            description: 'First project to learn API. Used google maps API to get geolocation of a place, and OpenWeather API to get weather data. Started with a youtube tutorial, but also had to do some research and read documentations myself as the methods from tutorial used were deprecated or not available. Also learned how to encrypt API keys. My first project using Node.js, installing different packages and starting a node server. ',
            skills: 'HTML, CSS, Flexbox, Javascript, API, Node.js',
            github: 'https://github.com/zuzanapiarova/weather-app',
            site: ''
          },
          {
            number: 12,
            id: uuid(), 
            image: typeAhead,
            name: 'Type ahead with USA cities API', 
            description: 'The first time I did a challenge with a simple API, a simple search that shows American cities that match the typed in term, a challenge from JavaScript30 challenges by Wes Bos',
            skills: 'HTML, CSS, Flexbox, Javascript, API',
            github: 'https://github.com/zuzanapiarova/type--ahead',
            site: 'https://zuzanapiarova.github.io/type--ahead/'
          },
          {
            number: 7,
            id: uuid(), 
            image: contactManager,
            name: 'Contact Manager', 
            description: 'First react project. Focus was not on UI but on learning react and see how components interact. I had some prior knowledge of React, but this was the first time using knowledge in practice. Done with a tutorial that showed me how the knowledge is implemented in building projects. Also had to do some research myself because of deprecated version used in tutorial. Gave me a good base for the most common uses of React.',
            skills: 'HTML, CSS, Flexbox, Javascript, React - JSX, hooks, routing, axios etc., Node.js',
            github: 'https://github.com/zuzanapiarova/react-contact-manager',
            site: ''
          }, 
          {
            number: 8,
            id: uuid(), 
            image: panelGallery,
            name: 'Flex panel gallery', 
            description: 'Layout and flexbox practice, personalized the challenge by adding my own hobbies to a challenge from JavaScript30 challenges by Wes Bos',
            skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
            github: 'https://github.com/zuzanapiarova/hobby--panels',
            site: 'https://zuzanapiarova.github.io/hobby--panels/'
          }, 
          {
              number: 10,
              id: uuid(), 
              image: stickyNav,
              name: 'Sticky navigation', 
              description: 'Learned how to do navigation that sticks to the top of the page with Javascript and practiced DOM manipulation with Javascript properties like offsetTop and scrollY, a challenge from JavaScript30 challenges by Wes Bos',
              skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
              github: 'https://github.com/zuzanapiarova/sticky--nav',
              site: 'https://zuzanapiarova.github.io/sticky--nav/'
            }, 
            {
              number: 11,
              id: uuid(), 
              image: slideIn,
              name: 'Slide-in on scroll pics', 
              description: 'Very interesting challenge to me as I really like the slide-in on scroll animations, and this was a first step to learning to build them. I learned how to manipulate the DOM window object and properties like offset and scrollY, also did some math to get desired values, a challenge from JavaScript30 challenges by Wes Bos',
              skills: 'HTML, CSS, Flexbox, Vanilla Javascript',
              github: 'https://github.com/zuzanapiarova/scroll-slide-in',
              site: 'https://zuzanapiarova.github.io/scroll-slide-in/'
            }
]

    const renderProjectList = projects.map(project => {
        return (
           <ProjectCard project={project}/>
        )
    })

    return(
        <section id='projects'>
            <h5>CHECK MY WORK</h5>
            <h1>PROJECTS</h1>
            <div className='cta'>
                <LinkButtons name='github' />
                <LinkButtons name='codewars' />
                <LinkButtons name='frontendmentor' />
            </div>
            <div className='projects__container'>
              {renderProjectList}
            </div>
            <img className='blob3' src={blob} alt='blob'></img>
        </section>
    )
}

export default Projects;

//add searchbar to search projects according to skills

