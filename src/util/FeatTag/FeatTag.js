import styles from './FeatTag.module.css'

const FeatTag = ({text, color}) => {
    if (color === 'yellow') {
        return(
            <>
            <div className={styles.featTagBoxYellow}>
                <p className={styles.featTagTextYellow}>{text}</p>
            </div>
            </>
        )
    }
    if (color === 'black') {
        return(
            <>
            <div className={styles.featTagBoxBlack}>
                <p className={styles.featTagTextBlack}>{text}</p>
            </div>
            </>
        )
    }
}

export default FeatTag;