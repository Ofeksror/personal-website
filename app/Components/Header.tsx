'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image';

const Header = () => {
  const glitchSpan = useRef<any>(null);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
  // const [ isGlitching, setIsGlitching ] = useState<boolean>(false);
  let interval: any = null;
  const original = "Ofek Sror";

  useEffect(() => {glitchSpan.current.onmouseover = () => {
      if (!glitchSpan)
        return;
      
      if (interval)
        return;
      
      let iteration = 0;

      interval = setInterval(() => {
        glitchSpan.current.innerText = glitchSpan.current.innerText
          .split("")
          .map((letter: string, index: number) => {
            if (letter == " ")
              return " ";
            
            if (index < iteration)
              return original[index];

            return (letter == letter.toUpperCase()) ? letters[Math.floor(Math.random() * letters.length)] : lowercase_letters[Math.floor(Math.random() * lowercase_letters.length)];
          })
          .join("");

          if (iteration >= original.length) {
            clearInterval(interval);
            interval = null;
            return;
          }

          iteration += 1/3;
      }, 50);

    }
  }, [glitchSpan]);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Hi, I{"\'"}m <span className={styles.glitchSpan} ref={glitchSpan}>Ofek Sror</span></h1>
        <h2>I develop web applications and back-end services</h2>
      </div>
      <Image width={16384} height={12288} alt='' src={"/background.png"}/>
    </div>
  )
}

export default Header;