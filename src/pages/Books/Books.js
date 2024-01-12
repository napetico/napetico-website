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
                    tag='Content Library'
                    header='Books, Videos & Podcasts'
                    info="This is a list of the content (mostly books) that I have enjoyed the most in the last few years, in case you feel like jumping into any of them. I left some notes in there too, as insights and reflexions. If you're curious, open them."
                    align='center'
                />
            </div>
        </section>
        <section className={styles.galleryContainer} id='books'>
            <div className={styles.galleryIntro}>
                <p className={styles.sectionTag}>Reading List</p>
                <div className={styles.sectionHeaderBox}>
                    <h2 className={styles.sectionHeader}>Lastest Books.</h2>
                    <div className={styles.linkGroupHolder}>
                        <p className='link-group-tag'>Jump down to</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <div className={styles.linkHolder}>
                                <a className={styles.linkText} href='#content'>Videos & Podcasts</a>
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
                <p className={styles.sectionTag}>Other formats</p>
                <div className={styles.sectionHeaderBox}>
                    <h2 className={styles.sectionHeader}>Videos & Podcasts.</h2>
                    <div className={styles.linkGroupHolder}>
                        <p className='link-group-tag'>Jump up to </p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <div className={styles.linkHolder}>
                                <a className={styles.linkText} href='#books'>Latest Books</a>
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
                    <p className='link-group-tag'>Go back to</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Home Page' link='/' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Any book to recommend?'
            text="Or maybe an interesting video or podcast? Go ahead. Sharing wisdom is awesome, highly stimulating and -in some ways- also an act of kindness (a great book, at the right time, can change a life). So, be my guest. Share."
        />
        </>
    )
}

export default Books;