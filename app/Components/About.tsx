import Image from 'next/image';
import styles from './About.module.css'

const About = () => {
    return (
    <>
        <span className={styles.anchor} id="aboutSection"></span>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <h1>About Me</h1>
                <p>
                    I{"\'"}m Ofek, a 17 years-old self-taught software engineer from Netanya, Israel.
                    Completing Harvard{"\'"}s CS50 course ignited my love and passion for programming. <br></br>
                    Since then, I{"\'"}ve been on a self-guided journey, expanding my horizons with new technologies by diving into courses, guides, books, and building cool things.<br></br>
                </p>
            </div>
            <div className={styles.aboutImage}>
                <div className={styles.imageContainer}>
                    <Image src={"/Ofek.jpg"} width={1170} height={1170} alt="Ofek Sror" className={styles.personalImage} />
                </div>
            </div>
        </div>
    </>
    )
}

export default About;