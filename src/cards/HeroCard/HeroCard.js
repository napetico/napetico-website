import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import FeatTag from '../../util/FeatTag/FeatTag';

const HeroCard = ({image, href, info, title, featTag}) => {
    return(
        <>
        <div className={styles.heroCard}>
            <Link className={styles.cardImageHolder} to={href}>
                <img className={styles.cardImage} src={image[0]} alt={image[1]}/>
                <div className={styles.cardImageOverlay}>
                    <div className={styles.cardTextBox}>
                        <div className={styles.cardInfoWrapper}>
                            <p className={styles.cardInfoTag}>{info}</p>
                            <h3 className={styles.cardTitle}>{title}</h3>
                        </div>
                        <div className={styles.cardOpenWrapper}>
                            <p className={styles.cardOpenText}>Abrir</p>
                            <img className={styles.cardOpenArrow} src='/images/icons/napo-arrow-menu.svg' alt=''/>
                        </div>
                    </div>
                </div>
                {featTag[0] ?
                    <div className={styles.cardFeatTagHolder}>
                        <FeatTag color={featTag[1]} text={featTag[2]}/>
                    </div> : <></> 
                }
            </Link>
        </div>
        </>
    )
}

export default HeroCard;