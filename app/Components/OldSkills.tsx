'use client'
import React, {useRef, useEffect} from 'react'
import styles from './Skills.module.css'
import Image from 'next/image';

const Skills = () => {
  const scrollDiv = useRef<any>(null);

  useEffect(() => {
    if (!scrollDiv.current)
      return;

    // const onScroll = () => {
    //   const maxScrollLeft = scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth;
    //   const pageHeight = document.body.scrollHeight - window.innerHeight;

    //   const scrollPercent = window.pageYOffset / pageHeight;
    //   scrollDiv.current.scrollLeft = scrollPercent * maxScrollLeft;
    //   // Adjust this calculation as needed
    //   // const maxScrollLeft = scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth;
    //   // const scrollPos = window.pageYOffset;
    //   // const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
    //   // This is a simple linear relationship between scrollTop and scrollLeft.
    //   // You may want to adjust this calculation to get the behavior you want.
    //   // scrollDiv.current.scrollLeft = (scrollPos / (maxScrollTop / 2)) * maxScrollLeft;
    // }

    // window.addEventListener('scroll', onScroll);
    // // window.addEventListener('scroll', onScroll);

    // // Cleanup function
    // return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDiv]); // Empty dependency array means this effect runs once on mount and cleanup on unmount


  return (
    <>
    <span className={styles.anchor} id="skillsSection"></span>
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer} ref={scrollDiv}>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='HTML' src={"/HTML.png"}/>
          <p>HTML</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='CSS' src={"/CSS.png"}/>
          <p>CSS</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='Javascript' src={"/Javascript.png"}/>
          <p>Javascript</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='Git' src={"/Git.png"}/>
          <p>Git</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='Github' src={"/Github.png"}/>
          <p>GitHub</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='SQLite3' src={"/Sqlite.png"}/>
          <p>SQLite3</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='MongoDB' src={"/Mongo.png"}/>
          <p>MongoDB</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='React' src={"/React.png"}/>
          <p>React</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='TypeScript' src={"/Typescript.png"}/>
          <p>TypeScript</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='NextJS' src={"/Next.png"}/>
          <p>Next JS</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='Python' src={"/Python.png"}/>
          <p>Python</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='Flask' src={"/Flask.png"}/>
          <p>Flask</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='ExpressJS' src={"/Express.png"}/>
          <p>Express JS</p>
        </span>
        <span className={styles.icon}>
          <Image width={128} height={128} alt='NodeJS' src={"/Node.png"}/>
          <p>Node JS</p>
        </span>
      </div>
    </div>
    </>
  )
}

export default Skills;