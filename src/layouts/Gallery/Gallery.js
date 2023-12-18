import styles from './Gallery.module.css'
import CodeCard from '../../cards/CodeCard/CodeCard.js'

const Gallery = ({data}) => {
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

export default Gallery;