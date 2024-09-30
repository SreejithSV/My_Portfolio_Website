import React from 'react'
import '../components/Contact.css'

const Contact = () => {
  return (
    <div className="flex items-center justify-center  bg-black p-4">
    <div className="head-main rounded-lg shadow-md p-8 max-w-lg w-full">
      <h2 className="rounded-3xl text-2xl text-white font-serif mb-6 text-center">Contact Details</h2>
      <div className="mb-4 ">
        <h3 className="text-lg font-semibold  text-white pl-2">Name</h3>
        <p className="text-white pl-2">SREEJITH SV</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white pl-2">Email</h3>
        <a className="text-white pl-2" href='#'>sreejith.the.prince@gmail.com</a>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white pl-2">Phone</h3>
        <p className="text-white pl-2">7402032142</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white pl-2">Message</h3>
        <p className="text-white pl-2">
          Feel free to reach out to me for any collaborations!
        </p>
      </div>
      <div className="btn rounded-3xl flex justify-center mt-6">
        <a
          href="mailto:sreejith.the.prince@gmail.com"
          className="btnInner  text-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  "
        >
          Send Email
        </a>
      </div>
    </div>
  </div>

  )
}

export default Contact