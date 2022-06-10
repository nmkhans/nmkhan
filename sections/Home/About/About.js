import React from 'react';
import styles from './About.module.scss';
import AboutBox from './AboutBox/AboutBox';

const About = () => {
    return (
        <div className={styles.About}>
            <div className="inner__about container">
                <div className={styles.about__content}>
                    <div className={styles.about__detail}>
                        <div className={styles.about__detail__title}>
                            <h2>Hello There! You&apos;re <br />
                                Welcome -</h2>
                            <h3>
                                Frontend Web Developer | Mern Stack Web Developer
                            </h3>
                            <p>
                                I’m Nur Moin Khan, very passionate at web development. I’ve been working as web developer for more than 2 year. Creating professional website is my work. My goal is to satisfy my clients. I analysis client’s requirement deeply and try to understand what they want for their website. I help them from the beginning to the end of the process and give them support for every steps. If needed I come to video or audio conference with client to understand the problems and project requirements. After completing website and projects I give instructions about how they can manage, edit and post on their website by themselves. If needed provide video or PDF doc’s to them.
                            </p>
                        </div>
                    </div>
                    <div className={styles.about__boxes}>
                        <AboutBox 
                        src="/assets/bulb.png" 
                        title="Quality" 
                        description="Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project" />
                        <AboutBox 
                        src="/assets/intrigity.png" 
                        title="Integrity" 
                        description="Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project" />
                        <AboutBox 
                        src="/assets/support.png" 
                        title="Support" 
                        description="Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project" />
                        <AboutBox 
                        src="/assets/security.png" 
                        title="Security & Safety" 
                        description="Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;