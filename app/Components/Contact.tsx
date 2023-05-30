'use client'
import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'

import emailjs from '@emailjs/browser';

import { BsInstagram, BsSend, BsPerson, BsTelephone } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const form = useRef<any>(null);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [isSent, setIsSent] = useState<boolean>(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // emailjs.sendForm(process.env.SERVICE_ID as string, process.env.TEMPLATE_ID as string, form.current, "jYx7rUksTL8A-CvlG")
    emailjs.sendForm("service_qp1423l" as string, "template_qfxv03f" as string, form.current, "jYx7rUksTL8A-CvlG")
    .then((result: any) => {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }
      , 2000);
    }, (error: any) => {
          console.log(error.text);
      });
    
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  const [tooltipText, setTooltipText] = useState<string>("Click to copy email");
  const handleCopyEmail = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setTooltipText("Copied!");
    navigator.clipboard.writeText("ofeksror@gmail.com")

    setTimeout(() => {
      setTooltipText("Click to copy email");
    }, 2500);
  }

  /*
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const handleCopyEmail = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 2500);
    
    navigator.clipboard.writeText("ofeksror@gmail.com")
  }
  */

  return (
    <>
    <span className={styles.anchor} id="contactSection"></span>
    <div className={styles.contactContainer}>

        <div className={styles.sideContainer}>
            <h1>Get in Touch</h1>
            <p>Shoot me a message!</p>
            <div className={styles.contactIcons}>
              <div className={styles.emailButton}>
                <span className={styles.icon} onClick={(e) => handleCopyEmail(e)}> <MdAlternateEmail /> </span> {/* Email */}
                <span className={styles.tooltip}>{tooltipText}</span>
                {/* {showTooltip && <span className={styles.tooltip}>Email copied to clipboard!</span>} */}
              </div>
              <span className={styles.icon} onClick={ () => { window.open("https://www.linkedin.com/in/ofek-sror/", '_blank') }}> <FaLinkedin /> </span> {/* LinkedIn */}
              <span className={styles.icon} onClick={ () => { window.open("https://github.com/Ofeksror/", '_blank') }}> <FaGithub /> </span> {/* Github */}
              <span className={styles.icon} onClick={ () => { window.open("https://www.instagram.com/ofeksror/", '_blank') }}> <BsInstagram /> </span> {/* Instagram */}
            </div>
            
            <button onClick={ () => { window.open("/Resume.jpg") }}>My Resume</button>
        </div>
        
        <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
            <span className={styles.inputContainer}>
              <i><BsPerson /></i>
              <input required
                type='text'
                id='name' name='name' placeholder='Name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </span>

            <span className={styles.inputContainer}>
              <i><MdAlternateEmail /></i>
              <input required
                type='email'
                id='email' name='email' placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </span>

            <span className={styles.inputContainer}>
              <i><BsTelephone /></i>
              <input
                type='tel'
                id='phone' name='phone' placeholder='Phone number'
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </span>
            
            <textarea required
              id='message' name='message' placeholder='Your message'
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>

            {
              isSent ? (
                <button
                disabled
                className={styles.sentButton}
                >
                  Email Sent!
                </button>
              ) : (
                <button
                type='submit'
                className={styles.sendButton}
                >
                  Send <BsSend />
                </button>
              )
            }
        </form>
    </div>
    </>
  )
}

export default Contact