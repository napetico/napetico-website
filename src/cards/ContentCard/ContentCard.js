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
                <Link className={styles.contentCardCircle} to={data.path} onClick={scrollToTop}>
                    <img className={styles.contentCardImage} src={data.image[0]} alt={data.image[1]} />
                </Link>
                <div className={styles.contentCardInfoBox}>
                    <div className={styles.contentCardTextWrap}>
                        <p className={styles.contentCardText}>{data.description}</p>
                        { data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                    </div>
                    <Link className={styles.contentCardTitleLink} to={data.path} onClick={scrollToTop}>
                        <h3 className='h3-card-title-18'>{data.channel}</h3>
                    </Link>
                </div>
            </div>
            </>
        )
    }
    if (card === 'course') {
        return(
            <>
            <div className={styles.contentCard}>
                <Link className={styles.contentCardSquare} to={data.path} onClick={scrollToTop}>
                    <img className={styles.contentCardImage} src={data.image[0]} alt={data.image[1]} />
                </Link>
                <div className={styles.contentCardInfoBox}>
                    <div className={styles.contentCardTextWrap}>
                        <p className={styles.contentCardText}>{data.academy}</p>
                        { data.featTag[0] ? <FeatTag color={data.featTag[1]} text={data.featTag[2]}/> : <></>}
                    </div>
                    <Link className={styles.contentCardTitleLink} to={data.path} onClick={scrollToTop}>
                        <h3 className='h3-card-title-18'>{data.course}</h3>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}

export default ContentCard;