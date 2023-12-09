import styles from './LinkOnBlack.module.css';

const LinkOnBlack = (props) => {
    return(
        <>
        <div className={styles.linkOnBlackHolder}>
            <a className={styles.linkOnBlackText} href={props.link}>{props.text}</a>
            <div className={styles.linkOnBlackUnderlineTrack}>
                <div className={styles.linkOnBlackUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default LinkOnBlack;