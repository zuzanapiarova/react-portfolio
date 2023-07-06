import React from 'react';
import blob from '../assets/images/newblob.svg';

import LinkButtons from './LinkButtons';
import Socials from './Socials';

const Contact = () => {
/*
   const [formState, setFormState] = useState({});


   const changeHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
   }
    const submitHandler = (e) => {
        e.preventDefault();
        const config = {
            SecureToken: 'c3a8dfda-d4b4-46a0-8c11-d5554bd48547', 
            Port: 2525,
            To : 'zuzana.piarova1@gmail.com',
            From : 'zuzana.piarova1@gmail.com',
            Subject : "Portfolio message",
            Body : `${formState.name} (${formState.email}) sends a message:${formState.message}`
        };
        if(window.Email){
            window.Email.send(config).then(() => {
                alert('Message sent successfully! I will contact you within 1-2 working days.')
                setFormState(e.target.value = '');
            }
            );         
        }
    }
    */
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
                <form action="https://formsubmit.co/zuzana.piarova1@gmail.com" method="POST"  /*onSubmit={submitHandler}*/>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type='text' name='name' placeholder='Name or company ...' /*onChange={changeHandler} value={formState.name || ''} */required></input>
                    <input type='email' name='email' placeholder='Email ...' /*onChange={changeHandler} value={formState.email || ''}*/ required></input>
                    <textarea name='message' placeholder='Enter your message ...' /*onChange={changeHandler} value={formState.message || ''}*/ > </textarea>
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


