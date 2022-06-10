import React from 'react';
import styles from './Hero.module.scss';
import Typed from 'react-typed';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <div className="inner__hero container">
                <div className={styles.hero__content}>
                    <div className={styles.hero__content__text}>
                        <h2>I Am</h2>
                        <Typed
                            className={styles.typed__text}
                            strings={['Moin Khan', 'Front-End Developer', 'Mern Stack Developer']}
                            typeSpeed={40}
                            backSpeed={40}
                            loop
                        />
                        <p>Nothing is impossible on the web, Let&apos;s execute your idea into the website and
                            start your business or startup today.</p>
                    </div>
                    <div className={styles.hero__button}>
                        <button>Let&apos;s get started</button>
                    </div>
                </div>
                <div className={styles.hero__image}>
                    <Image src="/assets/hero.png" height="526" width="1286" alt="Hero Image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;