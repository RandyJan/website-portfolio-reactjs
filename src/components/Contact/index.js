import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState,useEffect } from 'react';
const Contact = () => {
   const  [letterClass, setLetterClass]= useState('text-animate')
    
   useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
}, []);
    return(
        <>
        
        <div className='container contact-page'>
            <div className='text-zone'>
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
        </h1>
        <p>
        I am driven by a strong sense of purpose and goal orientation. I approach each 
            project with clear objectives in mind, striving to deliver results that not only 
            meet but exceed expectations.
        </p>
        <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required/>
                    </li>
                    <li>
                        <input placeholder = 'Subject' type = 'text' name = 'subject' required/>
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required>

                        </textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND"/>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact;