import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

import deved from '../public/dev-ed-wave.png?url'
import design from '../public/design.png?url'
import code from '../public/code.png?url'
import consulting from '../public/consulting.png?url'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/pemda.png"

export default function App() {
  const [darmode, setdarkmode] = useState(false)
  return (
    <div className={darmode ? 'dark' : ""}>
      <div className='px-0'>

        <head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </head>

        {/* main class */}
        <main className='bg-white dark:bg-gray-800' >
          <section className='min-h-screen w-screen px-10'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons'>developer by</h1>

              {/* unorderd list digunakan untuk awalan sebelum mmebuat list li */}
              <ul className='flex items-center'>
                {/* li atau list digunakan untuk membuat item list */}
                <li><BsFillMoonStarsFill onClick={() => setdarkmode(!darmode)} className='cursor-pointer text-2xl' /></li>
                <li>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                    href='#'>Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <div className='text-xl text-center p-10'>
                {/*   md: adalah untuk mengatut saat display menggunakan hp/ medium screen */}
                {/*   lg: adalah untuk mengatut saat display menggunakan large screen */}
                <h2 className='text-5xl text-teal-600 font-medium md:text-6xl'>Xion White Code</h2>
                <h3 className='text-2xl py-2 md:text-xl'>Developer and designer</h3>
                <p className='text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                  Freelancer providing servies for programming and designer needs. Join me down below and lets get cracking!
                </p>
              </div>

              <div className='text-5xl flex my-2 gap-16 text-gray-600 justify-center'>
                <AiFillLinkedin />
                <AiFillTwitterCircle />
                <AiFillYoutube />
              </div>

            </div>



            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <img src={deved} alt='Xion White Code Developers' className='full-image' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>


          </section>


          {/* section 2 */}
          <section>
            <div className='m-10'>
              <h3 className='text-3xl py-1 font-medium'>Services I Offfer</h3>
              <p className='text-md py-2 leading-8 text-gray-800'>
                Since the beginning of my jurney as a freelance designer and developer. i've done remote work for
                <span className='text-teal-500'> agencies
                </span> consulted for <span className='text-teal-500'>
                  startups
                </span> and collaboration with talented people creating digital product for both business and consumer use.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800'>
                I offer from a wide range of services, including programming and teaching.
              </p>
            </div>

            {/* card part */}
            <div className='lg:flex gap-10'>
              <div className='m-10 text-center p-10 shadow-lg rounded-xl my-10'>

                <img src={design} style={{ width: 100, height: 100, margin: 'auto' }}></img>
                <h3>Beautiful Design</h3>
                <p className='py-2'>
                  Creating elegant designs suited for your need s following core design theory.
                </p>
                <h4 className='py-4 text-teal-600'> Design tools I use</h4>

                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>


              <div className='m-10 text-center p-10 shadow-lg rounded-xl my-10'>
                <div >
                  <img src={code} style={{ width: 100, height: 100, margin: 'auto' }}></img>
                  <h3>Beautiful Design</h3>
                  <p className='py-2'>
                    Creating elegant designs suited for your need s following core design theory.
                  </p>
                  <h4 className='py-4 text-teal-600'> Design tools I use</h4>

                  <p className='text-gray-800 py-1'>Photoshop</p>
                  <p className='text-gray-800 py-1'>Illustrator</p>
                  <p className='text-gray-800 py-1'>Figma</p>
                </div>
              </div>

              <div className='m-10 text-center p-10 shadow-lg rounded-xl my-10'>
                <div >
                  <img src={consulting} style={{ width: 100, height: 100, margin: 'auto' }}></img>
                  <h3>Beautiful Design</h3>
                  <p className='py-2'>
                    Creating elegant designs suited for your need s following core design theory.
                  </p>
                  <h4 className='py-4 text-teal-600'> Design tools I use</h4>

                  <p className='text-gray-800 py-1'>Photoshop</p>
                  <p className='text-gray-800 py-1'>Illustrator</p>
                  <p className='text-gray-800 py-1'>Figma</p>
                </div>
              </div>
            </div>
          </section>


          <section className='m-10'>
            <div>
              <h3 className='text-3xl py-1'>Portofolio</h3>

              <p className='text-md py-2 leading-8 text-gray-800'>
                Since the beginning of my jurney as a freelance designer and developer. i've done remote work for
                <span className='text-teal-500'> agencies
                </span> consulted for <span className='text-teal-500'>
                  startups
                </span> and collaboration with talented people creating digital product for both business and consumer use.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800'>
                I offer from a wide range of services, including programming and teaching.
              </p>

            </div>

            {/* image web part */}
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web1}></img>
              </div>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web2}></img>
              </div>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web3}></img>
              </div>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web4}></img>
              </div>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web5}></img>
              </div>
              <div className='basis-1/3 flex-1'>
                <img className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }} src={web6}></img>
              </div>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
