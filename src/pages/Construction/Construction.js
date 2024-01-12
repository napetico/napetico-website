import styles from './Construction.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';

const Construction = () => {
    return(
        <>
        <section className={styles.underConstructionSection}>
            <img className={styles.constructionImage} src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2IxeTIyOHNzYmdsYmZoeHg1ZGUweGhpNDhiaDdrd2Zkam9wNmtlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LWJ7cKyiWPCnVyuAhT/giphy.gif' tag='Funny cat typing on a small computer'/>
            <h1 className={styles.constructionTitle}>Oh, s**t... busted!</h1>
            <p className={styles.constructionText}>I haven't finish this page yet, but it'll be ready in short time. Swing by later and see the cool stuff I have planned for this section.</p>
            <div className='link-group-holder'>
                        <p className='link-group-tag'>Go back to</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text={'Home Page'} link={'/'} />
                        </div>
                    </div>
        </section>
        </>
    )
}

export default Construction;