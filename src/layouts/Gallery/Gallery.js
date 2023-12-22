import styles from './Gallery.module.css';
import CodeCard from '../../cards/CodeCard/CodeCard.js';
import WebCard from '../../cards/WebCard/WebCard.js';

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
                    return <WebCard data={project.projectCardData} key={index}/>;
                })}
            </div>
            </>
        )
    }
}

export default Gallery;