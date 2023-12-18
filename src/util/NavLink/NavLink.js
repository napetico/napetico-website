import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../ScrollToTop';

const NavLink = (props) => {
    return(
        <>
        <div className={styles.navLinkHolder}>
            <Link className={styles.navLinkText} to={props.link} onClick={scrollToTop}>{props.text}</Link>
            <div className={styles.navLinkUnderlineTrack}>
                <div className={styles.navLinkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default NavLink;