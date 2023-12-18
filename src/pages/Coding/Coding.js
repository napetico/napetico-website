import styles from './Coding.module.css';
import { Link } from 'react-router-dom';
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
            header='Programador Full-Stack'
            loopText={['HTML, CSS y JavaScript', 'React & Redux', 'Node.js, SQL y Databases', 'UX & Creative Design']}
            description='Un vistazo rápido de mi camino como programador, de las cosas que voy aprendiendo, y de los proyectos que voy haciendo.'
            linkData={['Proyectos', 'Repositorios', '/full-stack-portfolio']}
            cardProject={true}
            cardImage={['https://assets.materialup.com/uploads/56d36b87-856d-4154-abcd-284aa019afb1/preview.jpg', 'Reddit Clone Project Cover']}
            cardTag={[true, 'yellow', 'último proyecto']}
            cardInfo={['Clon de Reddit', 'Proyecto con React y Redux', '#']}
        />
        <BigPhrase text='Todos los proyectos ganan mucho con un poco de código bien pensado e implementado. Las soluciones son infinitas, escalan super bien, y aportan mucho valor. Si tus ideas apuntan al mundo digital y necesitas una cabeza ó un par de manos extra para programar, dame un toque, yo puedo ayudarte.'/>
        <section className={styles.projectsGallery}>
            <SectionIntro
                tag='Selección de repositorios'
                header='<Proyectos/>'
                info='Casi todos de práctica, pero bien currados.'
                align='center'
            />
            <Gallery data={lastSixProjects}/>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Mira más proyectos</p>
                    <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Ir al Portafolio' link='/full-stack-portfolio' />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.curriculumSection}>
            <div className={styles.infoWrapper}>
                <SectionIntro 
                    tag='Algunas cifras'
                    header='Mi experiencia en trocitos de data.'
                    info='Algunos detalles relevantes de mi carrera como programador.'
                    align='right'
                />
                <div>
                    <p className='bold-tag'>n.estadísticas</p>
                    <div className={styles.tableHolder}>
                        <table className={styles.statsTable}>
                            <tbody>
                                <tr>
                                    <th>experiencia</th>
                                    <th>idiomas</th>
                                    <th>crisis existenciales</th>
                                    <th>modalidad</th>
                                </tr>
                                <tr>
                                    <td>2 años y contando</td>
                                    <td>Español, Ingles</td>
                                    <td>16, por ahora</td>
                                    <td>Remoto, Presencial</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.skillsWrapper}>
                <SectionIntro
                    tag='Lo que puedo aportar'
                    header='Mis habilidades de programación.'
                    info='Lenguajes y frameworks que domino. ¿Alguna recomendación?'
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
        <BigTextLoop text='' />
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Hablemos de programación.'
            text='Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si estas escribiendo código y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default Coding;