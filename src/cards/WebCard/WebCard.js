import styles from './WebCard.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import FeatTag from '../../util/FeatTag/FeatTag.js';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop.js';

const WebCard = ({data}) => {
    return(
        <>
        <div className={styles.webCard}>
            <Link className={styles.cardImageHolder} to={data.path} onClick={scrollToTop}>
                <img className={styles.cardImage} src={data.mainImages.card[0]} alt={data.mainImages.card[1]}/>
                <div className={styles.cardImageOverlay}></div>
                <div className={styles.cardFeatTagHolder}>
                    {data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                </div>
            </Link>
            <div className={styles.cardInfoHolder}>
                <div className={styles.cardProjectInfo}>
                    <Link to={data.path} onClick={scrollToTop}>
                        <h3 className={styles.cardTitleSnippet}>{data.cardSnippet}</h3>
                    </Link>
                    <div className={styles.cardClientInfo}>
                        <div className={styles.cardClientImageBox}>
                            <img className={styles.cardClientImage} src={data.client.image[0]} alt={data.client.image[1]}/>
                        </div>
                        <LinkOnWhite text={data.client.name} link={data.url} newTab={true} />
                    </div>
                </div>
                <p className={styles.cardWorkTag}>{data.category}</p>
            </div>
        </div>
        </>
    )
}

export default WebCard;