import styles from './SectionIntro.module.css'

const SectionIntro = ({tag, header, info}) => {
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

export default SectionIntro;