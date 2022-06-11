import React from 'react';
import styles from './MySkills.module.scss';
import Skill from './Skill/Skill';

const MySkills = () => {
    return (
        <div className={styles.MySkills}>
            <div className="inner__mySkills container">
                <div className={styles.myskills__title}>
                    <h2>My Skills</h2>
                    <p>Technologies that i am good at and work with</p>
                </div>
                <div className={styles.myskills__content}>
                    <Skill 
                    src="/assets/html.png" 
                    title="html" />
                    <Skill 
                    src="/assets/css.png" 
                    title="css" />
                    <Skill 
                    src="/assets/bootstrap.png" 
                    title="Bootstrap" />
                    <Skill 
                    src="/assets/js.png" 
                    title="Javascript" />
                    <Skill 
                    src="/assets/react.png" 
                    title="React.js" />
                    <Skill 
                    src="/assets/firebase.png" 
                    title="Firebase" />
                    <Skill 
                    src="/assets/node.png" 
                    title="Node.js" />
                    <Skill 
                    src="/assets/mongo.png" 
                    title="MongoDB" />
                    <Skill 
                    src="/assets/next.png" 
                    title="Next.js" />
                </div>
            </div>
        </div>
    );
};

export default MySkills;