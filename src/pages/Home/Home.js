import styles from './Home.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ProjectCard from '../../cards/ProjectCard/ProjectCard.js';
import DirectoryCard from '../../cards/DirectoryCard/DirectoryCard.js';

const Home = () => {
    return(
        <>
        <OptionsBar/>
        <Hero 
            header='Napoleón Bazán'
            loopText={['Director de Proyectos', 'Programador Full Stack', 'Diseñador Web', 'Estratega Creativo & COO']}
            description='Explorando mi pasión por ayudar a idear y construir negocios y equipos de alto rendimiento a través del dinamismo creativo, la excelencia operacional y el poder de una visión antifrágil.'
            linkData={['Perfil', 'Sobre mí', '#']}
            cardProject={false}
            cardImage={['./images/napo-main-photo-provisional.jpg', 'Napoleon Bazan profile picture']}
            cardTag={[true, 'color', 'text']}
            cardInfo={['title', 'info', 'href']}
        />
        {/* WORK */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='Un mini-curriculum'
                    header='Sigue mis trabajos y últimos proyectos.'
                    info='Las tres cosas que más disfruto hacer y en las que puedo ayudarte.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.experiencia</p>
                        <DirectoryCard 
                            image={['./images/napo-pm-directory-image.jpg', '']}
                            href='#'
                            featTag={[true, 'black', 'mi especialidad']}
                            info='Desde el 2007 - Operaciones, Creatividad y Estrategia'
                            title='Director de Proyectos | COO'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f8/69/10/f869109f41754f72d38bcb85f0f47a17.jpg', '']}
                            href='/full-stack-developer'
                            featTag={[false, '', '']}
                            info='Desde el 2023 - Software Engineer'
                            title='Programador Full Stack'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f7/04/c4/f704c4a5def121feb30ec1ef159dc31c.jpg', '']}
                            href='/web-designer'
                            featTag={[false, '', '']}
                            info='Desde el 2018 - Desarrollador y Webflow Expert'
                            title='Diseño y Optimización Web'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.últimos proyectos</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/TEST-project-image.jpeg', '']}
                                    href='#'
                                    info='Dirección para'
                                    title='Definiendo la estrategia ideal para un proyecto audiovisual'
                                    client={[true, 'Biting Lemons', 'http://www.bitinglemons.com/']}
                                    clientImage={['./images/TEST-bl-client-image.png', '']}
                                    featTag={[true, 'yellow', 'en proceso']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/TEST-flipcards-react-redux.jpg', 'Pantallazo del diseño de una aplicación clon de Reddit']}
                                    href='#'
                                    info='Código para Mi Portafolio'
                                    title='Proyecto: Tarjetas de Estudio con React y Redux'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Mira más proyectos</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Dirección' link='' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Programación' link='/full-stack-portfolio' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Webs' link='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* LEARN */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='Aprendizaje constante'
                    header='Cosas muy útiles que voy aprendiendo.'
                    info='Una colección de libros y videos con los que suelo llenar mi cabeza.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.aprendizajes</p>
                        <DirectoryCard 
                            image={['./images/napo-books-directory-image(2).png', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='Un saludable popurri de ficción y no-ficción'
                            title='Libros y otros contenidos'
                        />
                        <DirectoryCard 
                            image={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOMuuG13xR2Jnc4MqxT_7LUeO4wPZKi8u0xQkT9JqUcs3CefyKLuKxN80NL4S60GnaQY&usqp=CAU', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='Un mix de intereses alrededor de mi trabajo'
                            title='Cursos y Seminarios'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/72/a7/ed/72a7ed84b5ece119560af64b14a94a31.jpg', 'Certifications']}
                            href='#'
                            featTag={[false, '', '']}
                            info='Un registro de títulos y diplomas, por si acaso...'
                            title='Certificaciones'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.aprendiendo ahora</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['https://cdn.wallapop.com/images/10420/fi/vg/__/c10420p938693264/i3498517058.jpg?pictureSize=W640', 'The Lean Product Playbook']}
                                    href='#'
                                    info='Dan Olsen'
                                    title='The Lean Product Playbook'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[true, 'yellow', 'leyendo ahora']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLNFRhmPXVXdFgZCPIHI_caiNbIFIA3IeEw&usqp=CAU', 'The Lean Startup']}
                                    href='#'
                                    info='Eric Ries'
                                    title='The Lean Startup'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/napo-google-pm-certificate.png', 'Pantallazo del diseño de una aplicación clon de Reddit']}
                                    href='#'
                                    info='Coursera + Google'
                                    title='Google Project Management'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[true, 'black', 'cursando ahora']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Explora más</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Libros' link='' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Cursos' link='' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Certificados' link='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* HOBBIES */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='En mis ratos libres'
                    header='Proyectos laterales que me divierten.'
                    info='Un popurri de ideas, sueños, hobbies y puntos de vista.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.proyectos laterales</p>
                        <DirectoryCard 
                            image={['https://i.pinimg.com/1200x/41/b5/5c/41b55cd126a1e001087df43f28b6943f.jpg', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='Modelos y conceptos que valen 1 millon'
                            title='Un bunker de ideas de negocios'
                        />
                        <DirectoryCard 
                            image={['./images/dibujo-buho.jpg', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='La huperbole de los dibujitos'
                            title='Hiperrealismo con lápices de colores'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/9d/e5/58/9de558cb5abb551c381b0906db7b964f.jpg', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='Un blog, o al menos el intento de uno'
                            title='Bitácora de Napoleón'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.últimos proyectos</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['https://scontent.falc2-1.fna.fbcdn.net/v/t31.18172-8/22496202_741114852751608_5414144444795781619_o.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=c2f564&_nc_ohc=ATO0y4j4ZtsAX9jBc1l&_nc_ht=scontent.falc2-1.fna&oh=00_AfC6NMDf7WMyA14VSlzP6q-vHF1vo0FdjtVZ3QB-8tiN3w&oe=65A3ACD0', '']}
                                    href='#'
                                    info='Hiperrealismo en colores'
                                    title='Extinguidor con nudo: Escultura de Alex Chinnek'
                                    client={[false, '', '']}
                                    clientImage={['./images/TEST-bl-client-image.png', '']}
                                    featTag={[true, 'black', 'en proceso']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/TEST-flipcards-react-redux.jpg', 'Pantallazo del diseño de una aplicación clon de Reddit']}
                                    href='#'
                                    info='Código para Mi Portafolio'
                                    title='Proyecto: Tarjetas de Estudio con React y Redux'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Mira más a fondo</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Ideas' link='' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Ilustraciones' link='' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Artículos' link='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Encantado de hablar contigo.'
            text='Sin presiones. Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si tienes un proyecto y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default Home;