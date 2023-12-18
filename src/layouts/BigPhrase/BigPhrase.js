import styles from './BigPhrase.module.css'

const BigPhrase = ({text}) => {
    return(
        <>
        <section className={styles.bigPhraseSection}>
            <div className={styles.bigPhraseHolder}>
                <h2 className={styles.bigPhrase}>{text}</h2>
            </div>
        </section>
        </>
    )
}

export default BigPhrase;