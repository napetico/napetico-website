import styles from './ProjectCard.module.css';
import FeatTag from '../../util/FeatTag/FeatTag';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import { Link } from 'react-router-dom';

const ProjectCard = ({image, href, info, title, client, clientImage, featTag}) => {
    return(
        <>
        <div className={styles.projectCard}>
            <Link className={styles.cardImageHolder} to={href}>
                <img className={styles.cardImage} src={image[0]} alt={image[1]}/>
                <div className={styles.cardImageOverlay}>
                    <div className={styles.cardHoverBox}>
                        <p className={styles.cardOpenText}>Abrir</p>
                        <img className={styles.cardOpenArrow} src='./images/icons/napo-arrow-menu.svg' alt=''/>
                    </div>
                </div>
                {featTag[0] ?
                    <div className={styles.cardFeatTagHolder}>
                        <FeatTag color={featTag[1]} text={featTag[2]}/>
                    </div> : <></> 
                }
            </Link>
            <div className={styles.cardDataHolder}>
                <div className={styles.cardProjectInfo}>
                    <p className={styles.cardworkTag}>{info}</p>
                    {client[0] ?
                        <div className={styles.cardClientInfo}>
                            <div className={styles.cardClientImageBox}>
                                <img className={styles.cardClientImage} src={clientImage[0]} alt={clientImage[1]}/>
                            </div>
                            <LinkOnWhite text={client[1]} link={client[2]} newTab={true} />
                        </div> : <></>
                    }
                </div>
                <a className={styles.cardProjectTitle} href={href}>
                    <h3 className='h3-card-title-18'>{title}</h3>
                </a>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;