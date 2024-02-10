import styles from './Director.module.css'
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import PM_PROJECTS from '../../data/PM_PROJECTS';
import Gallery from '../../layouts/Gallery/Gallery';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';
import Accordion from '../../util/Accordion/Accordion';
import ToolLabel from '../../util/ToolLabel/ToolLabel';
import CertLabel from '../../util/CertLabel/CertLabel';
import BigTextLoop from '../../layouts/BigTextLoop/BigTextLoop';

const Director = () => {

    const lastSixProjects = PM_PROJECTS.slice(-6).reverse();
    const lastProject = PM_PROJECTS[PM_PROJECTS.length -1];

    const toolsList = ['Effective Communication', 'Facilitations', 'Flexibility', 'Organizational Skills', 'Negotiation & Mediation', 'KPIs & Metrics', 'Reports', 'Budget Control', 'Planning & Scheduling', 'Stock Management', 'Team Building', 'POSs, CRMs & CMSs', 'System thinking', 'Brand Strategy & Governance', 'Digital Marketing Strategy', 'Full Stack Programmer', 'Web Development', 'UX & UI Design', 'Processes Optimization', 'Company Culture', 'User Behaviour', '... and more'];
    const methodsList = ['Waterfall', 'Agile', 'Scrum', 'Sprints', 'Lean', 'Kanban', '5S', 'Six Sigma', 'DMAIC', 'Product-Market Fit', 'Lean Six Sigma', "Porter's Competitive Strategies", 'CORE Discovery', 'Cross-functional Teams', 'Notion', 'Slack', 'Miro', 'Trello', 'Gantt', 'Google Suite', 'Microsoft', 'Adobe', 'Figma', 'APIs', '... and more'];
    const certList = [
        {
            title: 'Professional Project Manager',
            academy: 'Google + Coursera',
            image: ['https://s0.smartresize.com/wallpaper/363/615/HD-wallpaper-google-technology-logo-colorful-browser.jpg', 'Google Academy Logo']
        },
        {
            title: 'Brand Strategy Fundamentals',
            academy: 'The Futur',
            image: ['https://i1.sndcdn.com/avatars-000753460939-da0bd6-t500x500.jpg', 'Academy Logo']
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
            title: 'Ponder the hypothesis',
            span: 'To carefully understand and articulate the details before hitting the gas.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
        {
            tag: '2',
            title: 'Calibrate the strategy',
            span: 'Studying and defining the best ones to achieve our goals.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
        {
            tag: '3',
            title: 'Craft and share the plan',
            span: 'A thoughful one, to guide us and inspire us. And communicate it clearly.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
        {
            tag: '4',
            title: 'Orchestate the action',
            span: 'Executing our roadmap, measuring, optimizing -and pivoting if needed.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
        {
            tag: '5',
            title: 'Put systems in place',
            span: 'Breaking down good results and turning them into consistent processes.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
        {
            tag: '6',
            title: 'Close like a champ',
            span: 'A glorious hand-off of the project and final deliverables.',
            content: "Sorry, I haven't finish this description yet 😅 I'm working on it though. Click around while I find the words to expand on the titles.",
        },
    ];

    return (
        <>
            <OptionsBar />
            <Hero
                header='Project Manager | COO'
                loopText={['Strategy and Planning', 'Creativity & Communication', 'Systems & Operational Excellence', 'Vision and Growth Culture']}
                description='Helping SMBs and entrepreneurs ideate, build, and scale their businesses through the impeccable management of their creative, strategic, and operational efforts.'
                linkData={['Projects', 'PM Portfolio', '/project-manager-portfolio']}
                heroCard={true}
                newTab={false}
                database={lastProject}
                cardImage={['', '']}
            />
            <BigPhrase text="Do you have an idea that needs to get off the ground? A project lagged under setbacks? Or a business growing fast but out of control? Let's team up and allow me to power up your strategic, creative, and operational efforts while you focus on doing what you do best: being a great leader and generating more ideas and opportunities. I will take care of the rest." />
            <section className={styles.profileCardSection}>
                <div className={styles.profileCardHolder}>
                    <div className={styles.titleWrapper}>
                        <p className={styles.sectionTag}>My goal</p>
                        <h2 className={styles.bioCardHeader}>Optimize performance and maximize opportunities.</h2>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.bioText}>Forget shortcuts or expensive magic tricks. If you want to achieve great goals we must get under your business’ hood and work on the engines. Every process you execute and executive decision you make -and the accumulation of them- is rendering an impactful outcome and my mission will be to help you improve the good ones, eliminate the bad ones, and implement the ones that are need but not running yet. Keep in mind that your ideas won’t raise to the level of your goals but fall to the level of the systems to have in place. Let’s make sure you have the best ones.</p>
                    </div>
                    <div className={styles.photoWrapper}>
                        <div className={styles.bioPhotoBox}>
                            <img src='/images/napo-workshop-image.png' alt='Napoleon running a strategy workshop'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.purposeSection}>
                <div className={styles.sectionIntroWrapper}>
                    <p className={styles.sectionTag}>My focus</p>
                    <div className={styles.sectionHeaderBox}>
                        <h2 className={styles.sectionHeader}>Streamlined creativity, resilient strategies, and operational excellence.</h2>
                        <p className={styles.sectionInfo}>Of course building a successful business takes more than just focusing on these three things. We'll also address good finance, killer marketing, clever product development, and many others. But these three focuses are catalyzers of great work and the impact they have on the business is a game changer. Not only for making it run at peak performance but also -and specially- for bringing everyone together under one empowering vision and work ethics -which makes for an unstoppable organization. Big success is collective, multidisciplinary, and systematic. My intent is to ignite this synergy and make it consistent over time through creativity, good strategies, and smart work.</p>
                    </div>
                </div>
            </section>
            <section className={styles.projectsGallery}>
                <SectionIntro
                    tag='Directed projects'
                    header='PM Portfolio'
                    info='Explore projects and ideas I have been part of. Let me know what you liked.'
                    align='center'
                />
                <Gallery card='pm' data={lastSixProjects}/>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Check more projects</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Go to Portfolio' link='/project-manager-portfolio' />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.processSection}>
                <SectionIntro 
                    tag='My direction style'
                    header='A simple process to build great things.'
                    info='Each project is its own universe and my process and methods adapts with it. Regardless, I always make sure to take time to: '
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.creative process</p>
                    <Accordion data={accordionData}/>
                </div>
            </section>
            <section className={styles.examplesSection}>
                <SectionIntro 
                    tag='Most usual deliverables'
                    header='My work tends to look a bit like this.'
                    info='Of course, what gets done depends on the details of every project. The list goes larger than this, but you can get the idea.'
                    align='right'
                />
                <div className={styles.examplesHolder}>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.strategic</p>
                        <p className={styles.exampleText}>Vision · Values · Target Customer · Nich and Market · Trends and Competitors · Direction & Commercial Strategy · Company Culture · Ethics Code · Creative Frameworks and Facilitation · and more.</p>
                    </div>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.tactical</p>
                        <p className={styles.exampleText}>Competitive Strategy · Brand Strategy and Design · Product Strategy · Communication Strategy · Business Structures · Web Design & Strategy · User Experience · Protyping and Testing · Positioning · Product-Market Fit · KPIs fetching and analysis · and more.</p>
                    </div>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.operational</p>
                        <p className={styles.exampleText}>Processes Optimization · Systems Creation and Implementation · Resources Management · Stock Control · Hardware & Tools · Protocols and Manuals · Cost Optimization · User Experience Improvements · Onboarding and Team Training · and more.</p>
                    </div>
                </div>
            </section>
            <section className={styles.statsSection}>
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
                                    <td>min. 6 months</td>
                                    <td>€1.700 - €3.000 p/month</td>
                                    <td>Spanish, English</td>
                                    <td>Just one (yours)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className={styles.skillsSection}>
                <SectionIntro
                    tag='My expertise'
                    header='Useful skills I will bring to the project.'
                    info='A multidisciplinary list of technical, creative, and strategic skills paired with business accumen. Looking for more skills? Let me know.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.methodologies and tools</p>
                    <div className={styles.toolsWrapper}>
                        {methodsList.map((item, index) => {
                            return <ToolLabel text={item} key={index}/>
                        })}
                    </div>
                </div>
                <div>
                    <p className='bold-tag'>n.complementary skills</p>
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
            </section>
            <BigTextLoop text='Power up you business ideas through creative, organizational, and operational excellence&nbsp;&nbsp;-&nbsp;&nbsp;' />
            <PreFoot
                image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
                tag='Reach out'
                title='Trying to pull off a project?'
                text="I'd love hearing about it. Sharing visions, commenting business plans, ideating strategies... If you're working on an awesome idea and you want some help, feedback, or maybe a brainstorming session please be my guest. We will make gold out of the conversation. Promise :)"
            />
        </>
    )
}

export default Director;