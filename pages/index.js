import React from 'react';
import Head from 'next/head';
import Hero from '../sections/Home/Hero/Hero';
import AboutMe from '../sections/Home/About/About';
import Features from '../sections/Home/Features/Features';

const Home = () => {
  return (
    <section className="Home">
      <Head>
        <title>Moin Khan | Font-End Developer</title>
        <meta name="description" content="Personal Portfolio of Moin Khan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="inner__home">
        <main className="home__content">
          <Hero />
          <Features />
          {/* <AboutMe /> */}
        </main>
      </div>
    </section>
  )
}

export default Home;