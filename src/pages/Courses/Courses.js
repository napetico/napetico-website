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
                tag='Workshops Library'
                header='Latest Courses.'
                info="I enjoy signing up for interesting courses and workshops to learn new things. Here's a list of the most relevant ones I've taken recently."
                align='right'
            />
            <div className={styles.galleryHolder}>
                <Gallery card='course' data={allCourses}/>
            </div>
        </section>
        <section className={styles.backHomeSection}>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Go back to</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Home Page' link='/' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Any course to recommend?'
            text="I'm always up for learning new fun things that can help me grow, professionally and personally. Cooking classes? I'm in. Real Estate investing? Save my seat. Algorithms? Let's do it. Ballon animals? Heck yeah :)"
        />
        </>
    )
}

export default Courses;