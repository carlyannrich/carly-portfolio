
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const Home: NextPage = () => {
  const [devDescription, showDevDescription] = useState(false);
  const [resDescription, showResDescription] = useState(false);
  return (
    <div>

      <Head>
        <title>-carly-richardson--portfolio-</title>
        <meta name="description" content="portfolio for carly richardson" />
      </Head>

      <section className="p-5 rounded mx-auto grid grid-cols-1">
        {/* Software Developer */}
        <div className='mx-10 mt-20 mb-10 lg:h-[160px]'>
          <a onMouseEnter={() => showDevDescription(true)} onMouseLeave={() => showDevDescription(false)} href='/developer'>
            <motion.h2 whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.7 }} transition={{ ease: "easeOut", duration: 1 }} className='h-[100px] lg:h-[150px] antialiased text-3xl lg:text-8xl text-center text-gray-50 uppercase hover:underline tracking-tighter'>Software Devel✺per</motion.h2>
          </a>
          <AnimatePresence>
            {devDescription && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='invisible lg:visible mx-auto -mt-4 tracking-wide text-center antialiased font-dm-mono text-amber-200'>I work as a full-stack software developer in the education industry. Click to see my experience.</motion.p>)}
          </AnimatePresence>
        </div>
        {/* Academic Researcher */}
        <div className='mx-10 mt-20 h-[160px]'>
          <a onMouseEnter={() => showResDescription(true)} onMouseLeave={() => showResDescription(false)} href='/researcher'>
            <motion.h2 whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.7 }} transition={{ ease: "easeOut", duration: 1 }} className='h-[100px] lg:h-[150px] antialiased text-3xl lg:text-8xl text-center text-gray-50 uppercase hover:underline tracking-tighter
              '>Ac⟁demic Researcher</motion.h2>
          </a>
          <AnimatePresence>
            {resDescription && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='invisible lg:visible mx-auto -mt-4 tracking-wide text-center antialiased font-dm-mono text-amber-200'>My research interest is in the History of Astronomy and Material Culture studies. Click to see my research.</motion.p>)}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Home
