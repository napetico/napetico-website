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
                            <NavLink text={'Project Manager'} link={''} />
                            <NavLink text='Programador Full Stack' link='/full-stack-developer' />
                            <NavLink text='Webs para Pymes' link='/web-designer' />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Destrezas</h3>
                            <NavLink text={'Libros'} link={''} />
                            <NavLink text={'Cursos'} link={''} />
                            <NavLink text={'Certificaciones'} link={''} />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Hobbies</h3>
                            <NavLink text={'Bunker de Ideas'} link={''} />
                            <NavLink text={'Hiperrealismo'} link={''} />
                            <NavLink text={'Proto-Blog'} link={''} />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Navega</h3>
                            <NavLink text={'Sobre mí'} link={''} />
                            <NavLink text={'Descarga mi CV'} link={''} />
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
                        <a href='https://github.com/napetico' target='_blank'>Cookies</a>
                        <a href='https://github.com/napetico' target='_blank'>Privacy</a>
                    </div>
                    <div className={styles.conectLinkWrap}>
                        <p className={styles.footNote}>Conecta:</p>
                        <a href='https://github.com/napetico' target='_blank'>Instagram</a>
                        <a href='https://github.com/napetico' target='_blank'>LinkedIn</a>
                        <a href='https://github.com/napetico' target='_blank'>Github</a>
                        <a href='https://github.com/napetico' target='_blank'>Twitter</a>
                        <a href='https://github.com/napetico' target='_blank'>Discord</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;