import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';

/* gambar import */
import deved from '.././../public/dev-ed-wave.png';
import design from '.././../public/design.png';
import code from '.././../public/code.png';
import consulting from '.././../public/consulting.png';
import web1 from '.././../public/web1.png';
import web2 from '.././../public/web2.png';
import web3 from '.././../public/web3.png';
import web4 from '.././../public/web4.png';
import web5 from '.././../public/web5.png';
import web6 from '.././../public/web6.png';
import pemda from '.././../public/pemda.png';
import bupati from '../img/bupati.png'
import blop1 from '../img/blob1.png'
import blop2 from '../img/blob2.png'
import blop3 from '../img/blob3.png'
import sejarah from '../img/sejarah.png'
import sejarah2 from '../img/sejarah2.png'
import website1 from '../img/web1.png'
import website2 from '../img/web2.png'
import user from '../img/user.png'
import ikan1 from '../img/fish1.png'
import ikan2 from '../img/fish2.png'
import ikan3 from '../img/fish3.png'

/* segment import */
import icon from '../img/icon.png'
import Card from './pages/Card';
import Webcard from './pages/Webcard';


import { Player } from '@lottiefiles/react-lottie-player';

import animationFish from '../assets/animation/fish.json'
import BGanimation from '../assets/animation/bg.json'
import LoadingFish from '../assets/animation/loadingFish.json'
import Header from './pages/header/Header';
import Sidebar from './pages/header/Sidebar';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Perikanan() {



  const [darmode, setdarkmode] = useState(false);

  const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


  /* data seksi kantor */
  const data = [
    {
      image: user,
      title: 'Beautiful Design',
      description: 'Creating elegant designs suited for your need s following core design theory.',
      subTitle: 'Design tools I use',
      tools: ['Photoshop', 'Illustrator', 'Figma']
    },

    {
      image: user,
      title: 'Beautiful Design',
      description: 'Creating elegant designs suited for your need s following core design theory.',
      subTitle: 'Design tools I use',
      tools: ['Photoshop', 'Illustrator', 'Figma']
    },

    {
      image: user,
      title: 'Beautiful Design',
      description: 'Creating elegant designs suited for your need s following core design theory.',
      subTitle: 'Design tools I use',
      tools: ['Photoshop', 'Illustrator', 'Figma']
    },
    {
      image: user,
      title: 'Beautiful Design',
      description: 'Creating elegant designs suited for your need s following core design theory.',
      subTitle: 'Design tools I use',
      tools: ['Photoshop', 'Illustrator', 'Figma']
    },


    // Data lainnya bisa ditambahkan di sini
  ];

  const chunkSize = 2;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }


  const websites = [
    { imageUrl: website1, url: 'https://www.google.com' },
    { imageUrl: website1, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    { imageUrl: website2, url: 'https://www.google.com' },
    // Tambahkan data website lainnya di sini
  ];

  const chunkSize2 = 2;
  const chunks2 = [];
  for (let i = 0; i < websites.length; i += chunkSize2) {
    chunks2.push(websites.slice(i, i + chunkSize2));
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false); // Jika posisi scroll di atas, set scrolling ke false
      } else {
        setScrolling(true); // Jika posisi scroll tidak di atas, set scrolling ke true
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Matikan langsung jika sedang menyala
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Tambahkan kelas animasi saat sidebar aktif



  /* aos animation duratin */
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])

  const [LoadingCheck, setLoadingCheck] = useState(true)


  /* check conection */
  useEffect(() => {
    const checkConnection = () => {
      if (!navigator.onLine) {
        alert('Tidak terhubung ke jaringan. Periksa koneksi internet Anda.');
      } else {
        const timer = setTimeout(() => {
          setLoadingCheck(false); // Setelah 2 detik, set isLoading menjadi false
        }, 2000);

        return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
      }
    };

    checkConnection();

  }, []);

  return (
    <div className={darmode ? 'dark' : ''}>
      {LoadingCheck ?
        (
          <div className='bg-gradient-to-f from-blue-300 to-blue-500 w-screen h-screen flex justify-center items-center'>
            <div className='w-40'>
              <Player
                src={LoadingFish}
                className='dinas perikanan loading'
                loop
                autoplay />

            </div>
          </div>
        )
        :
        (

          <div className='flex overflow-hidden '>
            <div className=''>

              <head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
              </head>

              {/* main class */}
              <main className='bg-white dark:bg-gray-800 overflow-hidden'>


                {/*   section header start */}


                {scrolling ? (
                  /* jika scroll true */
                  <section className='justify-center items-center'>
                    <div className={`fixed w-full px-20 h-24 z-20 bg-gradient-to-r from-blue-700 to-blue-500 animate-slideInLeft shadow-md`} data-aos="fade-right" />
                    <div className=' fixed z-50 bg-transparent w-full'>
                      <Header toggleSidebar={toggleSidebar} />
                    </div>
                  </section>
                ) : (
                  /* jika scroll false */
                  <section className='justify-center items-center'>
                    <div>

                      <div className={`fixed w-full px-28  h-24 z-10 bg-transparent `} data-aos="fade-right" />

                    </div>
                    <div className=' fixed z-50 bg-transparent w-full '>
                      <Header toggleSidebar={toggleSidebar} />
                      <div className='flex flex-col items-center justify-center'>
                        <div className=' shadow-sm shadow-white  w-9/12 h-0.5 animate-slideInRight relative' />
                      </div>
                    </div>
                  </section>
                )}


                <section className={`h-auto fixed w-full  mt-24 z-50  `} data-aos="fade-right">


                  <div className="flex animate-slideInRightClose  justify-end w-screen bg-transparent">
                    <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
                  </div>
                </section>
                {/* section header end */}

                <div className="absolute w-screen z-0 shadow-md" >
                  <Player
                    src={BGanimation}
                    className="player"
                    loop
                    autoplay
                  />

                </div>



                {/* section 2 */}
                <section>
                  <div className='z-10 relative flex flex-row  justify-center items-center space-x-0  h-screen  ' >

                    <div className='items-start flex flex-col  h-screen justify-center' data-aos="fade-right">
                      <div className='p-10  items-start w-auto'>
                        <h2 className='text-center font-pacifico md:text-xl lg:text-6xl' style={{ lineHeight: '1.5' }}>
                          <span className="text-white mx-10 lg:text-8xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Dinas</span>
                          <span className="text-white lg:text-8xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Perikanan</span> <br />
                          <span className="text-white mx-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Kabupaten </span>
                          <span className="text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}> Merauke</span>
                        </h2>

                      </div>

                      <div className='flex flex-row ml-0 w-full justify-center '>
                        <button className=" bg-gradient-to-r from-blue-300 to-blue-600 font-sans hover:from-blue-400 hover:to-blue-800 text-white font-bold  rounded w-60 shadow-lg blur-20">
                          Learn More
                        </button>

                      </div>
                    </div>

                  </div>


                </section>
                {/* section 2 */}


                {/* section 3 */}
                <section>
                  <div className='flex flex-row my-20   justify-between space-x-0 mx-40  items-center  h-screen '>

                    <div className='relative flex flex-col justify-center items-start  h-screen w-full' data-aos="fade-right" data-aos-offset="50">
                      <div className='absolute h-auto'>
                        <img
                          src={blop2}
                          alt='Xion White Code Developers '
                          className='full-image pb-10 '
                          style={{ objectFit: 'cover', width: '85%', height: '100%' }}
                        />
                      </div>
                      <div className='relative mt-20 flex flex-col items-start'>
                        <img
                          src={sejarah}
                          alt='Xion White Code Developers'
                          className='full-image relative z-10 ml-7'
                          style={{ objectFit: 'fill', width: '95%', height: '100%', left: '0' }}
                        />
                      </div>
                    </div>




                    <div className='items-start flex flex-col bg'>
                      <div className='text-xl   items-start w-50% bg  w-[35vw] pr-10   h-[500px]' data-aos="fade-right">
                        <h2 className='absolute  lg:w-[35vw] mb-10 z-0 text-5xl py-2  my-2 text-gray-100 font-medium text-end font-pacifico lg:text-8xl md:text-1xl' style={{ lineHeight: '1.5' }}>
                          Pelayanan
                        </h2>
                        <div className=' w-screen h-10 bg'>

                        </div>
                        <h2 className='mt-5 relative z-10 text-5xl py-2  my-2 text-gray-500 font-medium text-left font-pacifico md:text-8xl' style={{ lineHeight: '1.5' }}>
                          Pelayanan
                        </h2>
                        <div className=' '>
                          <p className=' text-justify h-auto'>
                            {lorem}
                          </p>
                        </div>
                      </div>


                    </div>

                  </div>


                </section>

                {/* section 3 */}

                {/* section 4 */}
                <section>
                  <div className='flex flex-row my-20  justify-between space-x-0 mx-40  items-center  h-screen  '>




                    <div className=' items-start flex flex-col bg ' data-aos="fade-left">
                      <div className='text-xl   items-start w-50% bg  w-[35vw] pr-10  h-[500px]'>
                        <h2 className='absolute  lg:w-[30vw] mb-10 z-0 text-5xl py-2  my-2 text-gray-100 font-medium text-end font-pacifico lg:text-8xl md:text-1xl' style={{ lineHeight: '1.5' }}>
                          Sejarah
                        </h2>
                        <div className=' w-screen h-10 bg'>

                        </div>
                        <h2 className='mt-5 relative z-10 text-5xl py-2  my-2 text-gray-500 font-medium text-left font-pacifico md:text-8xl' style={{ lineHeight: '1.5' }}>
                          Sejarah
                        </h2>
                        <div className=' '>
                          <p className=' text-justify h-auto'>
                            {lorem}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=' relative  flex flex-col justify-center items-end h h-full' data-aos="fade-left">
                      <div className='absolute  h-auto   '>
                        <img
                          src={blop3}
                          alt='Xion White Code Developers '
                          className='full-image pb-20  ml-20'
                          style={{ objectFit: 'cover', width: '80%', height: '100%' }}
                        />
                      </div>
                      <div className='relative mt-20  flex flex-col items-start '>
                        <img
                          src={sejarah2}
                          alt='Xion White Code Developers'
                          className='full-image relative z-10'
                          style={{ objectFit: 'cover', width: '95%', height: '100%', left: '-0' }}
                        />
                      </div>
                    </div>

                  </div>


                </section>
                {/* section 4 */}


                {/* section 5 */}
                <section className=' relative'>
                  <div className='  z-10 flex flex-row  justify-center space-x-0  items-center  h-auto ' data-aos="fade-up">

                    <div className='items-center flex flex-col bg  mx-40 h-auto '>
                      <div className='absolute text-xl p-10  items-center w-auto  h-auto z-10'>
                        <h1 className='text-5xl text-gray-200 font-medium text-center font-pacifico md:text-7xl' style={{ lineHeight: '1.5' }}>
                          Seksi Kantor
                        </h1>
                        <h5 className='text-5xl text-gray-500 font-medium text-center font-pacifico md:text-2xl' style={{ lineHeight: '1.5' }}>
                          Seksi Kantor
                        </h5>

                      </div>

                      <div className='relative  w-full h-auto z-10 flex justify-end ' data-aos="fade-up">
                        <img
                          src={ikan1}
                          alt='profile dinas perikanan'
                          className='full-image '
                          style={{ objectFit: 'fill', width: '30%', height: '100%', left: '-0' }}
                        />
                      </div>

                      <section>


                        {/* card part */}
                        <div className="z-10 App flex ">
                          {chunks.map((chunk, index) => (
                            <div className='' key={index}>
                              <Card data={chunk} />
                            </div>
                          ))}
                        </div>


                      </section>

                    </div>

                  </div>

                  {/* ikan2 */}
                  <div className='relative z-0 w-full  h-auto flex justify-start px-[5%] ' data-aos="fade-up">
                    <img
                      src={ikan2}
                      alt='profile dinas perikanan'
                      className='full-image pb-10'
                      style={{ objectFit: 'fill', width: '15%', height: '40%', left: '-0' }}
                    />
                  </div>
                </section>
                {/* section 5 */}

                {/* section 5 */}
                <section data-aos="fade-up">
                  <div className='relative flex flex-row bg justify-center space-x-0  items-center  h-auto'>
                    <div className='items-center flex flex-col bg h-auto '>
                      <div className='text-xl  items-center w-auto  h-auto'>
                        <h1 className='text-5xl text-gray-200 font-medium text-center font-pacifico md:text-6xl' style={{ lineHeight: '1.5' }}>
                          Website Terkait
                        </h1>
                        <h5 className='text-5xl text-gray-500 font-medium text-center font-pacifico md:text-2xl' style={{ lineHeight: '1.5' }}>
                          Website Terkait
                        </h5>

                      </div>

                      <section>



                        {/* card part */}

                        <div className="basis-1/3 website-list flex flex-col justify-center z-10  mx-[10%]   rounded-lg ">
                          <div className="basis-1/3 website-list flex flex-col justify-center relative  z-10  rounded-lg">
                            {chunks2.map((chunk, index) => (
                              <div key={index} className="flex flex-row mx-40 m-10  space-x-10 ">
                                {chunk.map((website, idx) => (
                                  <Webcard key={idx} imageUrl={website.imageUrl} url={website.url} />
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                    </div>

                    {/* ikan 3 */}
                    <div className='absolute z-0 w-full  h-auto flex mt-[80%] bg  justify-end ' data-aos="fade-left">
                      <img
                        src={ikan3}
                        alt='profile dinas perikanan'
                        className='full-image ml-20 '
                        style={{ objectFit: 'fill', width: '30%', height: '100%', left: '-0' }}
                      />
                    </div>

                  </div>

                </section>
                {/* section 5 */}

                {/* Footer start */}
                <section className='h-full pb-5 w-screen px-10 mt-96 bg-blue-700'  >

                  <div className=' flex  via-white  justify-between flex-col md:flex-col lg:flex-row' >
                    <div className=' flex  align-bottom  w-auto'>
                      <div className='text-xl text-white font-pacifico ml-2 mt-7'>© Dinas Perikanan Merauke 2024</div>
                    </div>
                    <div className=' flex  align-bottom  w-auto' >
                      <h3 className='text-xl text-white font-pacifico ml-2 mt-7 md:text-xl lg:text-xl'>© Design by xion</h3>
                    </div>
                  </div>

                </section>
                {/* Footer end */}



              </main>
            </div>
          </div>
        )}


    </div>
  );
}
