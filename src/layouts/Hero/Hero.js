import styles from './Hero.module.css';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import HeroCard from '../../cards/HeroCard/HeroCard.js';

const Hero = ({header, loopText, description, linkData, heroCard, newTab, database, cardImage}) => {
    return(
        <>
        <section className={styles.heroContainer}>
            <div className={styles.heroHolder}>
                <div className={styles.heroTextBox}>
                    <h1 className={styles.heroHeader}>{header}</h1>
                    <div className='text-loop-track'>
                        <div className='text-loop-holder'>
                            <h2 className='hero-loop-header-bold'>{loopText[0]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {loopText[1]} -&nbsp;</h2>
                            <h2 className='hero-loop-header-bold'>{loopText[2]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {loopText[3]} -&nbsp;</h2>
                        </div >
                        <div className='text-loop-holder'>
                            <h2 className='hero-loop-header-bold'>{loopText[0]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {loopText[1]} -&nbsp;</h2>
                            <h2 className='hero-loop-header-bold'>{loopText[2]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {loopText[3]} -&nbsp;</h2>
                        </div>
                    </div>
                    <p className={styles.heroText}>{description}</p>
                    <div className='link-group-holder-hero'>
                        <p className='link-group-tag'>{linkData[0]}</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt='' />
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text={linkData[1]} link={linkData[2]} />
                        </div>
                    </div>
                </div>
                { heroCard ? 
                    <HeroCard newTab={newTab} data={database}/>
                    : 
                    <div className={styles.heroImageBox}>
                        <img className={styles.heroImage} src={cardImage[0]} alt={cardImage[1]}/>
                    </div>
                }
            </div>
        </section>
        </>
    )
}

export default Hero;