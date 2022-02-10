// src/components/Contact.js

import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-right text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <div className="relative mb-5">
            <p className="text-right leading-relaxed mb-5">
              Feel free to contact me for any additional information or to set
              up a conversation.
            </p>
          </div>
          <p className="text-right leading-relaxed mb-5">+45 60 11 07 16</p>
          <p className="text-right mb-5">C.lyngbjerg@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/christoffer-bjerge/"
            className="text-right leading-relaxed mb-5"
          >
            LinkedIn
          </a>
          <p className="text-right mb-5">København N</p>
        </div>
      </div>
    </section>
  )
}
