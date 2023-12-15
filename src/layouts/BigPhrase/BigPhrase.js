import styles from './BigPhrase.module.css'

const BigPhrase = (props) => {
    return(
        <>
        <section className={styles.bigPhraseSection}>
            <div className={styles.bigPhraseHolder}>
                <h2 className={styles.bigPhrase}>{props.text}</h2>
            </div>
        </section>
        </>
    )
}

export default BigPhrase;