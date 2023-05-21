'use client'
import { useState, useRef } from 'react';
import styles from './page.module.css';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import ProjectsDisplay from './Components/ProjectsDisplay';
import Contact from './Components/Contact';

export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className={styles.content}>
                <About />
                <Skills />
                <ProjectsDisplay />
                <Contact/>
            </div>
        </div>
    )
}