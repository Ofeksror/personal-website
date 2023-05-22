import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Im <span className={styles.nameSpan}>Ofek Sror</span></h1>
        <h2>I do <span>software</span></h2> {/* onClick go to projects section */}
      </div>
    </div>
  )
}

export default Header;