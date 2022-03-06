import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import * as ToolIcons from '../assets/toolIcons'
import Image from 'next/image';

const Developer: NextPage = () => {
    const testerTech = ['Javascript', 'Postman', 'Browserstack', 'Github Actions', 'Lighthouse Accessibility'];

    const associateTech = ['Typescript', 'PostgreSQL', 'Node.js', 'React', 'Tailwind CSS', 'Jest'];

    const devTech = ['Next.js', 'Terraform', 'Prisma', 'AWS Services', 'Framer Motion'];


    return (
        <section className="p-5 rounded mx-auto grid grid-cols-1">
            <div className='mx-10 mt-20 mb-10 lg:h-[160px]'>
                <h2 className='h-[100px] lg:h-[150px] antialiased text-3xl lg:text-8xl text-center text-gray-50 uppercase tracking-tighter'>Software Devel✺per</h2>
            </div>
            <div className='text-gray-50 text-center text-lg lg:text-xl grid grid-cols-1 gap-10 mx-10 lg:mx-52'>
                <p>I work as a full-stack software developer at <a className='text-orange-500 hover:underline' href='https://jisc.ac.uk'>Jisc</a>.</p>
                <p>I am currently working on the <a className='text-cyan-600 hover:underline' href='https://int.octopus.ac'>Science Octopus</a>  project, which is a new way to publish scientific work that is fast, free and fair. This is an open-source project, and you can view the repository on Github.</p>
                <p>I also work on my own projects, you can check out <a className='text-amber-200 hover:underline' href='https://github.com/carlyannrich'>my personal Github account</a> to see my public repositories.</p>
            </div>
            <div className='text-white font-dm-mono mt-28 mb-10 mx-10'>
                <h2 className='antialiased text-3xl font-inter font-bold lg:text-4xl text-center text-gray-50 uppercase mb-10'>Tech stack</h2>
                <div className='items-center text-center flex-col flex gap-2 mb-32'>
                    <h3 className='font-semibold'>Software Tester</h3>
                    <p>Jisc</p><p>July 2020 - June 2021</p>
                    <div className='flex gap-6 h-[100px]'>
                        <Image width={70} src={ToolIcons.Js} />
                        <Image width={70} src={ToolIcons.Postman} />
                        <Image width={70} src={ToolIcons.Browserstack} />
                        <Image width={70} src={ToolIcons.Actions} />
                        <Image width={70} src={ToolIcons.Lighthouse} />
                    </div>
                    <div className='pl-12 lg:pl-0 flex flex-col lg:flex-row font-semibold font-inter uppercase'>
                        <span className='text-white text-xs pt-3 mx-3 invisible lg:visible'>✯</span>
                        {testerTech.map((testerTechnologies) => (
                            <ul key={testerTechnologies} className='py-1 lg:py-3 text-sm text-gray-400 flex'>
                                <li className='mx-auto tracking-wide'>{testerTechnologies}</li>
                                <span className='text-white text-xs mx-3 invisible lg:visible'>✯</span>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className='items-center text-center flex-col flex gap-2 mb-32'>
                    <h3 className='font-semibold'>Associate Software Developer</h3>
                    <p>Jisc</p><p>June 2021 - March 2022</p>
                    <div className='flex gap-6 h-[100px]'>
                        <Image width={70} src={ToolIcons.Ts} />
                        <Image width={70} src={ToolIcons.Postgres} />
                        <Image width={70} src={ToolIcons.Node} />
                        <Image width={70} src={ToolIcons.React} />
                        <Image width={70} src={ToolIcons.Tailwind} />
                        <Image width={60} src={ToolIcons.Jest} />
                    </div>
                    <div className='pl-12 lg:pl-0 flex flex-col lg:flex-row font-semibold font-inter uppercase'>
                        <span className='text-white text-xs pt-3 mx-3 invisible lg:visible'>✯</span>
                        {associateTech.map((associateTechnologies) => (
                            <ul key={associateTechnologies} className='py-1 lg:py-3 text-sm text-gray-400 flex'>
                                <li className='mx-auto tracking-wide'>{associateTechnologies}</li>
                                <span className='text-white text-xs mx-3 invisible lg:visible'>✯</span>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className='items-center text-center flex-col flex gap-2 mb-32'>
                    <h3 className='font-semibold'>Software Developer</h3>
                    <p>Jisc</p><p>March 2022 - Present</p>
                    <div className='flex gap-6 h-[100px]'>
                        <Image width={70} src={ToolIcons.Next} />
                        <Image width={70} src={ToolIcons.Tf} />
                        <Image width={60} src={ToolIcons.Prisma} />
                        <Image width={70} src={ToolIcons.AWS} />
                        <Image width={40} src={ToolIcons.Framer} />
                    </div>
                    <div className='pl-12 lg:pl-0 flex flex-col lg:flex-row font-semibold font-inter uppercase'>
                        <span className='text-white text-xs pt-3 mx-3 invisible lg:visible'>✯</span>
                        {devTech.map((devTechnologies) => (
                            <ul key={devTechnologies} className='py-1 lg:py-3 text-sm text-gray-400 flex'>
                                <li className='mx-auto tracking-wide'>{devTechnologies}</li>
                                <span className='text-white text-xs mx-3 invisible lg:visible'>✯</span>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developer;