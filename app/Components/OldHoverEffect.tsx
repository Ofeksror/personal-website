"use client"
import React, { useEffect, useRef } from 'react'
import styles from './OldHoverEffect.module.css'


type Props = {}


const OldHoverEffect = (props: Props) => {
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
        <span className={styles.glitchSpan} ref={glitchSpan}>Ofek Sror</span>
  )
}

export default OldHoverEffect