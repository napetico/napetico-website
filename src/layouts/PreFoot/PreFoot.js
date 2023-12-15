import React, { useState } from 'react';
import styles from './PreFoot.module.css';

import LinkOnBlack from '../../util/LinkOnBlack/LinkOnBlack.js';

const PreFoot = (props) => {
    return(
        <>
        <section className={styles.preFoot}>
            <div className={styles.preFootHolder}>
                <div className={styles.preFootImageBox}>
                    <img className={styles.preFootImage} src='https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg' alt='' />
                </div>
                <div className={styles.preFootTextBox}>
                    <p className={styles.preFootTag}>Dame un toque</p>
                    <h3 className={styles.preFootTitle}>Encantado de hablar contigo.</h3>
                    <p className={styles.preFootText}>Sin presiones. Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si tienes un proyecto y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.</p>
                    <div className='link-group-holder-hero'>
                        <p className='link-group-tag'>Contáctame por </p>
                        <img className='link-group-arrow' src='./images/napo-link-arrow-white.svg' alt='' />
                        <div className='link-group-wrapper'>
                            <LinkOnBlack text={'Email'} link={''} />
                            <p className='link-group-inner-text'>, o por&nbsp;</p>
                            <LinkOnBlack text={'Teléfono'} link={''} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PreFoot;