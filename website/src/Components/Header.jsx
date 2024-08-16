import Navbar from "./Navbar"
import Logo from '../Images/Logo.png'
import Balon from '../Images/Balon-Logo.jpg'

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'
import { FaOpencart } from 'react-icons/fa';
import { CiLogout, CiUser } from "react-icons/ci";

function Header() {

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className='bg-white fixed top-0 left-0 w-screen h-fit max-w-screen-xl m-auto mx-auto px-10 z-50 border-b-2'>
      <div className=' flex justify-between items-center py-3 '>
        <div className="flex items-center justify-center gap-x-1">
          <img src={Balon} alt="Logo" className="h-10" />
          <p className="text-xl text-green-500">Balon Anito</p>
        </div>

        <Navbar containerStyles={"hidden md:flex gap-x-3 xl:gap-x-10 medium-15"} />

        {/* NAVBAR FOR MOBILE */}
        <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-5 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-xl w-64 medium-16 transition-all duration-300"
          :
          "flex item-start flex-col gap-y-5 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 transition-all duration-300 -right-[100%]"}`} />

        {/* BUTTONS */}
        {!menuOpened ? (<MdMenu onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-green-500 hover:ring-orange-400 mr-2 p-1 h-8 w-8 rounded-full' />)
          :
          (<MdClose onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-green-500 hover:ring-orange-400 mr-2 p-1 h-8 w-8 rounded-full' />)}

        {/* <NavLink to={'/track-request'}>
                <button className="font-semibold text-xs py-2 px-2 rounded-full bg-green-500 text-white hover:bg-green-400">
                  TRACK REQUEST
                </button>
              </NavLink> */}


      </div>

    </header>
  )
}

export default Header