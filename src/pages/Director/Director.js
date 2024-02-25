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
            content: "You have no idea how many times I've exceptionally executed on things that made zero impact just because I rushed into action with fuzzy information and vague goals. But chill, those are lessons learned. Now I'm very intentional about how much grasp I have on the project before kicking it off. I ask more questions, carefully listen to the answers, dig deeper into the details, and critically analyze the entire context to make sure that we are addressing the right things, from the best perspective, and with a solid argument. So, get ready for a 6-feet 6-yo asking lots of 'why' questions while breaking down everything you say to map it on a whiteboard. Don't worry, I know how to make this fun, quick, and super insightful.",
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
            title: 'Orchestrate the action',
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
                header='Project & Ops Manager'
                loopText={['Strategy and Planning', 'Creativity & Communication', 'Budgeting & Operational Excellence', 'Vision and Growth Culture']}
                description='Cultivating creative, organizational, and operational excellence since 2007 —and sharing the crops of living by that motto :)'
                linkData={['Projects', 'PM Portfolio', '/project-manager-portfolio']}
                heroCard={true}
                newTab={false}
                database={lastProject}
                cardImage={['', '']}
            />
            <BigPhrase text="I help SMBs and ENTRs build, optimize, and grow their businesses through the impeccable management of their resources and efforts. If you're sitting on an idea or pushing a project forward, and you could use some help from a cross-industry savvy that loves keeping things organized, aligned, tracked, profitable, and moving forward, don't think of me... call me instead." />
            <section className={styles.projectsGallery}>
                <SectionIntro
                    tag='PM and OM Portfolio'
                    header='Work Experience'
                    info="Here are some projects and ideas I've been part of. Click around to get a better grasp of my expertise, skills, and style. And if you want me to expand on any of them just let me know, I'll be happy to feed you the details."
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
            <section className={styles.goalsSection}>
                <SectionIntro 
                    tag="Manager mindset"
                    header='The foundations for doing superb work.'
                    info="A 'Servant-NavySeal-MadScientist' kind of leadership. Is that even a real thing? Nope 😅, but it makes me a better manager -everyday."
                    align='right'
                />
                <div className={styles.goalsHolder}>
                    <div className={styles.goalsBox}>
                        <p className='bold-tag'>n.goal</p>
                        <p className={styles.goalsText}>My goal is to bring the best out of everything and every one involved in the project, and make that performance be the fuel your business needs to achieve great goals. I want to be there to provide the support, guidance, motivation, and accountability to be at the top of our game, as well as the ideas, strategies, processes, metrics, tactics, and best practices to maximize every opportunity.</p>
                    </div>
                    <div className={styles.goalsBox}>
                        <p className='bold-tag'>n.focus</p>
                        <p className={styles.goalsText}>Beyond all the planning, scheduling, budgeting, monitoring and effectively communicating things, I'll make my daily obsession to escalate three types of excellence: 1) Creative — To streamline innovation, leverage design and UX principles, and make work fun. 2) Organizational — To put us in a remarkable state of alignment and performance regarding culture, strategies, ambitions, work ethic, and protocols. And 3) Operational — To be intentional, efficient, and consistent at optimizing our systems to produce greatest value, both for our customers and for the business.</p>
                    </div>
                </div>
            </section>
            <section className={styles.processSection}>
                <SectionIntro 
                    tag='My direction style'
                    header='A simple framework to build great things.'
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
                    tag='Relevant details'
                    header='Some information worth highlighting.'
                    info="Four things to remember from this page, beside my contact details and the fact that you kind-of liked my profile (hypnothic mode 😵)."
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.details</p>
                    <div className={styles.tableHolder}>
                        <table className={styles.statsTable}>
                            <tbody>
                                <tr>
                                    <th>work experience</th>
                                    <th>favorite work</th>
                                    <th>languages</th>
                                    <th>earnings expectations</th>
                                </tr>
                                <tr>
                                    <td>+15 years across 5 industries</td>
                                    <td>Long-term projects</td>
                                    <td>Spanish, English</td>
                                    <td>A fair one. We'll talk.</td>
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