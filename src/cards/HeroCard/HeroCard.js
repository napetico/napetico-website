import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import FeatTag from '../../util/FeatTag/FeatTag';

const HeroCard = ({newTab, data}) => {
    return(
        <>
        <div className={styles.heroCard}>
            <Link className={styles.cardImageHolder} to={data.path} target={newTab ? '_blank' : ''} rel={newTab ? 'noopener noreferrer' : ''}>
                <img className={styles.cardImage} src={data.mainImages.card[0]} alt={data.mainImages.card[1]}/>
                <div className={styles.cardImageOverlay}>
                    <div className={styles.cardTextBox}>
                        <div className={styles.cardInfoWrapper}>
                            <p className={styles.cardInfoTag}>{data.heroCard[1]}</p>
                            <h3 className={styles.cardTitle}>{data.heroCard[0]}</h3>
                        </div>
                        <div className={styles.cardOpenWrapper}>
                            <p className={styles.cardOpenText}>Open</p>
                            <img className={styles.cardOpenArrow} src='/images/icons/napo-arrow-menu.svg' alt=''/>
                        </div>
                    </div>
                </div>
                {data.featTag[0] ?
                    <div className={styles.cardFeatTagHolder}>
                        <FeatTag color={data.featTag[1]} text={data.featTag[2]}/>
                    </div> : <></> 
                }
            </Link>
        </div>
        </>
    )
}

export default HeroCard;