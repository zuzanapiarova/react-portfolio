import React from 'react';
import blob from '../assets/images/magicpattern-blob-1677062360102.svg'

const Contact = () => {

    const copyrightDate = new Date;
    const copyrightYear = copyrightDate.getFullYear()
    console.log(copyrightYear)
    return(
        <section id='contact'>
            <h5>LET'S TALK</h5>
            <h1>CONTACT</h1>
            <div>
                message me
            </div>
            <img className='blob4' src={blob}></img> 
            <footer>
                <p>&copy;{copyrightYear}</p>
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
