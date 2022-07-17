import React, { useState } from 'react';
import styles from './myproject.module.scss';
import Head from 'next/head';
import axios from 'axios';
import ProjectBox from './ProjectBox/ProjectBox';
import { useRouter } from 'next/router'

const myProject = ({ projects }) => {

    const [active, setActive] = useState(false);
    const router = useRouter()

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
                <div className={styles.myProject__button}>
                    <button onClick={() => router.push("/my-projects?category=All")}>All</button>
                    <button onClick={() => router.push("/my-projects?category=Front-end")}>Front-end</button>
                    <button onClick={() => router.push("/my-projects?category=Full-stack")}>Full-stack</button>
                </div>
                <div className={styles.myProject__content}>
                    {
                        projects.map(project => <ProjectBox key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export const getServerSideProps = async (context) => {
    const category = context.query.category;
    const projects = await axios.get(`http://localhost:5000/projects?type=${category}`);
    return {
        props: {
            projects: projects.data,
        }
    }
}

export default myProject;