import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = (e) => {
        setOpen(!open);
    }

    const scrollAndClose = () => {
        setOpen(!open);
        scrollToTop();
    }
    
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.navLogoBox}>
                    <Link className={styles.logoLinkBlock} to='/' onClick={scrollToTop}>
                        <img className='nav-logo' src='/images/icons/napo-logo.svg' alt='napo logo'/>
                    </Link>
                    <Link className={styles.navBreadcrumLink} to='/' onClick={scrollToTop}>@napetico</Link>
                </div>
                <div className={styles.navMenuBox}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink}>n.work</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/project-manager' onClick={scrollToTop}>Project Manager - COO</Link>
                                <Link className={styles.dropdownLink} to='/full-stack-developer' onClick={scrollToTop}>Full Stack Developer</Link>
                                <Link className={styles.dropdownLink} to='/web-designer' onClick={scrollToTop}>Webs for SMBs</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink}>n.learn</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/reading-list' onClick={scrollToTop}>Books & more</Link>
                                <Link className={styles.dropdownLink} to='/courses' onClick={scrollToTop}>Courses</Link>
                                <Link className={styles.dropdownLink} to='/certifications' onClick={scrollToTop}>Certifications</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink}>n.create</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/under-construction' onClick={scrollToTop}>$1M Ideas</Link>
                                <Link className={styles.dropdownLink} to='/under-construction' onClick={scrollToTop}>Hyperrealism</Link>
                                <Link className={styles.dropdownLink} to='/under-construction' onClick={scrollToTop}>Napoleon's Log</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLink} to='/under-construction' onClick={scrollToTop}>n.about me</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                        </li>
                        <Link className={styles.navButton} to='/under-construction' onClick={scrollToTop}>Contact me</Link>
                    </ul>
                    <div className={styles.dropdownButton}>
                        <img className={`${styles.dropdownArrow} ${open ? styles.arrowTurn : ''}`} src='/images/icons/napo-arrow-menu.svg' alt='' onClick={toggleMenu}/>
                    </div>
                </div>
            </div>
        </nav>
        <nav className={`${styles.mobileMenuDropdown} ${open ? styles.showDropdown : ''}`}>
            <div className={`${styles.mobileMenuHolder} ${open ? styles.holderGrow : ''}`}>
                <div className={styles.mobileMenuCategory}>
                    <div className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.work</p>
                        <div className={styles.mobileCategoryLine}></div>
                    </div>
                    <ul className={styles.linksWrap}>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/project-manager' onClick={scrollAndClose}>Project Manager - COO</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/full-stack-developer' onClick={scrollAndClose}>Full Stack Developer</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/web-designer' onClick={scrollAndClose}>Webs for SMBs</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.mobileMenuCategory}>
                    <div className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.learn</p>
                        <div className={styles.mobileCategoryLine}></div>
                    </div>
                    <ul className={styles.linksWrap}>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/reading-list' onClick={scrollAndClose}>Books & more</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/courses' onClick={scrollAndClose}>Courses</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/certifications' onClick={scrollAndClose}>Certifications</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.mobileMenuCategory}>
                    <div className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.create</p>
                        <div className={styles.mobileCategoryLine}></div>
                    </div>
                    <ul className={styles.linksWrap}>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/under-construction' onClick={scrollAndClose}>$1M Ideas</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/under-construction' onClick={scrollAndClose}>Hyperrealism</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/under-construction' onClick={scrollAndClose}>Napoleon's Log</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.mobileMenuCategory}>
                    <div className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.profile</p>
                        <div className={styles.mobileCategoryLine}></div>
                    </div>
                    <ul className={styles.linksWrap}>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLinkMobileDropdown} to='/under-construction' onClick={scrollAndClose}>About</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderlineWhite}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.cardLinkBox}>
                        <p className={styles.cardLinkText}>Find me</p>
                        <img className={styles.cardLinkImage} src='/images/icons/napo-whatsapp-logo-black.png' alt='' />
                        <div>
                            <LinkOnWhite text={'+34 673250200'} link={'tel:+34673250200'} />
                        </div>
                    </div>
                    <div className={styles.cardLinkBox}>
                        <p className={styles.cardLinkText}>Email me</p>
                        <img className={styles.cardLinkImage} src='/images/icons/napo-email-logo-black.png' alt='' />
                        <div>
                            <LinkOnWhite text={'napo@napetico.com'} link={'mailto:enabaro@gmail.com'} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;