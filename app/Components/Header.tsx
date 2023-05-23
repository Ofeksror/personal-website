'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Header.module.css'


const Header = () => {
  const glitchSpan = useRef<any>(null);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  useEffect(() => {glitchSpan.current.onmouseover = () => {
    if (!glitchSpan)
    return;
    
    let interval: any = null;
    const original = glitchSpan.current.innerText;
    let iteration = 0;

    interval = setInterval(() => {
      glitchSpan.current.innerText = glitchSpan.current.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration)
            return original[index];

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

        if (iteration >= original.length) {
          clearInterval(interval);
          return;
        }

        iteration += 1/3;
    }, 50);

  }
}, [glitchSpan]);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Im <span className={styles.glitchSpan} ref={glitchSpan}>Ofek Sror</span></h1>
        <h2>I do <span>software</span></h2> {/* onClick go to projects section */}
      </div>
    </div>
  )
}

export default Header;