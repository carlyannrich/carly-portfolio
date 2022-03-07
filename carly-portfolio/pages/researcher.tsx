import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Moondial from '../assets/images/moondial.jpg';
import Exhibition2 from '../assets/images/exhibition-2.jpeg';
import Exhibition3 from '../assets/images/exhibition-3.jpeg';
import Image from 'next/image';

const Researcher: NextPage = () => (
    <section className="p-5 rounded mx-auto grid grid-cols-1">
        <div className='mx-10 mt-20 mb-10 lg:h-[160px]'>
            <h2 className='h-[100px] lg:h-[150px] antialiased text-3xl lg:text-8xl text-center text-gray-50 uppercase tracking-tighter'>Ac⟁demic Researcher</h2>
        </div>
        <div>
            <Image src={Moondial} alt='Moon dial from Cosmographia - Peter Apian' />
        </div>
        <div className='text-white text-center font-dm-mono mt-20 mb-10 mx-10'>
            <div className='items-center flex-col flex gap-2 mb-20'>
                <h3 className='font-semibold'>BA Classical Studies</h3>
                <p>University of Manchester</p><p>2016</p>
            </div>
            <div className='items-center flex-col flex gap-2 mb-10'>
                <h3 className='font-semibold'>MA Medieval and Early Modern Studies</h3>
                <p>University of Manchester</p><p>2020</p>
            </div>
        </div>
        <div className='grid grid-cols-1 items-center border-t lg:grid-cols-2 mb-8 py-10'>
            <div className='text-white font-dm-mono mb-20 lg:mb-0 mx-10'>
                <div className='text-center font-semibold font-inter uppercase'>
                    <span className='text-5xl'>✯</span>
                    <ul className='py-3 text-xl flex flex-col gap-2'>
                        <li>History of Astronomy</li>
                        <li>Scientific Instruments</li>
                        <li>Book History</li>
                        <li>Material Culture</li>
                        <li>Volvelles</li>
                        <li>Digital Humanities</li>
                    </ul>
                    <span className='text-5xl'>✯</span>
                </div>
            </div>
            <div className='text-white font-dm-mono mx-10'>
                <p className='mx-auto mb-10 lg:mb-4'>My research focuses on the accessibility of astronomical knowledge in the early modern period through paper moveable instruments, namely volvelles.</p>
                <p className='mx-auto mb-10 lg:mb-4'>I use Peter Apian's <i>Cosmographia</i> as a case study item. Particularly, a copy of this book that is held at the John Rylands Library. This copy includes handmade volvelles that were added by a previous owner.</p>
                <p className='mx-auto mb-10 lg:mb-4'>I explore how learning through the tactile and visual senses allows Visual Thinking and Material Engagement and therefore a wider audience were able to utilise volvelles as a pedagogical tool.</p>
                <p className='mx-auto'>Additionally, I explore how these volvelles are digitally represented in collections today. Is the interactivity of a volvelle shown in digital facsimiles of these book pages? My next project is working on a solution to this, to allow a remote audience to engage and interact with volvelles - as the volvelles were originally intended to be used.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center border-t mb-8 py-10'>
            <div className='mx-10 lg:mx-0'>
                <Image className='mx-auto' width={300} height={400} src={Exhibition2} alt='Exhibition at the John Rylands Library - case 1' />

                <Image className='mx-auto' width={300} height={400} src={Exhibition3} alt='Exhibition at the John Rylands Library - case 2' />
            </div>
            <div className='text-center text-white mx-10 lg:mx-20 mt-8 lg:mt-0'>
                <h3 className='font-semibold font-inter uppercase'>Exhibition of astronomical volvelles</h3>
                <p className='font-dm-mono font-bold my-4'>Rylands Gallery in the John Rylands Library, Manchester.</p>
                <p className='font-dm-mono'>December 2021 - May 2022.</p>
                <p className='font-dm-mono my-10'>This exhibition displayed several books and digital facsimiles that featured astronomical volvelles, based off of my research for my MA thesis.</p>
                <p className='font-dm-mono mb-10'> With thanks to items or digital facsimiles from: the John Rylands Library in Manchester, Chetham's Library in Manchester, and The Old Library, Magdalen College in Oxford.</p>
            </div>
        </div>


    </section>
)

export default Researcher;