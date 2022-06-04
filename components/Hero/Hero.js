import React from 'react';
import Typed from 'react-typed';
import ParticlesBg from '../ParticlesBg/ParticlesBg';


const Hero = () => {

    return (
        <div className="Hero">
            <div className="inner__hero container mx-auto">
                <div className="hero__content">
                    <ParticlesBg />
                    <div className="hero min-h-screen bg-accent">
                        <div className="hero-content text-center">
                            <div className="max-w-2xl">
                                <h1 className="text-secondary text-6xl font-semibold inline-block mr-3">I Am</h1>
                                <Typed
                                    className="text-secondary text-6xl font-semibold"
                                    strings={['Moin Khan', 'Front-End Developer', 'Mern Stack Developer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                                <p className="py-6 text-neutral text-lg font-light">Nothing is impossible on the web, Let&apos;s execute your idea into the website and
                                    start your business or startup today. </p>
                                <button className="btn btn-md text-white text-md font-medium btn-primary capitalize">Let&apos;s Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;