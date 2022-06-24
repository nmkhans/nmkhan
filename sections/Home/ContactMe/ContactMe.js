import React from 'react';
import styles from './Contact.module.scss';
import { useRouter } from 'next/router';

const ContactMe = () => {
    const router = useRouter();
    const handleNavigate = (event) => {
        event.preventDefault();
        router.push('/contact');
    }

    return (
        <div className={styles.ContactMe}>
            <div className="inner__contactMe container">
                <div className={styles.contactMe__content}>
                    <div className={styles.contactme__text}>
                        <h2>Get in touch with me.</h2>
                    </div>
                    <div className={styles.contactme__button}>
                        <button onClick={handleNavigate}>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;