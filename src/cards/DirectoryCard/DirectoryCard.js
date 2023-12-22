import styles from './DirectoryCard.module.css';
import FeatTag from '../../util/FeatTag/FeatTag.js';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop.js';

const DirectoryCard = ({image, href, featTag, title, info}) => {
    return(
        <>
        <div className={styles.directoryCard}>
            <Link className={styles.dirCardCircle} to={href} onClick={scrollToTop}>
                <img className={styles.dirCardImage} src={image[0]} alt={image[1]} />
            </Link>
            <div className={styles.dirCardInfoBox}>
                <div className={styles.dirCardTextWrap}>
                    <p className={styles.dirCardText}>{info}</p>
                    { featTag[0] ? <FeatTag color={featTag[1]} text={featTag[2]}/> : <></>}
                </div>
                <Link className={styles.dirCardTitleLink} to={href} onClick={scrollToTop}>
                    <h3 className='h3-card-title-22'>{title}</h3>
                </Link>
            </div>
        </div>
        </>
    )
}

export default DirectoryCard;