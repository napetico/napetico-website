import styles from './CertificationCard.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const CertificationCard = ({data}) => {
    return (
        <>
        <div className={styles.certCardHolder}>
            <div className={styles.cardTitlesHolder}>
                <h3 className={styles.certTitle}>{data.title}</h3>
                <p>at</p>
                <div className={styles.academyInfo}>
                    <div className={styles.academyImageBox}>
                        <img className={styles.academyImage} src={data.image[0]} alt={data.image[1]}/>
                    </div>
                    <LinkOnWhite text={data.academy[0]} link={data.academy[1]} newTab={true}/>
                </div>
            </div>
            <div className={styles.certInfoBox}>
                <p>{data.description}</p>
            </div>
            <div className={styles.certButtonBox}>
                {data.completed ? 
                    <a className={styles.openLink} href={data.certificationURL} >
                        <p>open cert.</p>
                    </a> :
                    <div className={styles.blackButton}>
                        <p>taking now</p>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default CertificationCard;