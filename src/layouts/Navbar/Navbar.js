import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

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
                    <Link className={styles.logoLinkBlock} href='/'>
                        <img className='nav-logo' src='./images/napo-logo.svg' alt='napo logo'/>
                    </Link>
                    <Link className={styles.navBreadcrumLink} href='/'>@napetico</Link>
                </div>
                <div className={styles.navMenuBox}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink}>n.trabajando</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/under-construction'>Director de Proyectos</Link>
                                <Link className={styles.dropdownLink} to='/full-stack-developer'>Programador Full Stack</Link>
                                <Link className={styles.dropdownLink} to='/under-construction'>Diseñador Web</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink}>n.aprendiendo</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/under-construction'>Libros y más</Link>
                                <Link className={styles.dropdownLink} to='/under-construction'>Cursos y Talleres</Link>
                                <Link className={styles.dropdownLink} to='/under-construction'>Certificaciones</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <p className={styles.navLink} href='#'>n.creando</p>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                            <div className={styles.navLinkDropdown}>
                                <Link className={styles.dropdownLink} to='/under-construction'>Ideas de Negocios</Link>
                                <Link className={styles.dropdownLink} to='/under-construction'>Hiperealismo</Link>
                                <Link className={styles.dropdownLink} to='/under-construction'>Bitácora de Napoleón</Link>
                            </div>
                        </li>
                        <li className={styles.navLinkHolder}>
                            <Link className={styles.navLink} to='/under-construction'>n.sobre mí</Link>
                            <div className={styles.navLinkUnderlineTrack}>
                                <div className={styles.linkUnderline}></div>
                            </div>
                        </li>
                        <Link className={styles.navButton} to='/under-construction'>Dame un toque</Link>
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
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Director de Proyectos</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Programador Full Stack</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Diseñador Web</Link>
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
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Libros y más</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Cursos y Talleres</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Certificaciones</Link>
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
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Ideas de Negocios</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Hiperrealismo</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                    <li className={styles.navLinkHolder}>
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Bitácora de Napoleón</Link>
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
                        <Link className={styles.navLinkMobileDropdown} to='/under-construction'>Sobre mí</Link>
                        <div className={styles.navLinkUnderlineTrack}>
                            <div className={styles.linkUnderlineWhite}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.mobileMenuButtonBox}>
                    <Link className={styles.navButton} to='/under-construction'>Dame un toque</Link>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;