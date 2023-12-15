import styles from './DirectoryCard.module.css';
import FeatTag from '../../util/FeatTag/FeatTag.js';

const DirectoryCard = ({image, href, featTag, title, info}) => {
    return(
        <div className={styles.directoryCard}>
            <a className={styles.dirCardCircle} href={href}>
                <img className={styles.dirCardImage} src={image[0]} alt={image[1]} />
            </a>
            <div className={styles.dirCardInfoBox}>
                <div className={styles.dirCardTextWrap}>
                    <p className={styles.dirCardText}>{info}</p>
                    { featTag[0] ? <FeatTag color={featTag[1]} text={featTag[2]}/> : <></>}
                </div>
                <a className={styles.dirCardTitleLink} href={href}>
                    <h3 className='h3-card-title-22'>{title}</h3>
                </a>
            </div>
        </div>
    )
}

export default DirectoryCard;