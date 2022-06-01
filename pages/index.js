import Head from 'next/head'

const Home = () => {
  return (
    <div className="Home">
      <Head>
        <title>Moin Khan | Font-End Developer</title>
        <meta name="description" content="Personal Portfolio of Moin Khan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home__container">
        <h1>This is home</h1>
      </div>

    </div>
  )
}

export default Home;