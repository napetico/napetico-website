import React, { useState } from 'react';
import styles from './PreFoot.module.css';

import Link from '../../util/Link/Link.js';

const Footer = () => {
    return(
        <>
        <footer className={styles.preFoot}>
            <div className={styles.preFooterHolder}>
                <div className={styles.preFooterImageBox}>
                    <img className={styles.preFooterImage} src='' alt='' />
                </div>
                <div className={styles.preFooter}>
                    <p></p>
                    <h3></h3>
                    <p></p>
                    <div>
                        <p></p>
                        <img src='' alt='' />
                        <div>
                            <Link text={'Email'} link={''} />
                            <p>, o por </p>
                            <Link text={'Telefono'} link={''} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;