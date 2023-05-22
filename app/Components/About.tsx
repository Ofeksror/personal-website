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
                    I'm Ofek, a 17 years-old self-taught software engineer from Netayna, Israel.<br></br>
                    I am passionate about using code to build innovative ideas.<br></br>
                    I love expanding my horizons with new technologies and learning new things.<br></br>
                </p>
            </div>
            <div className={styles.aboutImage}>
                <div className={styles.imageContainer}>
                    <img src='/Ofek.jpg' alt='Ofek Sror' className={styles.personalImage} />
                    {/* <Image src={"/Ofek.jpg"} width={1170} height={1170} alt="Ofek Sror" className={styles.personalImage} /> */}
                </div>
            </div>
        </div>
    </>
    )
}

export default About;