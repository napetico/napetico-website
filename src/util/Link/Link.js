import styles from './Link.module.css';

const Link = (props) => {
    return(
        <>
        <div className={styles.linkHolder}>
            <a className={styles.linkText} href={props.link}>{props.text}</a>
            <div className={styles.linkUnderlineTrack}>
                <div className={styles.linkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default Link;