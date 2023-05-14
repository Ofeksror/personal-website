import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image';

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <span className={styles.icon}><Image width={128} height={128} alt='TypeScript' src={"/Typescript.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='React' src={"/React.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='NextJS' src={"/Next.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='Python' src={"/Python.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='Flask' src={"/Flask.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='Javascript' src={"/Javascript.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='ExpressJS' src={"/Express.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='NodeJS' src={"/Node.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='MongoDB' src={"/Mongo.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='SQLite3' src={"/Sqlite.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='HTML' src={"/HTML.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='CSS' src={"/CSS.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='Git' src={"/Git.png"}/></span>
        <span className={styles.icon}><Image width={128} height={128} alt='Github' src={"/Github.png"}/></span>
      </div>
    </div>
  )
}

export default Skills;