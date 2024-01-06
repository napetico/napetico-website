import styles from './Courses.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Gallery from '../../layouts/Gallery/Gallery';
import COURSE_LIST from '../../data/COURSE_LIST';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const Courses = () => {

    const allCourses = COURSE_LIST.slice().reverse();

    return(
        <>
        <OptionsBar />
        <section className={styles.galleryContainer}>
            <SectionIntro 
                tag='Completados y curso'
                header='Cursos y Talleres.'
                info='Disfruto haciendo cursos de temas que me parecen interesantes. Estos son algunos de los más relevantes de los últimos años.'
                align='right'
            />
            <div className={styles.galleryHolder}>
                <Gallery card='course' data={allCourses}/>
            </div>
        </section>
        <section className={styles.backHomeSection}>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Volver a</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Página de Inicio' link='/' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='¿Algún curso que recomendar?'
            text='Sin presiones. Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si tienes un proyecto y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default Courses;