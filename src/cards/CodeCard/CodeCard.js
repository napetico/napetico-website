import styles from './CodeCard.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';
import FeatTag from '../../util/FeatTag/FeatTag';

const CodeCard = ({data}) => {
    return(
        <>
        <div className={styles.codeCard}>
            <a className={styles.cardImageHolder} href={data.path} target='_blank' rel='noopener noreferrer'>
                <img className={styles.cardImage} src={data.mainImages.card[0]} alt={data.mainImages.card[1]}/>
                <div className={styles.cardImageOverlay}></div>
                {data.featTag[0] ?
                    <div className={styles.cardFeatTagHolder}>
                        <FeatTag color={data.featTag[1]} text={data.featTag[2]}/>
                    </div> : <></> 
                }
            </a>
            <div className={styles.cardInfoHolder}>
                <div className={styles.cardInfoWrapper}>
                    <a href={data.path} target='_blank' rel='noopener noreferrer'>
                        <h3 className={styles.cardTitle}>{data.cardTitle}</h3>
                    </a>
                    <p className={styles.cardDescription}>{data.cardInfo}</p>
                </div>
                <div className={styles.cardDetailsWrapper}>
                    <div className={styles.madeWithBox}>
                        <p className={styles.detailTag}>with</p>
                        <p className={styles.detailTools}>{data.madeWith}</p>
                    </div>
                    <div className={styles.madeToBox}>
                        <p className={styles.detailTag}>for</p>
                        <LinkOnWhite link={data.client.url} text={data.client.name} newTab={true}/>
                    </div>
                </div>
                <div className={styles.cardLinksWrapper}>
                    <div className={styles.linkGroupHolder}>
                        <p className={styles.linkGroupTag}>Open</p>
                        <img className={styles.linkGroupArrow} src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className={styles.linkGroupWrapper}>
                            <LinkOnWhite text={'Live Site'} link={data.url} newTab={true}/>
                            <p className='link-group-inner-text'>or</p>
                            <div className={styles.cardLinkWithImageBox}>
                                <div className={styles.cardClientImageBox}>
                                    <img className={styles.cardClientImage} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''/>
                                </div>
                                <LinkOnWhite text={'Repository'} link={data.path} newTab={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CodeCard;