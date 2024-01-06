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

    const toolsList = ['Notion', 'Slack', 'Google Suite', 'Microsoft', 'Web Platforms', 'Full Stack Developer', 'Digital Marketing', 'Figma', 'Stock Management Systems', 'Process Optimization','POS', 'CMS', 'Project Management', '... and more'];
    const methodsList = ['Lean', 'Agile', 'Scrum', 'Waterfall', 'Sprints', 'Product-Market Fit', 'Porter Competitive Advantage', 'Branding', 'Digital Marketing', 'Funnels', 'AIDA', ' Team Building', 'Storytelling', 'Six Sigma', '... and more'];
    const certList = [
        {
            title: 'Web Design Pro',
            academy: 'Flux Academy',
            image: ['https://media.licdn.com/dms/image/C560BAQF1jGIZPnd39w/company-logo_200_200/0/1630577098289?e=2147483647&v=beta&t=zZcymiVMoFJZEnfGFlBW6cd5CV0qbTV41cgvgZ4sm0E', 'Flux Academy Logo']
        },
        {
            title: 'Webflow Expert Certification',
            academy: 'Webflow',
            image: ['https://scontent.fmad7-1.fna.fbcdn.net/v/t39.30808-6/385306567_719382456899846_9163212455345370930_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ysiN2QjgMo8AX9oM9Wp&_nc_ht=scontent.fmad7-1.fna&oh=00_AfBYOXKoFdfaSE-z0FQoVlWdQdxr_UpCf0pHSthyckWfpA&oe=6586C8FB', 'Webflow Logo']
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
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '2',
            title: 'Calibrate the strategy',
            span: 'Studying and defining the best ones to achieve our goals.',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '3',
            title: 'Craft and share the plan',
            span: 'A thoughful one, to guide us and inspire us. And communicate it clearly.',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '4',
            title: 'Orchestate the action',
            span: 'Executing, measuring, and optimizing each step in our roadmap -and pivoting if needed-.',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '5',
            title: 'Put systems in place',
            span: 'Breaking down the good results and turning them into bullet proof, automated processes',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
    ];

    return (
        <>
            <OptionsBar />
            <Hero
                header='COO - Project Manager'
                loopText={['Strategy and Planning', 'Creativity & Communication', 'Systems & Operational Excellence', 'Vision and Leadership']}
                description='Ayudo a Pymes y emprendedores a idear, construir y optimizar sus negocios a traves de la gestión impecable de sus esfuerzos estrategicos, creativos y operativos.'
                linkData={['Portfolio', 'Managed Projects', '/project-manager-portfolio']}
                cardProject={true}
                cardImage={['./images/TEST-web-bl.png', 'Reddit Clone Project Cover']}
                cardTag={[true, 'yellow', 'web más reciente']}
                cardInfo={['Biting Lemons', 'Revista Online | Webflow + CMS', '#']}
            />
            <BigPhrase text='¿Tienes una idea que necesita despegar? ¿Un proyecto estancado tras contratiempos? ¿O un negocio que crece pero que se sale de control? Hagamos equipo y permíteme darle un gran impulso a tus esfuerzos estratégicos, operativos y creativos mientras que tú te enfocas en hacer lo que haces mejor: liderar y generar más ideas y oportunidades. Yo me encargo del resto.' />
            <section className={styles.profileCardSection}>
                <div className={styles.profileCardHolder}>
                    <div className={styles.titleWrapper}>
                        <p className={styles.sectionTag}>Mi objetivo</p>
                        <h2 className={styles.bioCardHeader}>Optimizar al máximo los motores que dan tracción a tus ideas.</h2>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.bioText}>Hola! Soy Napoleon. Director de proyectos auto-proclamado y COO por vocación. Estratega con mente de coach y el impetu de un pasante. No soy un guru de los negocios, pero si soy un manitas de las estrategias y las operaciones, y un freaky de la creatividad. Tengo una decente y variada lista de habilidades técnicas, victorias educativas y errores espantosos que hacen que de los mejor en cada proyecto. Pero el trabajo que mas me gusta (y el que aporta mas valor) es asegurarme de que vamos juntos en la direccion correcta con pasos firmes, eficientes y precisos.</p>
                        <ul className={styles.detailsHolder}>
                            <li className={styles.detailsBox}>
                                <img className={styles.icon} src='/images/icons/napo-language-icon.png' alt='Languages icon'/>
                                <p><span className={styles.bold}>Hablo muy bien: </span>Español e Inglés</p>
                            </li>
                            <li className={styles.detailsBox}>
                                <img className={styles.icon} src='/images/icons/napo-laptop-icon.png' alt='Laptop icon'/>
                                <p><span className={styles.bold}>Puedo trabajar: </span>Remoto o Presencial</p>
                            </li>
                            <li className={styles.detailsBox}>
                                <img className={styles.icon} src='/images/icons/napo-rock-hands-icon.png' alt='Rock hands icon'/>
                                <p><span className={styles.bold}>Me gusta: </span>Los equipos y los sistemas</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.photoWrapper}>
                        <div className={styles.bioPhotoBox}>
                            <img src='/images/napetico-profile-image.png' alt='Napoleon profile photo'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.purposeSection}>
                <div className={styles.sectionIntroWrapper}>
                    <p className={styles.sectionTag}>My perspective</p>
                    <div className={styles.sectionHeaderBox}>
                        <h2 className={styles.sectionHeader}>Streamlined creativity, operational excellence, and an antifragile vision.</h2>
                        <p className={styles.sectionInfo}>Por supuesto que una empresa exitosa tambien va de finanzas, recursos humanos o tecnología, pero estas tres perspectivas son lo mio. Mi especialidad, mi obsesion. Y el impacto que generan marca una gran diferencia. Tambien te digo que al final todo esta interconectado y que las mejores soluciones e innovaciones vienen del esfuerzo colectivo y multidisciplinar. Mi mision es promover esa alineación, y que todo el proyecto entre en “la zona” gracias a una vision clara e inspiradora, estrategias eficientes y vibrantres, y sistemas afinados cual relojes, que transforman ideas en historias de exito </p>
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
                    tag='How I direct, sort of...'
                    header='A simple process to build great things.'
                    info='Each project is unique in its own complexity and needs. The processes and methodologies I use vary in consecuense to fit them best. Regardless, I always make sure to have taken the time to: '
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.proceso creativo</p>
                    <Accordion data={accordionData}/>
                </div>
            </section>
            <section className={styles.examplesSection}>
                <SectionIntro 
                    tag='Most usual deliverables'
                    header='My work tends to look a bit like this.'
                    info='Of course, it depends on the project. But you can get the idea.'
                    align='right'
                />
                <div className={styles.examplesHolder}>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.strategic</p>
                        <p className={styles.exampleText}>Vision, Values, Target Customer, Nich and Market, Trends and Competitors, Direction & Commercial Strategy, Company Culture, Ethics Code, Creative Frameworks and Facilitation, and more.</p>
                    </div>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.tactical</p>
                        <p className={styles.exampleText}>Competitive Strategy, Brand Strategy and Design, Product Strategy, Communication Strategy, Business Structures, Web Design and Strategy, User Experience, Protyping and Testing, Positioning, Product-Market Fit, KPIs fetching and analysis, and more.</p>
                    </div>
                    <div className={styles.exampleBox}>
                        <p className='bold-tag'>n.operational</p>
                        <p className={styles.exampleText}>Processes Optimization, Systems Creation and Implementation, Resources Management, Stock Control, Hardware & Tools, Protocols and Manuals, Cost Optimization, User Experience Improvements, Onboarding and Team Training, and more.</p>
                    </div>
                </div>
            </section>
            <section className={styles.skillsSection}>
                <SectionIntro
                    tag='My expertise'
                    header='Useful skills I could bring to the party.'
                    info='The usuals. Looking for other skills? Let me know.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.frameworks and concepts</p>
                    <div className={styles.toolsWrapper}>
                        {methodsList.map((item, index) => {
                            return <ToolLabel text={item} key={index}/>
                        })}
                    </div>
                </div>
                <div>
                    <p className='bold-tag'>n.technologies and tools</p>
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
                tag='Dame un toque'
                title='Háblame de tu gran web.'
                text='¿Inspirado? ¿Interesado? ¿Con dudas? Charlemos! Con un cafecito dejaremos todo claro para que puedas tomar una decision informada. Y, hagas la web o no, seguro que te vas con algunas buenas ideas. Abajo te dejo los datos.'
            />
        </>
    )
}

export default Director;