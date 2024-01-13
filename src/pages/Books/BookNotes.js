import styles from './BookNotes.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar.js';
import PreFoot from '../../layouts/PreFoot/PreFoot.js';
import { Link } from 'react-router-dom'

const BookNotes = ({data}) => {
    return(
        <>
        <OptionsBar />
        <section className={styles.notesSection}>
            <p className={styles.notesIntroTag}>Notes</p>
            <div className={styles.notesContentHolder}>
                <div className={styles.notesHeaderWrap}>
                    <div className={styles.notesTitleBox}>
                        <h1 className={styles.notesTitle}>{data.title}</h1>
                        <h2 className={styles.notesAuthor}>by {data.author}</h2>
                    </div>
                    <div className={styles.optionsHolder}>
                        <div className={styles.linkWrap}>
                            <img className={styles.blackArrowLeft} src='/images/icons/napo-link-arrow-black.svg' alt=''/>
                            <div className={styles.linkHolder}>
                                <Link className={styles.linkText} to='/reading-list#books'>Back to Library</Link>
                                <div className={styles.linkUnderlineTrack}>
                                    <div className={styles.linkUnderline}></div>
                                </div>
                            </div>
                        </div>
                        <p className={styles.affiliateText}>Wanna get this book? Go ahead. I recommend it :)</p>
                    </div>
                </div>
                <side className={styles.notesTextWrap}>
                    <p className={styles.notesP}>{data.sinopsis}</p>
                    <p className={styles.notesP}>{data.interest}</p>
                    <p className={styles.notesP}>{data.takeAways}</p>
                </side>
            </div>
            <div className={styles.centeredLinkHolder}>
                <div className={styles.linkWrap}>
                    <img className={styles.blackArrowLeft} src='/images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className={styles.linkHolder}>
                        <Link className={styles.linkText} to='/reading-list#books'>Back to Library</Link>
                        <div className={styles.linkUnderlineTrack}>
                            <div className={styles.linkUnderline}></div>
                        </div>
                    </div>
                </div>
                <p className={styles.affiliateText}>Wanna get this book? Go ahead. I recommend it :)</p>
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

export default BookNotes;