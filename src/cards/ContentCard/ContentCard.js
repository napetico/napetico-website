import styles from './ContentCard.module.css';
import { Link } from 'react-router-dom';
import FeatTag from '../../util/FeatTag/FeatTag';
import scrollToTop from '../../util/ScrollToTop';

const ContentCard = ({card, data}) => {
    if (card === 'book') {
        return(
            <>
            <div className={styles.contentCard}>
                <Link className={styles.contentCardPoster} to={data.path} onClick={scrollToTop}>
                    <img className={styles.contentCardImage} src={data.image[0]} alt={data.image[1]} />
                </Link>
                <div className={styles.contentCardInfoBox}>
                    <div className={styles.contentCardTextWrap}>
                        <p className={styles.contentCardText}>{data.author} · {data.category}</p>
                        { data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                    </div>
                    <Link className={styles.contentCardTitleLink} to={data.path} onClick={scrollToTop}>
                        <h3 className='h3-card-title-18'>{data.title}</h3>
                    </Link>
                </div>
            </div>
            </>
        )
    }
    if (card === 'content') {
        return(
            <>
            <div className={styles.contentCard}>
                <a className={styles.contentCardCircle} href={data.url} target="_blank" rel="noopener noreferrer">
                    <img className={styles.contentCardImage} src={data.image[0]} alt={data.image[1]} />
                </a>
                <div className={styles.contentCardInfoBox}>
                    <div className={styles.contentCardTextWrap}>
                        <p className={styles.contentCardText}>{data.intro}</p>
                        { data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                    </div>
                    <a className={styles.contentCardTitleLink} href={data.url} target="_blank" rel="noopener noreferrer">
                        <h3 className='h3-card-title-18'>{data.title}</h3>
                    </a>
                </div>
            </div>
            </>
        )
    }
    if (card === 'course') {
        return(
            <>
            <div className={styles.contentCard}>
                <a className={styles.contentCardSquare} href={data.url} target="_blank" rel="noopener noreferrer">
                    <img className={styles.contentCardImage} src={data.image[0]} alt={data.image[1]} />
                </a>
                <div className={styles.contentCardInfoBox}>
                    <div className={styles.contentCardTextWrap}>
                        <p className={styles.contentCardText}>{data.academy}</p>
                        { data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                    </div>
                    <a className={styles.contentCardTitleLink} href={data.url} target="_blank" rel="noopener noreferrer">
                        <h3 className='h3-card-title-18'>{data.title}</h3>
                    </a>
                </div>
            </div>
            </>
        )
    }
}

export default ContentCard;