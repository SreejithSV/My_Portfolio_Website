import React from 'react'
import '../components/Project.css'
import pro1 from '../images/pro1.jpeg'
import pro2 from '../images/pro2.jpeg'
import pro3 from '../images/pro3.jpg'
import pro4 from '../images/pro4.jpeg'
import pro5 from '../images/pro5.jpeg'
import pro6 from '../images/pro6.jpeg'

const Project = () => {
  return (
    <div className='pro-main flex flex-wrap gap-20 justify-center m-0 md:mt-8 '>
      <div class=" pro-head flex flex-col items-center  border-gray-200 md:mt-0 mt-14 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro1} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-serif  bg-transparent dark:text-white">Do you like see my first website?</h5>
        <br />
        <br />
        <a class="btn " href="https://sreejithsv.github.io/tourism-website/">
            <span class="btnInner text-center">click me </span>
        </a>
    </div>
</div>

<div class=" pro-head flex flex-col items-center  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro2} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-serif  bg-transparent dark:text-white">Do you like see my portfolio?</h5>
        <br />
        <br />
        <a class="btn " href="">
            <span class="btnInner text-center">click me </span>
        </a>
    </div>
</div>

<div class=" pro-head flex flex-col items-center  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro3} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-sans  bg-transparent dark:text-white">Do you like see my website?</h5>
        <br />
        <br />
        <a class="btn " href="#">
            <span class="btnInner text-center"> don't click me </span>
        </a>
    </div>
</div>


<div class=" pro-head flex flex-col items-center  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro4} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-sans  bg-transparent dark:text-white">Do you like see my website?</h5>
        <br />
        <br />
        <a class="btn " href="#">
            <span class="btnInner text-center"> don't click me </span>
        </a>
    </div>
</div>

<div class=" pro-head flex flex-col items-center  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro5} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-sans  bg-transparent dark:text-white">Do you like see my website?</h5>
        <br />
        <br />
        <a class="btn " href="#">
            <span class="btnInner text-center"> don't click me </span>
        </a>
    </div>
</div>

<div class=" pro-head flex flex-col items-center  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img class="rounded-t-lg pro-img ed-image " src={pro6} alt="" />
    <div class="flex flex-col  p-4">
        <h5 class="mb-2 text-2xl  tracking-tight font-sans  bg-transparent dark:text-white">Do you like see my website?</h5>
        <br />
        <br />
        <a class="btn " href="#">
            <span class="btnInner text-center"> don't click me </span>
        </a>
    </div>
</div>
    </div>
    
  )
}

export default Project

