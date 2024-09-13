import React from 'react'
import about_profile from '../../assets/about_profile.svg'
import { FaBolt } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function About() {
  return (
    <div className='bg-black text-white text-center py-8'>
          <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src={about_profile} alt="profile..."/>
          <h1 className='sm:text-4xl text-2xl font-bold'>
              I'm {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-orange-900 via-orange-500 to-yellow-500'>Muhammad ATIF</span> Frontend
        <br />
             <ReactTyped strings={['Developer', 'Designer', 'Freelancer']} typeSpeed={120} backSpeed={140} style={{ color: '#555' }} loop /> based in Pakistan
          </h1>
          <p className='sm:text-lg  mt-3 text-gray-300'>
              I'm a frontend developer from karachi, pakistan and I specialize in <br /> building modern  and responseive wep applications.
          </p>
          <div className='mt-6 space-x-6'>
              <button className='py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500'>Hire me</button>
        <button>
          <a href="src/assets/MuhammadAtifResume(1) (1).pdf" download="src/assets/MuhammadAtifResume(1) (1).pdf" class="py-3 px-5 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500">Download Resume</a>
          <FaBolt className='relative -top-5 left-[9.9rem] bg-orange-500'></FaBolt>
        </button>
      </div>
    </div>
  )
}

export default About
