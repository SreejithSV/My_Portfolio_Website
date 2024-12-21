import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false);
  const toggleNavbar=()=>{
    setToggleMenu(true);
  };

  useEffect(()=>{
    if(toggleMenu){
      const timer=setTimeout(()=>{
        setToggleMenu(false);
      },2000)
    }
  },[toggleMenu])
  return (
    <div className="flex justify-between px-5 py-2 ">
      <Link className='link' to={'/sreejith'}><a href="#" className="atag font-serif font-bold">SREEJITH  S V</a></Link>
      <nav className="hidden md:block">
    <ul className="flex text-white ">
        
        <li><Link className='link' to={'*'}><a href='#' className='atag'>HOME</a></Link></li>
        <li><Link className='link' to={'/skills'}><a href='#' className='atag'>SKILLS</a></Link></li>
        <li><Link className='link' to={'/education'}><a href='#' className='atag'>EDUCATION</a></Link></li>
        <li><Link className='link' to={'/project'}><a href='#' className='atag'>PROJECT</a></Link></li>
        <li><Link className='link' to={'/about'}><a href='#' className='atag'>ABOUT</a></Link></li>
        <li><Link className='link' to={'/contact'}><a href='#' className='atag'>CONTACT</a></Link></li>
        <li><Link className='link' to={'/resume'}><a href='#' className='atag'>RESUME</a></Link></li>
        
    </ul>
    </nav>
    { toggleMenu&&<nav className="block md:hidden mobile-nav bg-gray-600">

      <ul className="flex flex-col  bg-black p-yl-3 ">
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'*'}><a href='#' className='atag-nav bg-black'>HOME</a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/skills'}><a href='#' className='atag-nav bg-black'>SKILLS </a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/education'}><a href='#' className='atag-nav bg-black'>EDUCATION</a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/project'}><a href='#' className='atag-nav bg-black'>PROJECT</a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/about'}><a href='#' className='atag-nav bg-black'>ABOUT</a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/contact'}><a href='#' className='atag-nav bg-black'>CONTACT</a></Link></li>
        <li className='bg-black py-2 text-center'><Link className='link bg-black' to={'/resume'}><a href='#' className='atag-nav bg-black'>RESUME</a></Link></li>
    </ul>
    </nav>}
    <button onClick={toggleNavbar} className='md:hidden block'><FaBars/></button>
    </div>
  )
}

export default Navbar