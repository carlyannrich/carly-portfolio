import type { NextPage } from 'next'
import Head from 'next/head'
import Dropdown from '../components/Dropdown'
import { DesktopComputerIcon } from '@heroicons/react/solid'
import { AcademicCapIcon } from '@heroicons/react/outline'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>-carly-richardson--portfolio-</title>
      <meta name="description" content="portfolio for carly richardson" />
    </Head>
    <nav className='text-center bg-gray-800 h-[116px]'>
      <Dropdown />
    </nav>
    <section className="p-5 rounded mx-auto min-w-full">
      <div className='text-left font-inter mt-4 mb-32'>
        <div className='flex flex-row'>
          <DesktopComputerIcon aria-hidden className='mt-4 mx-4 h-10 w-10 text-white' />
          <h2 className='text-7xl text-white'>Software Developer</h2>
        </div>
        <p className='ml-20 mt-3 py-1 px-2 shadow-md text-md rounded bg-white text-gray-900 w-fit'>I work as a full-stack software developer in the education industry.</p>
      </div>
      <div className='text-right font-inter mb-20'>
        <AcademicCapIcon aria-hidden className='mt-4 mx-5 h-10 w-10 text-white float-right' />
        <h2 className='text-7xl text-white'>Academic Researcher</h2>
        <p className='mr-20 float-right mt-3 py-1 px-2 shadow-md text-md rounded bg-white text-gray-900 w-fit'>My research interest is in the History of Astronomy and Material Culture studies.</p>
      </div>

    </section>
  </div >
)

export default Home
