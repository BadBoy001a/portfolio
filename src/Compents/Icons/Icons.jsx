import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'


function Icons() {
  return (
    <footer className='py-8'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
              <div className='flex flex-col md:flex-row items-center md:space-x-12 mb-4'>
                  <div className='flex-1 mb-4 md:mb-0'>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text
                          bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-400 mb-3 '>Muhammad ATIF</h3>
                      <p className='text-gray-400'>Frontend devloper based in the PAKISTAN, specializing in web Technologies</p>
                      <p className='text-gray-400'>Get in touch with me on</p>
                  </div>
                  <div className='flex-1 w-full'>
                      <form className='flex items-center justify-center'>
                          <input type="emial" placeholder="Your Email" className='w-full
                          p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' />
                          <button type='subimt' className='bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-400
                          text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                      </form>
                  </div>
              </div>

              <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                  <p className='text-gray-400 hover:text-white'>
                      &copy;{new Date().getFullYear}2024 Muhammad Atif. All rights reserved.
                  </p>
                  <div className='flex space-x-4 my-4 md:my-0'>
                      <a href="https://www.facebook.com/profile.php?id=100078707493155&mibextid=ZbWKwL"target="_blank">
                          <FaFacebook className='text-3xl text-gray-400 hover:text-white'></FaFacebook>
                     </a>
                       <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"target="_blank">
                          <FaLinkedin className='text-3xl text-gray-400 hover:text-white'></FaLinkedin>
                      </a>
                        <a href="https://github.com/BadBoy001a/BadBoy001a.git"target="_blank">
                          <FaGithub className='text-3xl text-gray-400 hover:text-white '></FaGithub>
                      </a>
                        <a href="https://wa.me/923171847693" target="_blank">
                          <FaWhatsapp className='text-3xl text-gray-400 hover:text-white '></FaWhatsapp>
                     </a>
                  </div>
                  <div className='flex space-x-4'>
                      <a href="" className='text-gray-400 hover:text-white'>
                          @Privacy
                      </a>
                      <a href="" className='text-gray-400 hover:text-white'>
                          @Terms of Servics
                      </a>
                  </div>
              </div>
      </div>
    </footer>
  )
}
export default Icons

  