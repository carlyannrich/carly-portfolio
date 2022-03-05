import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const Developer: NextPage = () => (
    <section className="p-5 rounded mx-auto grid grid-cols-1">
        <div className='mx-10 mt-20 mb-10 lg:h-[160px]'>
            <h2 className='h-[100px] lg:h-[150px] antialiased text-3xl lg:text-8xl text-center text-gray-50 uppercase tracking-tighter'>Software Devel✺per</h2>
        </div>
    </section>
)

export default Developer;