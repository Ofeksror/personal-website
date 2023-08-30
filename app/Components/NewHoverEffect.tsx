import React from 'react'
import styles from "./NewHoverEffect.module.css"

type Props = {}

const NewHoverEffect = (props: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.word1}>
            {
            "OFEK SROR".split("").map((letter, i) => (
                <div
                    key={i}
                    className={styles.letter1}
                    style={
                        letter != " " ? {transitionDelay: `${i * 75}ms`}
                        : {transitionDelay: `${i * 75}ms`, width: "0.4ch"}
                    }
                >
                    {letter}
                </div>
            ))
            }
        </div>
        <div className={styles.word2}>
            {
            "OFEK SROR".split("").map((letter, i) => (
                <div
                    key={i}
                    className={styles.letter2}
                    style={
                        letter != " " ? {transitionDelay: `${i * 75}ms`}
                        : {transitionDelay: `${i * 75}ms`, width: "0.4ch"}
                    }
                >
                    {letter}
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default NewHoverEffect