import styles from './ManagerCard.module.css'
import { Link } from 'react-router-dom';
import FeatTag from '../../util/FeatTag/FeatTag';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const ManagerCard = ({ data }) => {
    return (
        <>
            <div className={styles.managerCard}>
                <Link className={styles.cardImageHolder} to={data.path}>
                    <img className={styles.cardImage} src={data.mainImages.card[0]} alt={data.mainImages.card[1]} />
                    <div className={styles.cardImageOverlay}></div>
                    {data.featTag[0] ?
                        <div className={styles.cardFeatTagHolder}>
                            <FeatTag color={data.featTag[1]} text={data.featTag[2]} />
                        </div> : <></>
                    }
                </Link>
                <div className={styles.cardInfoHolder}>
                    <div className={styles.cardInfoWrapper}>
                        <div className={styles.cardProjectInfo}>
                            <p className={styles.cardWorkTag}>Project for</p>
                            <div className={styles.cardClientInfo}>
                                <div className={styles.cardClientImageBox}>
                                    <img className={styles.cardClientImage} src={data.client.image[0]} alt={data.client.image[1]} />
                                </div>
                                <LinkOnWhite text={data.client.name} link={data.url} newTab={true} />
                            </div>
                        </div>
                        <Link to={data.path}>
                            <h3 className={styles.cardTitle}>{data.cardTitle}</h3>
                        </Link>
                    </div>
                    <div className={styles.cardDetailsWrapper}>
                        <p className={styles.cardDescription}>{data.cardInfo}</p>
                    </div>
                    <div className={styles.cardLinksWrapper}>
                        <div className={styles.categoryBox}>
                            <img className={styles.icon} src={data.cardIcon} alt='' />
                            <p className={styles.categoryTag}>{data.category}</p>
                        </div>
                        <Link className={styles.linkGroupHolder} to={data.path}>
                            <p className={styles.linkGroupTag}>Open</p>
                            <img className={styles.linkGroupArrow} src='./images/icons/napo-link-arrow-black.svg' alt='' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagerCard;