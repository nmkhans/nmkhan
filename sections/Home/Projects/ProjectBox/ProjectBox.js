import React from 'react';
import styles from './ProjectBox.module.scss';
import Image from 'next/image';

const ProjectBox = ({ project }) => {
    const featureImg = project.img[0]
    console.log(project)
    return (
        <div className={styles.ProjectBox}>
            <div className={styles.project__img}>
                <Image src={featureImg} height="640" width="1350" />
                <div className={styles.project__detail}>
                    <h4>project title</h4>
                    <div className={styles.project__btn}>
                        <button>See detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;