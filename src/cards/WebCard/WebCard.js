import styles from './WebCard.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import FeatTag from '../../util/FeatTag/FeatTag.js';
import { Link } from 'react-router-dom';

const WebCard = ({data}) => {
    return(
        <>
        <div className={styles.webCard}>
            <Link className={styles.cardImageHolder} to={data.path}>
                <img className={styles.cardImage} src={data.cardImage[0]} alt={data.cardImage[1]}/>
                <div className={styles.cardImageOverlay}></div>
                <div className={styles.cardFeatTagHolder}>
                    <FeatTag color={data.featTag[1]} text={data.featTag[2]}/>
                </div>
            </Link>
            <div className={styles.cardInfoHolder}>
                <div className={styles.cardProjectInfo}>
                    <Link to={data.path}>
                        <h3 className={styles.cardTitleSnippet}>{data.titleSnippet}</h3>
                    </Link>
                    <div className={styles.cardClientInfo}>
                        <div className={styles.cardClientImageBox}>
                            <img className={styles.cardClientImage} src={data.clientImage[0]} alt={data.clientImage[1]}/>
                        </div>
                        <LinkOnWhite text={data.clientInfo[0]} link={data.clientInfo[1]} newTab={true} />
                    </div>
                </div>
                <p className={styles.cardWorkTag}>{data.workCategory}</p>
            </div>
        </div>
        </>
    )
}

export default WebCard;