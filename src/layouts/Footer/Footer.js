import styles from './Footer.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js'
import NavLink from '../../util/NavLink/NavLink.js';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop.js';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.pagesNavBox}>
                    <Link className={styles.logoLinkBlock} to='/' onClick={scrollToTop}>
                        <img className='nav-logo' src='/images/icons/napo-logo.svg' alt='napo logo'/>
                    </Link>
                    <div className={styles.footLinksHolder}>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Experience</h3>
                            <NavLink text='Project Manager - COO' link='/project-manager' />
                            <NavLink text='Full Stack Developer' link='/full-stack-developer' />
                            <div className={styles.navLinkHolder}>
                                <a className={styles.navLinkText} href='https://supervillanos.webflow.io/' target='_blank' rel='noopener noreferrer'>Powerful Brands</a>
                                <div className={styles.navLinkUnderlineTrack}>
                                    <div className={styles.navLinkUnderline}></div>
                                </div>
                            </div>
                            <NavLink text='Webs for SMBs' link='/web-designer' />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Skills</h3>
                            <NavLink text='Books' link='/reading-list' />
                            <NavLink text='Courses' link='/courses' />
                            <NavLink text='Certifications' link='/certifications' />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Hobbies</h3>
                            <NavLink text={'$1M Ideas'} link={'/under-construction'} />
                            <NavLink text={'Hyperrealism'} link={'/under-construction'} />
                            <NavLink text={"Napoleon's Log"} link={'/under-construction'} />
                        </div>
                        <div className={styles.footLinkWrap}>
                            <h3 className={styles.footLinkCategory}>Navigate</h3>
                            <NavLink text={'About me'} link={'/under-construction'} />
                            <div className={styles.navLinkHolder}>
                                <a className={styles.navLinkText} href='./napoleon-cv.pdf' target='_blank' rel='noopener noreferrer'>Download my CV</a>
                                <div className={styles.navLinkUnderlineTrack}>
                                    <div className={styles.navLinkUnderline}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.cardLinkBox}>
                                <p className={styles.cardLinkText}>Find me here</p>
                                <img className={styles.cardLinkImage} src='/images/icons/napo-whatsapp-logo-black.png' alt='' />
                                <div>
                                    <LinkOnWhite text={'+34 673250200'} link={'tel:+34673250200'} />
                                </div>
                            </div>
                            <div className={styles.cardLinkBox}>
                                <p className={styles.cardLinkText}>Email me at</p>
                                <img className={styles.cardLinkImage} src='/images/icons/napo-email-logo-black.png' alt='' />
                                <div>
                                    <LinkOnWhite text={'napo@napetico.com'} link={'mailto:enabaro@gmail.com'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.conectNavBox}>
                    <div className={styles.conectLinkWrap}>
                        <p className={styles.footNote}>@napetico, 2023 - Earth</p>
                        <Link to='/under-construction'>Cookies</Link>
                        <Link to='/under-construction'>Privacy</Link>
                    </div>
                    <div className={styles.conectLinkWrap}>
                        <p className={styles.footNote}>Connect:</p>
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