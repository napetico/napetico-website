import styles from './Hero.module.css';
import Link from '../../util/Link/Link.js';

const Hero = (props) => {
    return(
        <>
        <section className={styles.heroContainer}>
            <div className={styles.heroHolder}>
                <div className={styles.heroTextBox}>
                    <h1 className={styles.heroHeader}>{props.header}</h1>
                    <div className='text-loop-track'>
                        <div className='text-loop-holder'>
                            <h2 className='hero-loop-header-bold'>{props.loopText[0]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {props.loopText[1]} -&nbsp;</h2>
                            <h2 className='hero-loop-header-bold'>{props.loopText[2]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {props.loopText[3]} -&nbsp;</h2>
                        </div >
                        <div className='text-loop-holder'>
                            <h2 className='hero-loop-header-bold'>{props.loopText[0]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {props.loopText[1]} -&nbsp;</h2>
                            <h2 className='hero-loop-header-bold'>{props.loopText[2]}</h2>
                            <h2 className='hero-loop-header-light'>&nbsp;- {props.loopText[3]} -&nbsp;</h2>
                        </div>
                    </div>
                    <p className={styles.heroText}>{props.description}</p>
                    <div className='link-group-holder-hero'>
                        <p className='link-group-tag'>Perfil</p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt='' />
                        <div className='link-group-wrapper'>
                            <Link text={'Sobre mí'} link={''} />
                        </div>
                    </div>
                </div>
                { props.card ? 
                    <p>Here goes a Card</p>
                    : 
                    <div className={styles.heroImageBox}>
                        <img className={styles.heroImage} src={props.data[0]} alt={props.data[1]}/>
                    </div>
                }
            </div>
        </section>
        </>
    )
}

export default Hero;