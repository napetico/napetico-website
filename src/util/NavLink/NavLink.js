import styles from './NavLink.module.css';

const NavLink = (props) => {
    return(
        <>
        <div className={styles.navLinkHolder}>
            <a className={styles.navLinkText} href={props.link}>{props.text}</a>
            <div className={styles.navLinkUnderlineTrack}>
                <div className={styles.navLinkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default NavLink;