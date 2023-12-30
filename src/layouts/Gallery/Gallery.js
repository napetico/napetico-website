import styles from './Gallery.module.css';
import CodeCard from '../../cards/CodeCard/CodeCard.js';
import WebCard from '../../cards/WebCard/WebCard.js';
import ContentCard from '../../cards/ContentCard/ContentCard.js';

const Gallery = ({card, data}) => {
    if (card === 'code') {
        return (
            <>
            <div className={styles.galleryGrid}>
                {data.map((project, index) => {
                    return <CodeCard data={project.projectCardData} key={index}/>;
                })}
            </div>
            </>
        )
    }
    if (card === 'web') {
        return (
            <>
            <div className={styles.galleryGrid}>
                {data.map((project, index) => {
                    return <WebCard data={project} key={index}/>;
                })}
            </div>
            </>
        )
    }
    if (card === 'book') {
        return (
            <>
            <div className={styles.bookGalleryGrid}>
                {data.map((book, index) => {
                    return <ContentCard card={card} data={book.bookCardData} key={index}/>;
                })}
            </div>
            </>
        )
    }
    if (card === 'content') {
        return (
            <>
            <div className={styles.bookGalleryGrid}>
                {data.map((content, index) => {
                    return <ContentCard card={card} data={content.contentCardData} key={index}/>;
                })}
            </div>
            </>
        )
    }
    if (card === 'course') {
        return (
            <>
            <div className={styles.bookGalleryGrid}>
                {data.map((course, index) => {
                    return <ContentCard card={card} data={course.courseCardData} key={index}/>;
                })}
            </div>
            </>
        )
    }
}

export default Gallery;