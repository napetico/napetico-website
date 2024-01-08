import styles from './PreFoot.module.css';

import LinkOnBlack from '../../util/LinkOnBlack/LinkOnBlack.js';

const PreFoot = ({image, tag, title, text}) => {
    return(
        <>
        <section className={styles.preFoot}>
            <div className={styles.preFootHolder}>
                <div className={styles.preFootImageBox}>
                    <img className={styles.preFootImage} src={image[0]} alt={image[1]} />
                </div>
                <div className={styles.preFootTextBox}>
                    <p className={styles.preFootTag}>{tag}</p>
                    <h3 className={styles.preFootTitle}>{title}</h3>
                    <p className={styles.preFootText}>{text}</p>
                    <div className='link-group-holder-hero'>
                        <p className='link-group-tag'>Find me here </p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-white.svg' alt='' />
                        <div className='link-group-wrapper'>
                            <LinkOnBlack text={'Email'} link={''} />
                            <p className='link-group-inner-text'>, or&nbsp;</p>
                            <LinkOnBlack text={'Phone'} link={''} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PreFoot;