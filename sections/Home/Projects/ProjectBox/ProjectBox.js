import React from 'react';
import styles from './ProjectBox.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProjectBox = ({ project }) => {
    const featureImg = project.img[0];
    const router = useRouter();

    return (
        <div className={styles.ProjectBox}>
            <div className={styles.project__img}>
                <Image src={featureImg} height="640" width="1350" />
                <div className={styles.project__detail}>
                    <h4>project title</h4>
                    <div className={styles.project__btn}>
                        <button onClick={() => router.push(`/projectdetail/${project._id}`)}>See detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;