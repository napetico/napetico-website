import styles from './OptionsBar.module.css';

const OptionsBar = () => {
    return (
        <>
        <section className={styles.optionsBar}>
            <div className={styles.optionsBarHolder}>
                <div className={styles.socialLinksBox}>
                    <a className={styles.optSocialLink} href='https://www.instagram.com/napetico' target='_blank' rel='noopener noreferrer'>
                        <img className={styles.optSocialLinkImage} src='./images/napo-instagram-logo.svg' alt=''/>
                    </a>
                    <a className={styles.optSocialLink} href='https://www.linkedin.com/in/napoleon-bazan/' target='_blank' rel='noopener noreferrer'>
                        <img className={styles.optSocialLinkImage} src='./images/napo-linkedin-logo.svg' alt=''/>
                    </a>
                    <a className={styles.optSocialLink} href='https://github.com/napetico' target='_blank' rel='noopener noreferrer'>
                        <img className={styles.optSocialLinkImage} src='./images/napo-github-logo.svg' alt=''/>
                    </a>
                </div>
                <div className={styles.shareLinksBox}>
                    <div className={styles.optShareLink}>
                        <img className={styles.optShareLinkImage} src='./images/napo-share-icon.svg' alt=''/>
                    </div>
                    <div className={styles.optShareLink}>
                        <img className={styles.optShareLinkImage} src='./images/napo-heart-icon.svg' alt=''/>
                    </div>
                    <a className={styles.optShareLink} href='./napoleon-cv.pdf' target='_blank' rel='noopener noreferrer'>
                        <img className={styles.optShareLinkImage} src='./images/napo-cv-icon.svg' alt=''/>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default OptionsBar;