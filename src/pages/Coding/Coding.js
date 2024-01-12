import styles from './Coding.module.css';
import Hero from '../../layouts/Hero/Hero.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar.js';
import PreFoot from '../../layouts/PreFoot/PreFoot.js';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase.js';
import CODE_PROJECTS from '../../data/CODE_PROJECTS.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ToolLabel from '../../util/ToolLabel/ToolLabel.js';
import CertLabel from '../../util/CertLabel/CertLabel.js';
import BigTextLoop from '../../layouts/BigTextLoop/BigTextLoop.js';
import Gallery from '../../layouts/Gallery/Gallery.js';

const Coding = () => {

    const lastSixProjects = CODE_PROJECTS.slice(-6).reverse();
    const lastProject = CODE_PROJECTS[CODE_PROJECTS.length -1];
    
    const toolsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Router', 'Redux', 'API Requests', 'Node.js', 'SQL', 'Tailwinds', 'U/X', 'Typescript', 'GitHub', 'A.I.', 'Figma'];
    const certList = [
        {
            title: 'Full Stack Software Engineer',
            academy: 'Codecademy',
            image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9-pcSbdH5C8fhyx_TSZjKn2e6csGO4OnTnlemDCWrA&s', 'Codecademy Logo']
        },
        {
            title: 'Professional Project Manager',
            academy: 'Google + Coursera',
            image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOahWuuB2uyEBD97UCQRcq1SUpYXsApxMmw&usqp=CAU', 'Google and Coursera Logo']
        },
        {
            title: 'Web Designer Pro',
            academy: 'Flux Academy',
            image: ['https://media.licdn.com/dms/image/C560BAQF1jGIZPnd39w/company-logo_200_200/0/1630577098289?e=2147483647&v=beta&t=zZcymiVMoFJZEnfGFlBW6cd5CV0qbTV41cgvgZ4sm0E', 'Flux Academy Logo']
        }
    ];

    return(
        <>
        <OptionsBar/>
        <Hero
            header='Full-Stack Developer'
            loopText={['HTML, CSS, JavaScript', 'React & Redux', 'Node.js, SQL, and Databases', 'UX & Creative Design']}
            description="Here's a quick summary of my coding journey, from experiences and learnings to practice projects and client work."
            linkData={['Projects', 'Repositories', '/full-stack-portfolio']}
            heroCard={true}
            newTab={true}
            database={lastProject}
            cardImage={['https://assets.materialup.com/uploads/56d36b87-856d-4154-abcd-284aa019afb1/preview.jpg', 'Reddit Clone Project Cover']}
        />
        <BigPhrase text="Any idea gets tons of benefits from leveraging a few lines of carefully written code. It opens the project to new solutions that create lots of new value with great scaleability. If your ideas belong to the digital world and you can use an extra brain or a set of extra hands to help you code give me a call, I can be that."/>
        <section className={styles.projectsGallery}>
            <SectionIntro
                tag='Repositories'
                header='<Projects/>'
                info='Mostly case studies and practice projects (for now), but thoughtfully developed.'
                align='center'
            />
            <Gallery card='code' data={lastSixProjects}/>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>See more projects</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Go to Portfolio' link='/full-stack-portfolio' />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.curriculumSection}>
            <div className={styles.infoWrapper}>
                <SectionIntro 
                    tag='Average numbers'
                    header='Random stats from my coding career.'
                    info='May they help you paint a good picture of my coding skills.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.stats</p>
                    <div className={styles.tableHolder}>
                        <table className={styles.statsTable}>
                            <tbody>
                                <tr>
                                    <th>experience</th>
                                    <th>languages</th>
                                    <th>dark nights of the soul</th>
                                    <th>can work</th>
                                </tr>
                                <tr>
                                    <td>2 years and counting</td>
                                    <td>Spanish, English</td>
                                    <td>16, for now</td>
                                    <td>Remotely, On Site</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.skillsWrapper}>
                <SectionIntro
                    tag='My two cents'
                    header='Useful skills I can bring to the project.'
                    info="This is my current skillset, but I'm adding new skills every month!"
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.tech and tools</p>
                    <div className={styles.toolsWrapper}>
                        {toolsList.map((item, index) => {
                            return <ToolLabel text={item} key={index}/>
                        })}
                    </div>
                </div>
                <div>
                    <p className='bold-tag'>n.certifications</p>
                    <div className={styles.toolsWrapper}>
                        {certList.map((cert, index) => {
                            const {title, academy, image} = cert;
                            return <CertLabel title={title} academy={academy} image={image} key={index}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.cvLinkHolder}>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>See more of my</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Certificates' link='' />
                        <p className='link-group-inner-text'>&nbsp;and&nbsp;</p>
                        <LinkOnWhite text='Courses' link='' />
                    </div>
                </div>
            </div>
        </section>
        <BigTextLoop text='Impeccable end-to-end code for your digital projects&nbsp;&nbsp;-&nbsp;&nbsp;' />
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Tell me about your code.'
            text="I love sharing ideas, commenting strategies, and exploring frameworks. If you're coding a project and you want some help, feedback, or maybe a brainstorming session go ahead and text me. We can go over your entire project with a nice drink."
        />
        </>
    )
}

export default Coding;