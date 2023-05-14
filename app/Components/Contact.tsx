import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.sideContainer}>
            <h1>Contact Me</h1>
            <button>Download my Resume/CV</button>
        </div>
        
        <form className={styles.formContainer} action="/submit-form" method="POST">
            <input type='text' id='name' name='name' required placeholder='Name' />
            
            <input type='email' id='email' name='email' required placeholder='Email' />
            
            <input type='tel' id='phone' name='phone' placeholder='Phone number' />
            
            <textarea id='message' name='message' rows={5} required placeholder='Your message'></textarea>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact