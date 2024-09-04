import React, { useState } from 'react'
import atif from '../../assets/atif.png'
import { Menu, X } from 'lucide-react'
import { FaChessQueen, } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";



function Navbar() {
    const { loginWithRedirect , isAuthenticated, logout, user} = useAuth0();

  let Link = [
    { name: 'Home', link: '#top' },
    { name: 'About me', link: '#about me' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const [moblieDrawerOpen, setmoblieDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmoblieDrawerOpen(!moblieDrawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80  xl:px-20 ">
        <div className='container px-4 mx-auto relative text-sm'>
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <FaChessQueen className='text-3xl'></FaChessQueen>
            <img className='h-[5rem] ' src={atif} alt="" />
            </div>
            <ul className='hidden lg:flex  space-x-12 text-lg'>
              {
                Link.map((link) => (
                  <li className='hover:text-orange-500'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ) )
             }
            </ul>

            <div className='hidden lg:flex justify-center space-x-10 items-center'>
              <li>
                {isAuthenticated && <p>{user.name}</p> }
              </li>
              {
                isAuthenticated ? (
                  <li>
                <button className=' py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
                </li>
                 ) : (<li><button className=' py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500' onClick={() => loginWithRedirect()}>Log In</button></li>
              )}
              <a href="#contact" className=' py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500'>Contact me</a>
            </div>
            <div className="lg:hidden md:flex flex-col  justify-end">
              <button className='w-10 ' onClick={toggleNavbar}>
                {moblieDrawerOpen ? <X/> : <Menu/>}
              </button>
            </div>
          </div>
          {moblieDrawerOpen && (
            <div className='bg-gray-900 fixed right-0 z-20 w-full h-96 flex flex-col justify-center items-center lg:hidden'>
              <ul className=''>
                   {
                Link.map((link) => (
                  <li className='py-4 text-lg'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ) )
             } 
              </ul>
              <div className='flex mt-6 gap-8'>
                 <li>
                {isAuthenticated && <p>{user.name}</p> }
              </li>
              {
                isAuthenticated ? (
                  <li>
                <button className=' py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
                </li>
                 ) : (<li><button className='py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500' onClick={() => loginWithRedirect()}>Log In</button></li>
              )}
        
                <a href="#contact" className='py-2 px-3 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500'>Contact me</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      </>
  )
}

export default Navbar
