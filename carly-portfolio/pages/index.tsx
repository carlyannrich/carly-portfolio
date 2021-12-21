import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Choice from '../components/Choice'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>-carly-richardson--portfolio-</title>
      <meta name="portfolio for carly richardson" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Mansalva&family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className='min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500'>
      <main>
        <Header />
        <section className="grid sm:grid-cols-2 md:grid-rows-2">
          <Choice
            link='/cv'
            h2text='Developer'
            svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mt-8" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>}
          />
          <Choice
            link='/research'
            h2text='Researcher'
            svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-24 mt-8" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>}
          />
        </section>
      </main>
    </body>
  </div >
)

export default Home
