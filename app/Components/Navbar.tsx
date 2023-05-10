import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={ styles.navbar }>
            <ul>
                <li>Section 1</li>
                <li>Section 2</li>
                <li>Section 3</li>
                <li>Section 4</li>
                <li>Resume/CV</li>
                <li>ThemeSwitcher</li>
            </ul>
        </nav>
    )
}

export default Navbar;