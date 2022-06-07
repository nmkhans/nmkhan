import React, { useEffect } from 'react';
import Typed from 'react-typed';
import ParticlesBg from '../ParticlesBg/ParticlesBg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Hero = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    deration: 1,
                    bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({
                y: 100,
                opacity: 0,
            })
        }
        console.log(inView)
    }, [inView, animation])

    return (
        <div className="Hero">
            <div className="inner__hero container mx-auto relative">
                <div className="hero__content">
                    <ParticlesBg />
                    <div className="hero min-h-screen relative">
                        <div className="hero-content text-center">
                            <div className="max-w-2xl">
                                <motion.h1
                                    animate={{ y: 0, opacity: 1 }}
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ delay: 1 }} className="text-secondary text-6xl font-semibold inline-block">I Am
                                    <Typed
                                        className="text-secondary text-6xl font-semibold ml-3"
                                        strings={['Moin Khan', 'Front-End Developer', 'Mern Stack Developer']}
                                        typeSpeed={40}
                                        backSpeed={40}
                                        loop
                                    />
                                </motion.h1>
                                <motion.p
                                    animate={{ y: 0, opacity: 1 }}
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="py-6 text-neutral text-lg font-light">Nothing is impossible on the web, Let&apos;s execute your idea into the website and start your business or startup today.
                                </motion.p>
                                <motion.button
                                    animate={{ y: 0, opacity: 1 }}
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ delay: 2 }}
                                    className="btn btn-md text-white text-md font-medium btn-primary capitalize">Let&apos;s Get Started</motion.button>
                            </div>
                        </div>
                        <motion.div
                            ref={ref}
                            animate={animation}
                            className="hero__image text-center absolute top-[80%] left-[0] right-[0] mt-10">
                            <Image src="/assets/hero.png" width={1200} height={480} alt="" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;