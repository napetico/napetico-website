import styles from './CertLabel.module.css';

const CertLabel = ({title, academy, image}) => {
    return(
        <>
        <div className={styles.certLabelWrapper}>
            <div className={styles.certLabelImageBox}>
                <img className={styles.certLabelImage} src={image[0]} alt={image[1]} />
            </div>
            <div className={styles.certLabelTextBox}>
                <h3 className={styles.certLabelTitle}>{title}</h3>
                <p className={styles.certLabelText}>{academy}</p>
            </div>
        </div>
        </>
    )
}

export default CertLabel;