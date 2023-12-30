import styles from './WebWork.module.css';
import WEB_PROJECTS from '../../data/WEB_PROJECTS';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import Gallery from '../../layouts/Gallery/Gallery';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';

const WebWork = () => {

    const allProjects = WEB_PROJECTS.slice().reverse();

    return(
        <>
        <OptionsBar/>
        <section className={styles.webWorkSection}>
            <div className={styles.webWorkIntroHolder}>
                <SectionIntro
                    tag='Webflow Expert'
                    header='Portafolio Web'
                    info='Aquí tienes todas mis webs y trabajos destacados, desde páginas enteras hasta elementos que quedaron mejor de los que esparaba.'
                    align='right'
                />
            </div>
            <div className={styles.webWorkGalleryHolder}>
                <Gallery card='web' data={allProjects} />
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Volver al</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Web para Pymes' link='/web-designer' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Hablemos de tu web ideal.'
            text='¿Inspirado? ¿Interesado? ¿Con dudas? Charlemos! Con un cafecito dejaremos todo claro para que puedas tomar una decision informada. Y, hagas la web o no, seguro que te vas con algunas buenas ideas. Abajo te dejo los datos.'
        />
        </>
    )
}

export default WebWork;