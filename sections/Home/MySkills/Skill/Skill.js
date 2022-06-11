import React from 'react';
import styles from './Skill.module.scss';
import Image from 'next/image';

const Skill = ({src, title}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skill__image}>
                <Image src={src} 
                height="512" 
                width="512" 
                alt="" />
            </div>
            <div className={styles.skill__title}>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Skill;