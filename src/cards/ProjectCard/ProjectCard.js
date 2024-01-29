import styles from './ProjectCard.module.css';
import FeatTag from '../../util/FeatTag/FeatTag';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop.js';

const ProjectCard = ({link, client, card, data}) => {

    let path;
    let cardImage;
    let featTag;
    let snippet;
    let clientImage;
    let clientName;
    let clientUrl;
    let cardTitle;

    if (card === 'work') {
        path = data.path;
        cardImage = data.mainImages.card;
        featTag = data.featTag;
        snippet = data.homeSnippet;
        clientImage = data.client.image;
        clientName = data.client.name;
        clientUrl = data.url;
        cardTitle = data.homeTitle;
    }

    if (card === 'book') {
        path = data.path;
        cardImage = data.image;
        featTag = data.featTag;
        snippet = data.author;
        clientImage = '';
        clientName = '';
        clientUrl = '';
        cardTitle = data.title;
    }

    if (card === 'cert') {
        path = data.url;
        cardImage = data.cardImage;
        featTag = data.featTag;
        snippet = data.academy.name;
        clientImage = '';
        clientName = '';
        clientUrl = '';
        cardTitle = data.title;
    }

    if (card === 'course') {
        path = data.url;
        cardImage = data.image;
        featTag = data.featTag;
        snippet = data.academy;
        clientImage = '';
        clientName = '';
        clientUrl = '';
        cardTitle = data.title;
    }

    if (card === 'hobbie') {
        path = data.path;
        cardImage = data.image;
        featTag = data.featTag;
        snippet = data.snippet;
        clientImage = '';
        clientName = '';
        clientUrl = '';
        cardTitle = data.title;
    }

    return(
        <div className={styles.projectCard}>
            {link ? 
                <Link className={styles.cardImageHolder} to={path} onClick={scrollToTop}>
                    <img className={styles.cardImage} src={cardImage[0]} alt={cardImage[1]}/>
                    <div className={styles.cardImageOverlay}>
                        <div className={styles.cardHoverBox}>
                            <p className={styles.cardOpenText}>Open</p>
                            <img className={styles.cardOpenArrow} src='./images/icons/napo-arrow-menu.svg' alt=''/>
                        </div>
                    </div>
                    {featTag[0] ?
                        <div className={styles.cardFeatTagHolder}>
                            <FeatTag color={featTag[1]} text={featTag[2]}/>
                        </div> : <></> 
                    }
                </Link >
                :
                <a className={styles.cardImageHolder} href={path} target='_blank' rel='noopener noreferrer'>
                    <img className={styles.cardImage} src={cardImage[0]} alt={cardImage[1]}/>
                    <div className={styles.cardImageOverlay}>
                        <div className={styles.cardHoverBox}>
                            <p className={styles.cardOpenText}>Open</p>
                            <img className={styles.cardOpenArrow} src='./images/icons/napo-arrow-menu.svg' alt=''/>
                        </div>
                    </div>
                    {featTag[0] ?
                        <div className={styles.cardFeatTagHolder}>
                            <FeatTag color={featTag[1]} text={featTag[2]}/>
                        </div> : <></> 
                    }
                </a>
            }
            <div className={styles.cardDataHolder}>
                <div className={styles.cardProjectInfo}>
                    <p className={styles.cardworkTag}>{snippet}</p>
                    {client ? 
                        <div className={styles.cardClientInfo}>
                            <div className={styles.cardClientImageBox}>
                                <img className={styles.cardClientImage} src={clientImage[0]} alt={clientImage[1]}/>
                            </div>
                            <LinkOnWhite text={clientName} link={clientUrl} newTab={true} />
                        </div>
                        :
                        <></>
                    }
                </div>
                {link ? 
                    <Link className={styles.cardProjectTitle} to={path} onClick={scrollToTop}>
                        <h3 className='h3-card-title-18'>{cardTitle}</h3>
                    </Link>
                    :
                    <a className={styles.cardProjectTitle} href={path} target='_blank' rel='noopener noreferrer'>
                        <h3 className='h3-card-title-18'>{cardTitle}</h3>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectCard;