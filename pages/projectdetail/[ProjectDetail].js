import React from 'react';
import styles from './projectDetail.module.scss';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';

const singleProject = ({ project }) => {
    console.log(project)

    const techBtn = (tech, index) => {
        return (
            <span key={index}>{tech}</span>
        )
    }

    return (
        <section className={styles.projectDetail}>
            <Head>
                <title>Project Detail - {project.title}</title>
                <meta name="description" content="Project Detail" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="inner__projectdetail container">
                <div className={styles.detail__content}>
                    <div className={styles.detail__features}>
                        <div className={styles.detail__featureImage}>
                            <Image src={project.img[0]} height={640} width={1350} alt="Project Image" />
                        </div>
                        <div className={styles.detail__feature__content}>
                            <h3>Project Name: <span>{project.title}</span></h3>
                            <h4>Project Type: <span>{project.type}</span></h4>
                            <div className={styles.techBtn}>
                                <h4>Technology Used:</h4>
                                {
                                    project.technology.map((tech, index) => techBtn(tech, index))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.detail__description}>
                        
                    </div>
                    <div className={styles.detail__showcase}></div>
                </div>
            </div>
        </section>
    );
};

export const getServerSideProps = async (context) => {
    const id = context.params.projectDetail;
    const result = await axios.get(`http://localhost:5000/project/${id}`);
    const data = result.data;

    return {
        props: {
            project: data,
        }
    }
}
export default singleProject;