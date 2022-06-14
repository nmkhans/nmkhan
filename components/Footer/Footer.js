import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className={styles.Footer}>
            <div className="inner__footer container">
                <div className={styles.footer__content}>
                    <p>&copy; {year}. All right reserved by Moin Khan</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;