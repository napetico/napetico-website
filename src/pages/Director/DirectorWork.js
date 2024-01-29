import styles from './DirectorWork.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import PM_PROJECTS from '../../data/PM_PROJECTS';
import Gallery from '../../layouts/Gallery/Gallery.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const DirectorWork = () => {

    const allProjects = PM_PROJECTS.slice().reverse();

    return(
        <>
        <OptionsBar />
        <section className={styles.DirectorWorkSection}>
            <div className={styles.DirectorWorkIntroHolder}>
                <SectionIntro
                    tag='Work as Project Manager'
                    header='PM Portfolio'
                    info="Here's a collection of the projects, ideas, roles, and industries I've worked in and learned from. Let me know what you think."
                    align='right'
                />
            </div>
            <div className={styles.DirectorWorkGalleryHolder}>
                <Gallery card='pm' data={allProjects} />
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Go back to</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Project Manager' link='/project-manager' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Trying to pull off a project?'
            text="I'd love hearing about it. Sharing visions, commenting business plans, ideating strategies... If you're working on an awesome idea and you want some help, feedback, or maybe a brainstorming session please be my guest. We will make gold out of the conversation. Promise :)"
        />
        </>
    )
}

export default DirectorWork;