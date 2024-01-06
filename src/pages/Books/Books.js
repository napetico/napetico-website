import styles from './Books.module.css';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import Gallery from '../../layouts/Gallery/Gallery';
import BOOK_LIST from '../../data/BOOK_LIST';
import CONTENT_LIST from '../../data/CONTENT_LIST';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const Books = () => {

    const allBooks = BOOK_LIST.slice().reverse();
    const allContent = CONTENT_LIST.slice().reverse();

    return(
        <>
        <OptionsBar/>
        <section className={styles.mainIntro}>
            <div className={styles.mainIntroBox}>
                <SectionIntro
                    tag='Archivo de contenido'
                    header='Libros y más.'
                    info='Esta una lista de los libros -y algunos podcasts y canales- que más he disfrutado. Los dejo aquí por si te apetece engancharte con alguno. Ah, y casi todos tiene notas. Si te da curiosidad saber un poco más, ábrelos.'
                    align='center'
                />
            </div>
        </section>
        <section className={styles.galleryContainer} id='books'>
            <div className={styles.galleryIntro}>
                <p className={styles.sectionTag}>Un poco de lectura</p>
                <div className={styles.sectionHeaderBox}>
                    <h2 className={styles.sectionHeader}>Libros recientes.</h2>
                    <div className={styles.linkGroupHolder}>
                        <p className='link-group-tag'>Saltar a</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <div className={styles.linkHolder}>
                                <a className={styles.linkText} href='#content'>Vídeos y Podcasts</a>
                                <div className={styles.linkUnderlineTrack}>
                                    <div className={styles.linkUnderline}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.galleryHolder}>
                <Gallery card='book' data={allBooks}/>
            </div>
        </section>
        <section className={styles.galleryContainer} id='content'>
            <div className={styles.galleryIntro}>
                <p className={styles.sectionTag}>Otro formatos.</p>
                <div className={styles.sectionHeaderBox}>
                    <h2 className={styles.sectionHeader}>Vídeos y Podcasts.</h2>
                    <div className={styles.linkGroupHolder}>
                        <p className='link-group-tag'>Saltar a</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <div className={styles.linkHolder}>
                                <a className={styles.linkText} href='#books'>Libros recientes</a>
                                <div className={styles.linkUnderlineTrack}>
                                    <div className={styles.linkUnderline}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.galleryHolder}>
                <Gallery card='content' data={allContent}/>
            </div>
        </section>
        <section className={styles.backHomeSection}>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Volver a</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Página de Inicio' link='' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='¿Algún libro que recomendar?'
            text='Sin presiones. Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si tienes un proyecto y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default Books;