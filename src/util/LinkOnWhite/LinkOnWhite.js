import styles from './LinkOnWhite.module.css';
import { Link } from 'react-router-dom';

const LinkOnWhite = ({link, text}) => {
    return(
        <>
        <div className={styles.linkHolder}>
            <Link className={styles.linkText} to={link}>{text}</Link>
            <div className={styles.linkUnderlineTrack}>
                <div className={styles.linkUnderline}></div>
            </div>
        </div>
        </>
    )
}

export default LinkOnWhite;