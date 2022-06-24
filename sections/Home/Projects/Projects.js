import React, { useContext } from 'react';
import styles from './Projects.module.scss';
import ProjectBox from './ProjectBox/ProjectBox';
import { HomeData } from '../../../pages';

const Projects = () => {
    const {projects} = useContext(HomeData);

    return (
        <section className={styles.Projects}>
            <div className="inner__project container">
                <div className={styles.project__title}>
                    <h2>My Projects</h2>
                    <p>I design, build and support websites for clients worldwide. I&apos;ll make your business stand out.</p>
                </div>
                <div className={styles.project__content}>
                    {
                        projects?.map(project => <ProjectBox key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};



export default Projects;