import styles from './LinkOnBlack.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../ScrollToTop';

const LinkOnBlack = (props) => {
    return(
        <>
        <div className={styles.linkOnBlackHolder}>
            <Link className={styles.linkOnBlackText} to={props.link} onClick={scrollToTop}>{props.text}</Link>
            <div className={styles.linkOnBlackUnderlineTrack}>
                <div className={styles.linkOnBlackUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default LinkOnBlack;