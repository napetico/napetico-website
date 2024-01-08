import styles from './WebProject.module.css'
import OptionsBar from "../../layouts/OptionsBar/OptionsBar";
import PreFoot from "../../layouts/PreFoot/PreFoot";
import SectionIntro from "../../util/SectionIntro/SectionIntro";
import BigPhrase from '../../layouts/BigPhrase/BigPhrase';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const WebProject = ({ data }) => {
    return (
        <>
            <OptionsBar />
            <section className={styles.introSection}>
                <SectionIntro
                    tag='Web Project'
                    header={data.client.name}
                    info={data.category}
                    clientInfo={[data.client.name, data.url]}
                    clientImage={[data.client.image[0], data.client.image[1]]}
                    align='project'
                />
                <div className={styles.posterImageBox}>
                    <img src={data.mainImages.poster[0]} alt={data.mainImages.poster[1]} />
                </div>
            </section>
            <BigPhrase text={data.client.bio} />
            <section className={styles.briefSection}>
                <SectionIntro
                    tag='Initial brief'
                    header={data.page.sectionTitle}
                    info={data.page.sectionInfo}
                    align='right'
                />
                <div className={styles.briefWrapper}>
                    <div className={styles.goalsHolder}>
                        <p className='bold-tag'>n.goals</p>
                        <p className={styles.briefText}>{data.page.goal}</p>
                    </div>
                    <div className={styles.planHolder}>
                        <p className='bold-tag'>n.strategy</p>
                        <p className={styles.briefText}>{data.page.plan}</p>
                    </div>
                </div>
                <div className={styles.briefGalleryGrid}>
                    {data.introImages.map((image, index) => {
                        return <div className={styles.introImageBox} key={index}>
                            <div className={styles.introImage}>
                                <img src={image.image[0]} alt={image.image[1]} />
                            </div>
                            <h3 className={styles.imageTag}>{image.tag}</h3>
                        </div>
                    })}
                </div>
            </section>
            <section className={styles.outcomeSection}>
                <div className={styles.galleryIntro}>
                    <p className={styles.sectionTag}>Final design</p>
                    <div className={styles.sectionHeaderBox}>
                        <h2 className={styles.sectionHeader}>See the highligths and featured elements.</h2>
                        <div className={styles.linkGroupHolder}>
                            <p className='link-group-tag'>Looking for the final design?</p>
                            <img className='link-group-arrow' src='/images/icons/napo-link-arrow-black.svg' alt=''/>
                            <div className='link-group-wrapper'>
                                <div className={styles.linkHolder}>
                                    <a className={styles.linkText} href={data.url} target='_blank' rel='noopener noreferrer'>Open Live Site</a>
                                    <div className={styles.linkUnderlineTrack}>
                                        <div className={styles.linkUnderline}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.finalDesignGrid}>
                    {data.projectImages.map((image, index) => {
                        return <div className={styles.outcomeImageBox} key={index}>
                            <div className={styles.outcomeImage}>
                                <img src={image.image[0]} alt={image.image[1]} />
                            </div>
                            <h3 className={styles.imageTag}>{image.tag}</h3>
                        </div>
                    })}
                </div>
            </section>
            <BigPhrase text={data.page.outcome} />
            <section className={styles.moreWebsSection}>
                <h2 className={styles.moreWebsText}>Explore more webs</h2>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Navigate to</p>
                        <img className='link-group-arrow' src='/images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Web Portfolio' link='/web-design-portfolio' />
                        </div>
                    </div>
                </div>
            </section>
            <PreFoot
                image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
                tag='Get in touch'
                title='Tell me about you website.'
                text="Did I got you interested? Let's talk it over a casual coffee and breakdown the details so you can make an informed decision. No matter what you decide, you'll walk with great insights. My contact details are below :)"
            />
        </>
    )
}

export default WebProject;