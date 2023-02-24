import React, { useRef } from 'react';
import blob from '../assets/images/magicpattern-blob-1677062360102.svg';
//import emailjs from '@emailjs-com';

import LinkButtons from './LinkButtons';
import Socials from './Socials';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        //emailjs.sendForm('service-id', 'template-id', form.current, 'user-id');
    }

    const copyrightDate = new Date();
    const copyrightYear = copyrightDate.getFullYear();

    return(
        <section id='contact'>
            <h5>LET'S TALK</h5>
            <h1>CONTACT</h1>
            <div className='container'>
                <Socials />
                <div className='cta'>
                    <LinkButtons name='email'/>
                    <LinkButtons name='whatsapp'/>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name or company ...' name='name' required></input>
                    <input type='email' placeholder='Email ...' name='email' required></input>
                    <textarea name='message' placeholder='Enter your message ...'></textarea>
                    <button type='submit' className='btn__filled'>Send</button>
                </form>
                
            </div>
            <img className='blob4' src={blob} alt='blob'></img> 
            <footer>
                <p>&copy;{copyrightYear} Designed and developed by Zuzana Piarova.</p>
                <p>Personal portfolio created with React.js. Check the <a href='https://github.com/zuzanapiarova/react-portfolio' target='_blank' rel="noreferrer">GitHub</a> repository for more.</p>
            </footer>
            
        </section>
        
    )
}

export default Contact;




//direct mail
//direct download cv
//open cv

//social
//linkedin
//email
//whatsapp

//check my work at
//github
//front-end mentor
//codewars
