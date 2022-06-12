import React from 'react';
import styles from './ProjectBox.module.scss';
import Image from 'next/image';

const ProjectBox = ({ project }) => {
    const img = project.img[0]
    console.log(img)
    return (
        <div className={styles.ProjectBox}>
            <div className={styles.project__img}>
                <Image src={project.img[0]} height="640" width="1350" />
            </div>
        </div>
    );
};

export default ProjectBox;