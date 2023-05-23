import React from 'react'
import styles from './Contact.module.css'

import { BsInstagram, BsSend, BsPerson, BsTelephone } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <span className={styles.anchor} id="contactSection"></span>
    <div className={styles.contactContainer}>
        <div className={styles.sideContainer}>
            <h1>Get in Touch</h1>
            <p>Shoot me a message!</p>
            <div className={styles.contactIcons}>
              <span className={styles.icon} onClick={() => { navigator.clipboard.writeText("ofeksror@gmail.com") }}> <MdAlternateEmail /> </span> {/* Email */}
              <span className={styles.icon} onClick={ () => { window.open("https://www.linkedin.com/in/ofek-sror/", '_blank') }}> <FaLinkedin /> </span> {/* LinkedIn */}
              <span className={styles.icon} onClick={ () => { window.open("https://github.com/Ofeksror/", '_blank') }}> <FaGithub /> </span> {/* Github */}
              <span className={styles.icon} onClick={ () => { window.open("https://www.instagram.com/ofeksror/", '_blank') }}> <BsInstagram /> </span> {/* Instagram */}
            </div>
            
            <button onClick={ () => { window.open("/Resume.jpg") }}>My Resume</button>
        </div>
        
        <form className={styles.formContainer} action="/submit-form" method="POST">
            <span className={styles.inputContainer}>
              <i><BsPerson /></i>
              <input type='text' id='name' name='name' required placeholder='Name' />
            </span>

            <span className={styles.inputContainer}>
              <i><MdAlternateEmail /></i>
              <input type='email' id='email' name='email' required placeholder='Email' />
            </span>

            <span className={styles.inputContainer}>
              <i><BsTelephone /></i>
              <input type='tel' id='phone' name='phone' placeholder='Phone number' />
            </span>
            
            <textarea id='message' name='message' rows={5} required placeholder='Your message'></textarea>

            <button type='submit'>Send <BsSend /></button>
        </form>
    </div>
    </>
  )
}

export default Contact