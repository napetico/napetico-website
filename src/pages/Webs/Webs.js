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
            header='Páginas web para Pymes'
            loopText={['Con y sin código', 'Responsive y dinámicas', 'Estrategia impecable y SEO básico', 'Gestor de contenidos y CMS']}
            description='Una web ideal. Sin complejidades, ni bancarrotas.'
            linkData={['Proyectos', 'Portafolio Web', '/web-design-portfolio']}
            cardProject={true}
            cardImage={['./images/TEST-web-bl.png', 'Reddit Clone Project Cover']}
            cardTag={[true, 'yellow', 'web más reciente']}
            cardInfo={['Biting Lemons', 'Revista Online | Webflow + CMS', '#']}
        />
        <BigPhrase text='Te haré una web guapa y productiva, en sintonía perfecta con tu modelo de negocio y coherente con tu contexto y tus objetivos, para que tu marca gane en posicionamiento y tus ideas generen el buen rendimiento que tanto buscas.'/>
        <section className={styles.projectsGallery}>
            <SectionIntro
                tag='Proyectos destacados'
                header='Portafolio'
                info='Da un vistazo a mis webs. Si te gusta algo dame un toque.
                '
                align='center'
            />
            <Gallery card='web' data={lastSixProjects}/>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Mira más webs</p>
                    <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Ir al Portafolio' link='/web-design-portfolio' />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.curriculumSection}>
            <div className={styles.processWrapper}>
                <SectionIntro 
                    tag='Como ira el tema'
                    header='Un proceso simple para hacerlo bien.'
                    info='Diseño en ciclos divergentes y convergentes. Lo normal. No siempre son iguales, pero más o menos lucen así.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.proceso creativo</p>
                    <Accordion data={accordionData}/>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <SectionIntro 
                    tag='Algunas cifras'
                    header='Hazte una idea con números promedios.'
                    info='Un buen punto de partida, pero según tu proyecto, lo hablamos.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.estadísticas</p>
                    <div className={styles.tableHolder}>
                        <table className={styles.statsTable}>
                            <tbody>
                                <tr>
                                    <th>tiempo</th>
                                    <th>inversión</th>
                                    <th>idiomas</th>
                                    <th>proyectos a la vez</th>
                                </tr>
                                <tr>
                                    <td>2 - 8 sem.</td>
                                    <td>€1.000 - €7.000</td>
                                    <td>Español, Ingles</td>
                                    <td>Solo uno (el tuyo)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.skillsWrapper}>
                <SectionIntro
                    tag='Lo que puedo aportar'
                    header='Habilidades que traeré a la mesa.'
                    info='Las de siempre, supongo. Si algo te falta, pregúntame.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.tecnologías y herramientas</p>
                    <div className={styles.toolsWrapper}>
                        {toolsList.map((item, index) => {
                            return <ToolLabel text={item} key={index}/>
                        })}
                    </div>
                </div>
                <div>
                    <p className='bold-tag'>n.certificados y cursos</p>
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
                    <p className='link-group-tag'>Mira más de mis</p>
                    <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Certificados' link='' />
                        <p className='link-group-inner-text'>&nbsp;ó&nbsp;</p>
                        <LinkOnWhite text='Cursos' link='' />
                    </div>
                </div>
            </div>
        </section>
        <BigTextLoop text='La web ideal para que tus ideas lleguen fuerte, claro y lejos&nbsp;&nbsp;-&nbsp;&nbsp;' />
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Háblame de tu gran web.'
            text='¿Inspirado? ¿Interesado? ¿Con dudas? Charlemos! Con un cafecito dejaremos todo claro para que puedas tomar una decision informada. Y, hagas la web o no, seguro que te vas con algunas buenas ideas. Abajo te dejo los datos.'
        />
        </>
    )
}

export default Webs;