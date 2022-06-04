import React from 'react';
import Head from 'next/head';
import Hero from './../components/Hero/Hero';

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
        </main>
      </div>
    </section>
  )
}

export default Home;