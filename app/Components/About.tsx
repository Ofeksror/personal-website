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
                    I am a 17 years old self-taught software developer.
                    I started my journey learning programming from Harvard's CS50.
                    I like building cool things and learning new technologies.
                </p>
            </div>
            <div className={styles.aboutImage}>
                <div className={styles.imageContainer}>
                    <Image src={"/Ofek.png"} width={981} height={1313} alt="Ofek Sror" />
                </div>
            </div>
        </div>
    </>
    )
}

export default About;