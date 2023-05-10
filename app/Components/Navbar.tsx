import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={ styles.navbar }>
            <span>Section 1</span>
            <span>Section 2</span>
            <span>Section 3</span>
            <span>Section 4</span>
            <span>Resume/CV</span>
            <span>ThemeSwitcher</span>
        </nav>
    )
}

export default Navbar;