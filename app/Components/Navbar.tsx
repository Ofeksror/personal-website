'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BsLightbulb } from 'react-icons/bs';
import styles from './Navbar.module.css'

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    
    const handleThemeSwitch = () => {
        setDarkTheme(!darkTheme);
        if (darkTheme) {
          document.body.classList.remove('light');
          document.body.classList.add('dark');
        }
        else {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
        }
    }


    return (
        <nav className={ styles.navbar }>
            <span><a href="#skillsSection" >Skills</a></span>
            <span><a href="#projectsSection" >Projects</a></span>
            <span><a href="#contactSection" >Contact</a></span>
            <button className={styles.themeSwitcher} onClick={handleThemeSwitch}><BsLightbulb /></button>
        </nav>
    )
}

export default Navbar;