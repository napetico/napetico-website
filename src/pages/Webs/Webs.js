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

    const toolsList = ['Webflow', 'HTML & CSS', 'JavaScript', 'Animaciones', 'React', 'Back-End', 'APIs', 'Wireframes', 'Figma', 'Prototipos', 'U/X & U/I', 'CMS - Gestor de contenidos', 'Rediseño', 'Estrategias de Marca y Comunicación'];
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
            title: 'Contexto y Estrategia',
            span: 'Para ser asertivo y coherente con tus expectativas',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '2',
            title: 'Concepto y Diseño',
            span: 'Para conseguir el look y las funciones que necesitas',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '3',
            title: 'Implementación',
            span: 'Programaré pixel a pixel todo el diseño final',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
        },
        {
            tag: '4',
            title: 'Optimización y Lanzamiento',
            span: 'Revisión, retoques finales y “a la calle”',
            content: 'Te haré un montón de preguntas sobre tu negocio y uniremos puntos claves para descubir que ideas tendrán el mayor impacto. Dependiendo del tamaño de tu proyecto haré una investigación, mas o menos profunda, de factores externos que aporten nuevas ideas o den solidez a la que ya tenemos. De todo esto obtendremos un plan para sacarle el maximo al proyecto. Si hay algo que no puedo hacer sere honesto y te lo dire. Tambien suelen salir ideas no relacionadas con la web...',
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
            cardProject={true}
            cardImage={['./images/TEST-web-bl.png', 'Reddit Clone Project Cover']}
            cardTag={[true, 'yellow', 'latest website']}
            cardInfo={['Biting Lemons', 'Revista Online | Webflow + CMS', '#']}
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
                    info='I design in divergent and convergent cycles. It always looks different for each project, but it usually falls into these steps:'
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
                    info='Theese are the standard, but you need further skills, let me know.'
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