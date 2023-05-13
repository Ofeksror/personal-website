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
            <label htmlFor="name">Name</label>
            <input type='text' id='name' name='name' required />
            
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
            
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' name='phone' />
            
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows={5} required></textarea>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact