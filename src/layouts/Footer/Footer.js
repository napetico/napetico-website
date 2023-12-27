import styles from './Footer.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js'
import NavLink from '../../util/NavLink/NavLink.js';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.pagesNavBox}>
                    <Link className={styles.logoLinkBlock} to='/'>
                        <img className='nav-logo' src='./images/napo-logo.svg' alt='napo logo'/>
                    </Link>
                    <div className={styles.footLinksHolder}>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Experiencia</h3>
                            <NavLink text={'Project Manager'} link={'/under-constructions'} />
                            <NavLink text='Programador Full Stack' link='/full-stack-developer' />
                            <NavLink text='Webs para Pymes' link='/web-designer' />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Destrezas</h3>
                            <NavLink text='Libros' link='/reading-list' />
                            <NavLink text='Cursos' link='/courses' />
                            <NavLink text='Certificaciones' link='/certifications' />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Hobbies</h3>
                            <NavLink text={'Bunker de Ideas'} link={'/under-construction'} />
                            <NavLink text={'Hiperrealismo'} link={'/under-construction'} />
                            <NavLink text={'Proto-Blog'} link={'/under-construction'} />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Navega</h3>
                            <NavLink text={'Sobre mí'} link={'/under-construction'} />
                            <div className={styles.navLinkHolder}>
                                <a className={styles.navLinkText} href='./napoleon-cv.pdf' target='_blank' rel='noopener noreferrer'>Descarga mi CV</a>
                                <div className={styles.navLinkUnderlineTrack}>
                                    <div className={styles.navLinkUnderline}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.cardLinkBox}>
                                <p className={styles.cardLinkText}>Consígueme</p>
                                <img className={styles.cardLinkImage} src='./images/napo-whatsapp-logo-black.png' alt='' />
                                <div>
                                    <LinkOnWhite text={'+34 673250200'} link={''} />
                                </div>
                            </div>
                            <div className={styles.cardLinkBox}>
                                <p className={styles.cardLinkText}>Escríbeme</p>
                                <img className={styles.cardLinkImage} src='./images/napo-email-logo-black.png' alt='' />
                                <div>
                                    <LinkOnWhite text={'napo@napetico.com'} link={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.conectNavBox}>
                    <div className={styles.conectLinkWrap}>
                        <p className={styles.footNote}>@napetico, 2023 - Earth</p>
                        <Link to='/'>Cookies</Link>
                        <Link to='/'>Privacy</Link>
                    </div>
                    <div className={styles.conectLinkWrap}>
                        <p className={styles.footNote}>Conecta:</p>
                        <a href='https://www.instagram.com/napetico/' target='_blank' rel="noopener noreferrer">Instagram</a>
                        <a href='https://www.linkedin.com/in/napoleon-bazan/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                        <a href='https://github.com/napetico' target='_blank' rel="noopener noreferrer">Github</a>
                        <a href='https://twitter.com/napoleon_bazan' target='_blank' rel="noopener noreferrer">Twitter</a>
                        <a href='https://discord.com/users/1114347606756294687' target='_blank' rel="noopener noreferrer">Discord</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;