'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image';
import NewHoverEffect from './NewHoverEffect';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Hi, I{"\'"}m <NewHoverEffect /></h1>
        <h2>I build software</h2>
      </div>
      <Image width={16384} height={12288} alt='' src={"/background.png"}/>
    </div>
  )
}

export default Header;
