import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>-carly-richardson--portfolio-</title>
      <meta name="description" content="portfolio for carly richardson" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main className='min-h-screen bg-star-bg'>
      <Header />
      <section className=" bg-gray-900 min-h-screen">
        <div className='flex justify-center gap-5 pt-20'>
          <h2 className="pt-10 antialiased font-inter text-7xl text-center text-white">view in</h2>
          <Dropdown />
          <h2 className="pt-10 antialiased font-inter text-7xl text-center text-white">mode</h2>
        </div>
      </section>
    </main>
    <Footer />
  </div >
)

export default Home
