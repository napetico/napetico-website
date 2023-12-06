import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from '../../util/Link/Link.js';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = (e) => {
        setOpen(!open);
    }
    
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.navLogoBox}>
                    <a className={styles.logoLinkBlock} href='#'>
                        <img className={styles.navLogo} src='./images/napo-logo.svg' alt='napo logo'/>
                    </a>
                    <a className={styles.navBreadcrumLink} href='#'>@napetico</a>
                </div>
                <div className={styles.navMenuBox}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navLinkHolder}>
                            <a className={styles.navLink} href='#'>n.trabajando</a>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <a className={styles.dropdownLink} href='#'>Director de Proyectos</a>
                                <a className={styles.dropdownLink} href='#'>Programador Full Stack</a>
                                <a className={styles.dropdownLink} href='#'>Diseñador Web</a>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <a className={styles.navLink} href='#'>n.aprendiendo</a>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <a className={styles.dropdownLink} href='#'>Libros y más</a>
                                <a className={styles.dropdownLink} href='#'>Cursos y Talleres</a>
                                <a className={styles.dropdownLink} href='#'>Certificaciones</a>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <a className={styles.navLink} href='#'>n.creando</a>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <a className={styles.dropdownLink} href='#'>Ideas de Negocios</a>
                                <a className={styles.dropdownLink} href='#'>Hiperealismo</a>
                                <a className={styles.dropdownLink} href='#'>Bitácora de Napoleón</a>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <a className={styles.navLink} href='#'>n.sobre mí</a>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                        </li>
                        <a className={styles.navButton} href=''>Dame un toque</a>
                    </ul>
                    <div className={styles.dropdownButton}>
                        <img className={`${styles.dropdownArrow} ${open ? styles.arrowTurn : ''}`} src='./images/napo-arrow-menu.svg' alt='' onClick={toggleMenu}/>
                    </div>
                </div>
            </div>
        </nav>
        <nav className={`${styles.mobileMenuDropdown} ${open ? styles.showDropdown : ''}`}>
            <div className={`${styles.mobileMenuHolder} ${open ? styles.holderGrow : ''}`}>
                <ul className={styles.mobileMenuCategory}>
                    <li className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.trabajando</p>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Director de Proyectos</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Programador Full Stack</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Diseñador Web</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.mobileMenuCategory}>
                    <li className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.aprendiendo</p>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Libros y más</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Cursos y Talleres</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Certificaciones</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.mobileMenuCategory}>
                    <li className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.creando</p>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Ideas de Negocios</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Hiperrealismo</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Bitácora de Napoleón</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.mobileMenuCategory}>
                    <li className={styles.categoryWrap}>
                        <p className={styles.categoryTitle}>n.perfil</p>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <a className={styles.navLinkMobileDropdown} href='#'>Sobre mí</a>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.mobileMenuButtonBox}>
                    <a className={styles.navButton} href=''>Dame un toque</a>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;