import React from 'react'
import '../components/Education.css'
import sslc from '../images/sslc.jpg'
import hsc from '../images/hsc.jpeg'
import college from '../images/college.jpg'
import python from '../images/python.jpg'
import node from '../images/node.jpeg'
import angular from '../images/angular.jpeg'
const Education = () => {
  return (
    <div className='flex flex-wrap gap-20 ed-head justify-center m-0 md:mt-8 '>
      

<div class="border-neutral-50 grid-cols-3 max-w-sm rounded-lg shadow ed-start">
    <a href="#">
        <img class="rounded-t-lg  ed-image " src={sslc} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> SSLC..... (2017-1018)</h5> <br />
        </a>
        <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400"> Govt Higher.Secondary School Palukal, Kanyakumari.dist| | Achieved (78.2%)</p> <br />
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm rounded-lg shadow ed-start">
    <a href="#">
        <img class=" ed-image rounded-t-lg" src={hsc} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HSC..... (2018-2020)</h5><br />
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Govt Higher.Secondary School Palukal, Kanyakumari.dist| | Achieved (78.2%)</p>
        <br />
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm  rounded-lg shadow ed-start">
    <a href="#">
        <img class="rounded-t-lg fit-contain ed-image " src={college} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">B.E/B.TECH.....(2020-2024)</h5> <br />
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Maria College of Engineering and Technology aAttoor, Kanyakumari.dist| | Achieved (8.2 CGPA)</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm  rounded-lg shadow ed-start">
    <a href="#">
        <img class="rounded-t-lg fit-contain ed-image " src={college} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MBA.....(2024-PARSING)</h5> <br />
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Maria College of Engineering and Technology aAttoor, Kanyakumari.dist| | Achieved (8.2 CGPA)</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm ed-head rounded-lg shadow ed-start">
    <a href="#">
        <img class="rounded-t-lg ed-image " src={python} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PYTHON FULL-STACK......(2024)</h5>
        </a>
        <br />
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Networkz Systems Thampanoor , trivandrum.dist| | Achieved 8.2 CGPA</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm  rounded-lg shadow ed-start">
    <a href="#">
        <img class="rounded-t-lg ed-image " src={node} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NODE.JS MERN-STACK.....(2024) </h5>
        </a>
        <br />
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Askabhi Technologies Private Limited. Industry, Nagarcoil.dist</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class=" grid-cols-3 max-w-sm rounded-lg shadow ed-start">
    <a href="#">
        <img class=" ed-image rounded-t-lg" src={angular} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ANGULAR.JS MEAN-STACK.....(2024)</h5><br />
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> </p>
        <br />
        <br />
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 bg-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



   
</div>

    
  )
}

export default Education

