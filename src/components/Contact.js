import React, { useState } from 'react';
import blob from '../assets/images/magicpattern-blob-1677062360102.svg';
import emailjs from '@emailjs/browser';

import LinkButtons from './LinkButtons';
import Socials from './Socials';

const Contact = () => {

   const [formState, setFormState] = useState({});


   const changeHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
   }
    const submitHandler = (e) => {
        e.preventDefault();
        const config = {
            SecureToken: 'c3a8dfda-d4b4-46a0-8c11-d5554bd48547', 
            To : 'zuzana.piarova1@gmail.com',
            From : formState.email,
            Subject : "Portfolio message",
            Body : `${formState.name} sends a message:${formState.message}`
        };
        if(window.Email){
            window.Email.send(config).then(() => {
                alert('Message sent succesfully!')}
            );
            
        }

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
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='Name or company ...' onChange={changeHandler} value={formState.name || ''} name='name' required></input>
                    <input type='email' placeholder='Email ...' name='email' onChange={changeHandler} value={formState.email || ''} required></input>
                    <textarea name='message' placeholder='Enter your message ...' onChange={changeHandler} value={formState.message || ''}> </textarea>
                    <button type='submit' className='btn__filled'>Send email</button>
                </form>
                
            </div>
            <img className='blob blob4' src={blob} alt='blob'></img> 
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
