import React, { useState } from 'react';
import styles from './PreFoot.module.css';

import Link from '../../util/Link/Link.js';

const Footer = () => {
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.footerHolder}>
                <div className={styles.footerImageBox}>
                    <img className={styles.footerImage} src='' alt='' />
                </div>
                <div className={styles.footer}>
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