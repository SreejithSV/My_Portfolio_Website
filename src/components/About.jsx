import React from 'react'
import '../components/About.css'

const About = () => {
  return (
    <div className='flex flex-wrap gap-6 ed-head justify-center mt-8 '>
       <div >
        <h1 className='text-white text-center text-3xl'>CAREER OVERVIEW</h1>
        <p className='text-white text-center text-xl pt-5'>"I am a recent Computer Science Engineering graduate with a strong proficiency in Python programming and
            full-stack web development. With skills in frontend technologies including HTML, CSS, JavaScript, and Bootstrap and
            react , I am currently seeking opportunities to leverage my expertise in a professional setting as I complete my
            Bachelor of Engineering degree."</p>
        </div>

    <div class="border-neutral-50 grid-cols-3 max-w-sm rounded-lg shadow lan-main">
       
       <h1 className='text-white text-2xl text-center font-serif'>LANGUAGES KNOWN</h1> <br /> <br />
            
    <h1 class="btn ">
            <span class="btnInner text-center">ENGLISH </span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">MALAYALAM</span>
        </h1>
        <h1 class="btn " >
            <span class="btnInner text-center">TAMIL</span>
        </h1>
    </div>
    
    <div class=" grid-cols-3 max-w-sm rounded-lg shadow lan-main ">

    <h1 className='text-white text-2xl text-center font-serif'> PROGRAMMIG LANGUAGES KNOWN</h1> <br />
        
        <h1 class="btn ">
            <span class="btnInner text-center">click me </span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">click me </span>
        </h1>
        <h1 class="btn " >
            <span class="btnInner text-center">click me </span>
        </h1>

    </div>
    
    <div class=" grid-cols-3 max-w-sm  rounded-lg shadow lan-main">

    <h1 className='text-white text-2xl text-center font-serif'>HOBBIES</h1> <br /><br />
      
    <h1 class="btn ">
            <span class="btnInner text-center">KEYBOARD PLAYING</span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">EXPLORING</span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">TRAVELLING</span>
        </h1>
    </div>
    
    <div class=" grid-cols-3 max-w-sm  rounded-lg shadow lan-main">

    <h1 className='text-white text-2xl text-center font-serif'>QUALIFICATION</h1> <br /><br />
    
    <h1 class="btn " >
            <span class="btnInner text-center">HSC</span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">B.E/B.TECH</span>
        </h1>
        <h1 class="btn ">
            <span class="btnInner text-center">MBA(PARSING)</span>
        </h1>

    </div>
    
   

                 
    </div>
    
    
    
       
    
  )
}

export default About