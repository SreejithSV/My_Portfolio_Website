import React from 'react'
import img from '../images/hero.jpg'
import { FaTwitter, FaFacebook, FaInstagram,FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center pt-24 home-head-main'>
      <div className='md:w-1/2 flex flex-col  md:mt-32 pl-8'>
      <h1 className='text-white text-5xl font-serif justify-center md:pt-9'>
      hi, <br/> Im Sreejith SV <p className='text-2xl '>
        Full-stack developer</p>
        </h1>
        <br />
        <div className='flex flex-row'>
          <a href="https://x.com/sreejith_prince" className='pr-7 '><FaTwitter className='text-white hover:text-blue-600'/></a>
          <a href="https://www.facebook.com/sreejith.the.prince" className='pr-7'><FaFacebook className='text-white hover:text-blue-600'/></a>
          <a href="https://www.instagram.com/liteset_sreejith/" className='pr-7'><FaInstagram className='text-white hover:text-blue-600'/></a>
          <a href="https://www.linkedin.com/in/sreejith-the-prince/" className='pr-7'><FaLinkedin className='text-white hover:text-blue-600'/></a>
          <a href="https://github.com/SreejithSV" className='pr-7'><FaGithub className='text-white hover:text-blue-600'/></a>
        </div>
        </div>

        <img className='md:w-1/3 pb-3' src={img} />
    </div>
  )
}
export default Home