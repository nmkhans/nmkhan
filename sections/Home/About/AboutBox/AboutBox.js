import React from 'react';
import styles from './AboutBox.module.scss';
import Image from 'next/image';

const AboutBox = ({src, title, description}) => {
    return (
        <div className={styles.AboutBox}>
            <div className={styles.AboutBox__content}>
                <div className={styles.AboutBox__content__img}>
                    <Image 
                    src={src} 
                    height="50" 
                    width="50" 
                    alt="" />
                </div>
                <div className={styles.AboutBox__content__title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.AboutBox__content__descrition}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;