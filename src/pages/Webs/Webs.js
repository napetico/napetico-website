import styles from './Webs.module.css';
import Hero from '../../layouts/Hero/Hero.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar.js';
import PreFoot from '../../layouts/PreFoot/PreFoot.js';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase.js';
import WEB_PROJECTS from '../../data/WEB_PROJECTS.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ToolLabel from '../../util/ToolLabel/ToolLabel.js';
import CertLabel from '../../util/CertLabel/CertLabel.js';
import BigTextLoop from '../../layouts/BigTextLoop/BigTextLoop.js';
import Gallery from '../../layouts/Gallery/Gallery.js';
import Accordion from '../../util/Accordion/Accordion.js';

const Webs = () => {

    const lastSixProjects = WEB_PROJECTS.slice(-6).reverse();
    const lastProject = WEB_PROJECTS[WEB_PROJECTS.length -1];

    const toolsList = ['Webflow', 'HTML & CSS', 'JavaScript', 'Cool Animations', 'React', 'Back-End', 'APIs', 'Wireframes', 'Figma', 'Prototypes', 'U/X & U/I', 'CMS', 'Re-design', 'Brand Strategy', 'Communication Strategy'];
    const certList = [
        {
            title: 'Web Design Pro',
            academy: 'Flux Academy',
            image: ['https://media.licdn.com/dms/image/C560BAQF1jGIZPnd39w/company-logo_200_200/0/1630577098289?e=2147483647&v=beta&t=zZcymiVMoFJZEnfGFlBW6cd5CV0qbTV41cgvgZ4sm0E', 'Flux Academy Logo']
        },
        {
            title: 'Webflow Expert Certification',
            academy: 'Webflow',
            image: ['/images/icons/napo-webflow-logo.png', 'Webflow Logo']
        },
        {
            title: 'Full Stack Software Engineer',
            academy: 'Codecademy',
            image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9-pcSbdH5C8fhyx_TSZjKn2e6csGO4OnTnlemDCWrA&s', 'Codecademy Logo']
        }
    ];
    const accordionData = [
        {
            tag: '1',
            title: 'Context & Strategy',
            span: 'To be asertive and coherent with your expectations',
            content: "To start, we'll get together to talk about your business and expectations. I'll make lots of questions, so be ready hehe. My goal is to understand your vision, clarify details, and connect the dots to discover which ideas will have the biggest impact. Depending on the size of your project I will also run a deep research around your business, to see if there's anything useful we could add or improve. From all this, we will get very clear about how to make the most out of this engagement. If something pops up that I can't do I'll be honest, tell you, and help you find solutions. Also, these conversations frequently bring to light very cool ideas about your business that have nothing to do with the website, so bring pen and paper and let's get creative.",
        },
        {
            tag: '2',
            title: 'Concept & Design',
            span: 'To find the perfect look & feel and site features ',
            content: "This phase is to nail the look & feel of your site. First, we'll work on refining your message (purpose, products, benefits, values, story...) and crafting a clear and consistent structure to communicate it -we don't want confused visitors struggling to know about you and what you do. I'll build wireframes and choose together which direction fits best. Second, we'll work on all the visuals (colors, imagery, final text, animations, and so on). I'll build high-fidelity mockups, review them together, and choose a final design. My goal here is to help you explore 2-3 possible directions for your site, get to one you like, and clear every detail or resource we need before moving on to the next phase.",
        },
        {
            tag: '3',
            title: 'Implementation & Testing',
            span: 'Getting the site pixel perfect for testing',
            content: "In this step I'll materialize your approved design using code or Webflow -mostly working by myself. I usually start with the structure and CMS, then move to layouts and design, and finally, animations and other settings. For each of these three milestones I will give you updates so you can see the progress and give feedback (if needed). When everything is done we will test the site's performance together (visual, grammar, loading speed, forms, and so on) and list any improvement that could be made or bug to fix.",
        },
        {
            tag: '4',
            title: 'Optimization and Launch',
            span: 'Refinements, preparations, and going live baby!',
            content: 'With the notes from the previous step I will optimize the site to the last pixel. I will also work on basic SEO settings, connecting hosting and domain, and help you set up Google Analytics. Launching includes a quick class -with you or your team- to show you how to manage your site (edit text, change photos, add data into the CMS, collect form emails, and more), especially if we used Webflow. The last move is to make the site public! I will stay around for a few weeks after launching to track the performance and help you with any questions.',
        },
    ]

    return(
        <>
        <OptionsBar />
        <Hero
            header='Webs for SMBs'
            loopText={['Code or No Code', 'Responsive and Interactive', 'Solid Strategies & Basic SEO', 'Sharp CMS & Backend']}
            description='The ideal web. Without complexities or crazy budgets.'
            linkData={['Projects', 'Web Portfolio', '/web-design-portfolio']}
            heroCard={true}
            newTab={false}
            database={lastProject}
            cardImage={['', '']}
        />
        <BigPhrase text="I'll build you a beautiful and productive website, aligned with your business model and coherent with your context and goals, so you can sky-rocket your brand's positioning, performance, and results."/>
        <section className={styles.projectsGallery}>
            <SectionIntro
                tag='Featured projects'
                header='Web Portfolio'
                info='Check out my websites. If you like something reach out.'
                align='center'
            />
            <Gallery card='web' data={lastSixProjects}/>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>See more websites</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Go to Portfolio' link='/web-design-portfolio' />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.curriculumSection}>
            <div className={styles.processWrapper}>
                <SectionIntro 
                    tag='How it rolls'
                    header='A simple process for getting great results.'
                    info='I design in divergent and convergent cycles. It always looks different for each project, but it usually falls into these four simple steps:'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.creative process</p>
                    <Accordion data={accordionData}/>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <SectionIntro 
                    tag='Estimated investment'
                    header='Get an idea of the average numbers.'
                    info="We'll get to more accurate estimates once we breakdown the details of your project, but for now this is a great starting point."
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.stats</p>
                    <div className={styles.tableHolder}>
                        <table className={styles.statsTable}>
                            <tbody>
                                <tr>
                                    <th>timeline</th>
                                    <th>investment</th>
                                    <th>languages</th>
                                    <th>Projects at once</th>
                                </tr>
                                <tr>
                                    <td>2 - 8 weeks</td>
                                    <td>€1.000 - €7.000</td>
                                    <td>Spanish, English</td>
                                    <td>Just one (yours)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.skillsWrapper}>
                <SectionIntro
                    tag='My two cents'
                    header='Useful skills I will bring to the table.'
                    info='These is a pretty standard list, but if you need further skills, ask me.'
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
                    <p className='link-group-tag'>See more of my </p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Certificates' link='' />
                        <p className='link-group-inner-text'>&nbsp;and&nbsp;</p>
                        <LinkOnWhite text='Courses' link='' />
                    </div>
                </div>
            </div>
        </section>
        <BigTextLoop text='High-performing websites to boost your business growth&nbsp;&nbsp;-&nbsp;&nbsp;' />
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Get in touch'
            title='Tell me about you website.'
            text="Did I got you interested? Let's talk it over a casual coffee and breakdown the details so you can make an informed decision. No matter what you decide, you'll walk with great insights. My contact details are below :)"
        />
        </>
    )
}

export default Webs;