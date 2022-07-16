import React from 'react';
import styles from './myproject.module.scss';
import Head from 'next/head';
import axios from 'axios';
import ProjectBox from './ProjectBox/ProjectBox';

const myProject = ({ projects }) => {

    return (
        <section className={styles.myProject}>
            <Head>
                <title>My Projects | Moin Khan</title>
                <meta name="description" content="Project Detail" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="inner__myProject container">
                <div className={styles.myProject__title}>
                    <h2>My Projects</h2>
                </div>
                <div className={styles.myProject__content}>
                    {
                        projects.map(project => <ProjectBox project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export const getServerSideProps = async () => {
    const projects = await axios.get('http://localhost:5000/projects');
    return {
        props: {
            projects: projects.data,
        }
    }
}

export default myProject;