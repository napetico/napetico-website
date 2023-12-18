import styles from './SectionIntro.module.css'

const SectionIntro = ({tag, header, info, align}) => {
    if (align === 'right') {
        return(
            <>
            <div className={styles.sectionIntroWrapper}>
                <p className={styles.sectionTag}>{tag}</p>
                <div className={styles.sectionHeaderBox}>
                    <h2 className={styles.sectionHeader}>{header}</h2>
                    <p className={styles.sectionInfo}>{info}</p>
                </div>
            </div>
            </>
        )
    }
    if (align === 'center') {
        return(
            <>
            <div className={styles.sectionIntroWrapperCenter}>
                <p className={styles.introTag}>{tag}</p>
                <div className={styles.sectionHeaderBoxCenter}>
                    <h2 className={styles.introHeader}>{header}</h2>
                    <p className={styles.introInfo}>{info}</p>
                </div>
            </div>
            </>
        )
    }
}

export default SectionIntro;