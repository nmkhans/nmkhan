import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className="Hero">
            <div className="inner__hero container mx-auto">
                <div className="hero__content">
                    <div className="hero min-h-screen bg-accent">
                        <div className="hero-content text-center">
                            <div className="max-w-xl">
                                <h1 className="text-secondary text-6xl font-semibold inline-block">I Am </h1>
                                <Typed
                                    className="text-secondary text-6xl font-semibold"
                                    strings={[' Moin Khan', ' Fron-end Developer', ' Mern Stack Developer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;