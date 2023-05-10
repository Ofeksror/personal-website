import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div>
        <h3>Hello,</h3>
        <h1>I'm Ofek</h1>
        <h2>I do <span>software</span></h2> {/* onClick go to projects section */}
    </div>
  )
}

export default Header;