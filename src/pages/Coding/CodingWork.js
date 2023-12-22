import styles from './CodingWork.module.css';
import CODE_PROJECTS from '../../data/CODE_PROJECTS';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import Gallery from '../../layouts/Gallery/Gallery';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const CodingWork = () => {

    const allProjects = CODE_PROJECTS.slice().reverse();;

    return(
        <>
        <section className={styles.codingWorkSection}>
            <div className={styles.codingWorkIntroHolder}>
                <SectionIntro
                    tag='Listado de proyectos'
                    header='Repositorios'
                    info='Aquí te dejo una colección de mis proyectos destacados, desde códigos bien simples hasta aplicaciones que me quitaron el sueño. '
                    align='right'
                />
            </div>
            <div className={styles.codingWorkGalleryHolder}>
                <Gallery card='code' data={allProjects} />
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Volver al</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Programador Full Stack' link='/full-stack-developer' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Hablemos de programación.'
            text='Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si estas escribiendo código y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default CodingWork;