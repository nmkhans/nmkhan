import React, { createContext } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Hero from '../sections/Home/Hero/Hero';
import About from '../sections/Home/About/About';
import Features from '../sections/Home/Features/Features';
import MySkills from './../sections/Home/MySkills/MySkills';
import Projects from './../sections/Home/Projects/Projects';
import ContactMe from './../sections/Home/ContactMe/ContactMe';


const HomeData = createContext();
const Home = (props) => {
  return (
    <section className="Home">
      <Head>
        <title>Moin Khan | Font-End Developer</title>
        <meta name="description" content="Personal Portfolio of Moin Khan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="inner__home">
        <main className="home__content">
          <HomeData.Provider value={props} >
            <Hero />
            <Features />
            <About />
            <MySkills />
            <Projects />
            <ContactMe />
          </HomeData.Provider>
        </main>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const projectData = await axios.get('http://localhost:5000/projects');
  return {
    props: {
      projects: projectData?.data
    }
  }
}

export { HomeData };
export default Home;