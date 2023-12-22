import styles from './BigTextLoop.module.css'

const BigTextLoop = ({text}) => {
    return(
        <>
        <section className={styles.bigTextLoop}>
            <div className={styles.bigTextLoopTrack}>
                <div className={styles.bigTextLoopHolder}>
                    <h2 className={styles.bigTextLoopHeader}>{text}</h2>
                </div >
                <div className={styles.bigTextLoopHolder}>
                    <h2 className={styles.bigTextLoopHeader}>{text}</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default BigTextLoop;