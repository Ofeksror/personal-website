'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'


const Header = () => {
  const glitchSpan = useRef<any>(null);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const [ isGlitching, setIsGlitching ] = useState<boolean>(false);
  let interval: any = null;
  const original = "OFEK SROR";

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

            return letters[Math.floor(Math.random() * letters.length)];
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
        <h1>Im <span className={styles.glitchSpan} ref={glitchSpan}>OFEK SROR</span></h1>
        <h2>I do <span>software</span></h2>
      </div>
    </div>
  )
}

export default Header;