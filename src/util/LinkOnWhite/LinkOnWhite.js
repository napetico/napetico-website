import styles from './LinkOnWhite.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../ScrollToTop';

const LinkOnWhite = ({link, text}) => {
    return(
        <>
        <div className={styles.linkHolder}>
            <Link className={styles.linkText} to={link} onClick={scrollToTop}>{text}</Link>
            <div className={styles.linkUnderlineTrack}>
                <div className={styles.linkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default LinkOnWhite;