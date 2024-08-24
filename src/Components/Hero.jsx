import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Balon from '../Images/Balon-Logo.jpg';
import Logo from '../Images/Logo.png'
import Picture1 from '../Images/picture1.jpg'
import Picture2 from '../Images/picture2.png'
import Picture3 from '../Images/picture3.jpg'
import '../App.css';

function Hero() {
  return (
    <section className=''>
      <div className='absolute w-full h-full bg-green-500 clip-slant'></div>

      <div className='flex flex-wrap justify-between items-center w-full min-h-screen md:h-screen px-14'>
        <div className='text-white z-10 mt-20'>
          <p className='text-3xl font-semibold'>WELCOME TO</p>
          <p className='text-4xl font-semibold'>BARANGAY BALON ANITO</p>
          <p className='mt-5'>Open Hours of Barangay: Monday to Friday (8AM - 5PM)</p>
          <p>Contact Number: 091234567890</p>
          <p>Email: brgybalonanito@gmail.com</p>

          <HashLink to={'/#about'}>
            <button className='bg-white text-green-500 px-10 py-2 mt-5 rounded-full hover:bg-green-100'>About</button>
          </HashLink>
          <HashLink
            to={'/#services'}>
            <button className=' border border-white  text-white-500 px-10 py-2 mt-5 ml-4 rounded-full bg-transparent hover:bg-white hover:text-green-500'>Request Certificate</button>
          </HashLink>
        </div>

        <div className='w-full mt-10 md:w-3/6 h-fit flex flex-wrap md:flex-nowrap items-center gap-5 z-10'>
          <div className='w-full md:w-56 h-72 transition-transform duration-200 transform hover:scale-105'>
            <img src={Picture1} alt='Image 1' className='w-full h-full object-cover rounded-2xl shadow-2xl drop-shadow-2xl' />
          </div>

          <div className='flex flex-wrap md:flex-col gap-5'>
            <div className='w-full h-32 transition-transform duration-200 transform hover:scale-105'>
              <img src={Picture2} alt='Image 2' className='w-full h-full object-cover rounded-2xl shadow-2xl drop-shadow-2xl' />
            </div>

            <div className='w-full h-48 transition-transform duration-200 transform hover:scale-105'>
              <img src={Picture3} alt='Image 3' className='w-full h-full object-cover rounded-2xl shadow-2xl drop-shadow-2xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
