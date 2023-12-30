import styles from './SectionIntro.module.css';
import LinkOnWhite from '../LinkOnWhite/LinkOnWhite';

const SectionIntro = ({tag, header, info, clientInfo, clientImage, align}) => {
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
    if (align === 'project') {
        return(
            <>
            <div className={styles.sectionIntroWrapperCenter}>
                <p className={styles.introTag}>{tag}</p>
                <div className={styles.sectionHeaderBoxCenter}>
                    <h1 className={styles.projectIntroHeader}>{header}</h1>
                    <div className={styles.projectInfoWrapper}>
                        <p className={styles.workCategory}>{info}</p>
                        <div className={styles.clientWrapper}>
                            <div className={styles.clientImageBox}>
                                <img src={clientImage[0]} alt={clientImage[1]}/>
                            </div>
                            <LinkOnWhite text={clientInfo[0]} link={clientInfo[1]} newTab={true}/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default SectionIntro;