'use client'
import { useState } from 'react';
import styles from './page.module.css';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import ProjectsDisplay from './Components/ProjectsDisplay';
import Contact from './Components/Contact';

export default function Home() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <div>
            <Header />
            <Navbar />
            <div className={styles.content}>
                <Skills />
                <ProjectsDisplay />
                <Contact />
            </div>
        </div>
    )
}