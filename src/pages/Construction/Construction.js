import styles from './Construction.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';

const Construction = () => {
    return(
        <>
        <section className={styles.underConstructionSection}>
            <img className={styles.constructionImage} src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2IxeTIyOHNzYmdsYmZoeHg1ZGUweGhpNDhiaDdrd2Zkam9wNmtlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LWJ7cKyiWPCnVyuAhT/giphy.gif' tag=''/>
            <h1 className={styles.constructionTitle}>Jo... Me has pillao!</h1>
            <p className={styles.constructionText}>Esta página aun no la termino, pero estará lista en nada. Pásate en unos días y verás contenido muy interesante.</p>
            <div className='link-group-holder'>
                        <p className='link-group-tag'>Volver a</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text={'Página de Inicio'} link={'/'} />
                        </div>
                    </div>
        </section>
        </>
    )
}

export default Construction;