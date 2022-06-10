import React from 'react';
import styles from './Features.module.scss';
import SingleFeature from './SingleFeature/SingleFeature';

const Features = () => {
    return (
        <section className={styles.Features}>
            <div className="inner__features container">
                <div className={styles.features__content}>
                    <SingleFeature 
                    src="/assets/maintainance.jpg" 
                    title="Full website creation" 
                    description="Create any type of website for your business." />
                    <SingleFeature 
                    src="/assets/onlineshop.jpg" 
                    title="Eye catching design" 
                    description="Develop a full functional online ecommerce shop" />
                    <SingleFeature 
                    src="/assets/bugfixing.jpg" 
                    title="Solve problem and fix bug" 
                    description="Fix complex problems &#38; bugs for your website." />
                </div>
            </div>
        </section>
    );
};

export default Features;