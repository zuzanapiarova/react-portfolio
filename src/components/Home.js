import React, { useRef } from 'react';
import Socials from './Socials.js';
import blob from '../assets/images/magicpattern-blob-1677058980205.svg';
import LinkButtons from './LinkButtons.js';

const Home = () => {

    return(
        <section id='home'>    
        
            <div className='container'>
                <div className='para__deco'>
                    <div className='para__deco--wrapper'>
                        <p className='moving'>javascript/react/API/node.js/HTML/tailwind/CSS/flexbox/REST/redux/JSON/mongoDB/regex/javascript/react/API/node.js/HTML/tailwind/CSS/flexbox/REST/redux/JSON/mongoDB/regex/javascript/react/API/node.js/HTML/tailwind/CSS/flexbox/REST/redux/JSON/mongoDB/regex/javascript/react/API/node.js/HTML/tailwind/CSS/flexbox/REST/redux/JSON/mongoDB/regex/</p>
                        <p className='moving'>tailwind/CSS/JSON/react/mongoDB/API/regex/SASS/javascript/flexbox/redux/node.js/HTML/tailwind/CSS/JSON/react/mongoDB/API/regex/SASS/javascript/flexbox/redux/node.js/HTML/tailwind/CSS/JSON/react/mongoDB/API/regex/SASS/javascript/flexbox/redux/node.js/HTML/tailwind/CSS/JSON/react/mongoDB/API/regex/SASS/javascript/flexbox/redux/node.js/HTML/</p>
                        <p className='moving'>flexbox/redux/API/SASS/JSON/mongoDB/regex/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/API/SASS/JSON/mongoDB/regex/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/API/SASS/JSON/mongoDB/regex/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/API/SASS/JSON/mongoDB/regex/javascript/react/node.js/HTML/tailwind/CSS/</p>
                        <p className='moving'>javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/JSON/mongoDB/regex/API/SASS/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/JSON/mongoDB/regex/API/SASS/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/JSON/mongoDB/regex/API/SASS/javascript/react/node.js/HTML/tailwind/CSS/flexbox/redux/JSON/mongoDB/regex/API/SASS/</p>
                        <p className='moving'>HTML/API/tailwind/CSS/javascript/JSON/react/node.js/SASS/regex/flexbox/redux/mongoDB/HTML/API/tailwind/CSS/javascript/JSON/react/node.js/SASS/regex/flexbox/redux/mongoDB/HTML/API/tailwind/CSS/javascript/JSON/react/node.js/SASS/regex/flexbox/redux/mongoDB/HTML/API/tailwind/CSS/javascript/JSON/react/node.js/SASS/regex/flexbox/redux/mongoDB/</p>
                        <p className='moving'>flexbox/javascript/react/SASS/node.js/HTML/tailwind/CSS/redux/JSON/mongoDB/regex/API/flexbox/javascript/react/SASS/node.js/HTML/tailwind/CSS/redux/JSON/mongoDB/regex/API/flexbox/javascript/react/SASS/node.js/HTML/tailwind/CSS/redux/JSON/mongoDB/regex/API/flexbox/javascript/react/SASS/node.js/HTML/tailwind/CSS/redux/JSON/mongoDB/regex/API/</p>
                        <p className='moving'>redux/JSON/mongoDB/API/javascript/react/node.js/HTML/tailwind/CSS/flexbox/regex/SASS/redux/JSON/mongoDB/API/javascript/react/node.js/HTML/tailwind/CSS/flexbox/regex/SASS/redux/JSON/mongoDB/API/javascript/react/node.js/HTML/tailwind/CSS/flexbox/regex/SASS/redux/JSON/mongoDB/API/javascript/react/node.js/HTML/tailwind/CSS/flexbox/regex/SASS/</p>
                    </div>
                </div>
                <div className='home__info'>
                    <h1>Hello,</h1>
                    <h1>I am </h1>
                    <h1>Zuzana</h1>
                    <p className='text__secondary'>software development student passionate about front-end development</p>
                    <div className='cta'>
                        <LinkButtons github contact name='CVdownload' />
                        <LinkButtons  name='contact' />
                    </div>  
                    <Socials />
                </div>
            </div>
            <div>
                <img src={blob} alt='blob' className='blob'></img>
            </div>
                 
            
        </section>
    )
}


export default Home;