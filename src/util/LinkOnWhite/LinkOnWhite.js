
import styles from './LinkOnWhite.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../ScrollToTop';

const LinkOnWhite = ({link, text, newTab}) => {
    return(
        <>
        <div className={styles.linkHolder}>
            {newTab ? <Link className={styles.linkText} to={link} target="_blank" rel="noopener noreferrer">{text}</Link>
            : <Link className={styles.linkText} to={link} onClick={scrollToTop}>{text}</Link>
            }
            <div className={styles.linkUnderlineTrack}>
                <div className={styles.linkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default LinkOnWhite;