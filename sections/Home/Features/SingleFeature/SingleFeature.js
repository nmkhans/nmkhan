import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SingleFeature.module.scss';

const SingleFeature = ({ src, title, description, num }) => {

    return (
        <div className={styles.SingleFeature}>
            <div className={styles.singleFeature__content}>
                <div className={styles.singleFeature__img}>
                    <Image src={src} width="626" height="417" alt="single feature" />
                </div>
                <div className={styles.singleFeature__title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.singleFeature__decription}>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.singleFeature__line}>
                <div className={styles.line__box}>
                    <span>{num}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleFeature;