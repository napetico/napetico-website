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
                    header='Web Portfolio'
                    info='Here you have all my webs and featured work, from full sites and layouts to single elements that look better that what I thought.'
                    align='right'
                />
            </div>
            <div className={styles.webWorkGalleryHolder}>
                <Gallery card='web' data={allProjects} />
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Back to</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Webs for SMBs' link='/web-designer' />
                        </div>
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

export default WebWork;