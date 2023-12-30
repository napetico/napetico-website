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
                    tag='Proyecto Web'
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
                    tag='Brief inicial'
                    header={data.page.sectionTitle}
                    info={data.page.sectionInfo}
                    align='right'
                />
                <div className={styles.briefWrapper}>
                    <div className={styles.goalsHolder}>
                        <p className='bold-tag'>n.objetivo</p>
                        <p className={styles.briefText}>{data.page.goal}</p>
                    </div>
                    <div className={styles.planHolder}>
                        <p className='bold-tag'>n.estrategia</p>
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
                    <p className={styles.sectionTag}>Diseño final</p>
                    <div className={styles.sectionHeaderBox}>
                        <h2 className={styles.sectionHeader}>Mira los elementos más destacados.</h2>
                        <div className={styles.linkGroupHolder}>
                            <p className='link-group-tag'>Si quieres ver la web terminada</p>
                            <img className='link-group-arrow' src='/images/napo-link-arrow-black.svg' alt=''/>
                            <div className='link-group-wrapper'>
                                <div className={styles.linkHolder}>
                                    <a className={styles.linkText} href={data.url} target='_blank' rel='noopener noreferrer'>Abrir Live Site</a>
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
                <h2 className={styles.moreWebsText}>Explora más webs</h2>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Navegar a</p>
                        <img className='link-group-arrow' src='/images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Portafolio Web' link='/web-design-portfolio' />
                        </div>
                    </div>
                </div>
            </section>
            <PreFoot
                image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
                tag='Dame un toque'
                title='Háblame de tu gran web.'
                text='¿Inspirado? ¿Interesado? ¿Con dudas? Charlemos! Con un cafecito dejaremos todo claro para que puedas tomar una decision informada. Y, hagas la web o no, seguro que te vas con algunas buenas ideas. Abajo te dejo los datos.'
            />
        </>
    )
}

export default WebProject;