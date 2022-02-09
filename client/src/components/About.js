// src/components/About.js

import React from "react";

export default function About() {
    return (
      <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, My name is Christoffer Bjerge.
            <br className="hidden lg:inline-block" /> This is my portfolio 
          </h1>
          <p className="mb-8 leading-relaxed">
          As a new developer I am looking first and foremost to be a part of a quality oriented team that prioritizes efficiency and teamwork, where i can acquire new skills and habits from my coworkers. 
        I believe mutual respect and understanding is fundamental for any team and I always try to add to this with an open disposition and good humor.   
          </p>
          <p className="mb-8 leading-relaxed">
           I am detail-oriented, inquisitive and enthusiastic. 
           I have a strong foundational knowledge of principals of design and patterns which means that I easily can learn the details of new languages, tools and frameworks. 
           I like to learn new things and always aim to write clean and future proof code in any language.
          </p>
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div> */}
        </div>
        <div className="md:max-w-md md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="clb_pic.jpeg"
          />
        </div>
      </div>
    </section>
        /* <p>
        
        As a new developer I am looking first and foremost to be a part of a quality oriented team that prioritizes efficiency and teamwork, where i can acquire new skills and habits from my coworkers. 
        I believe mutual respect and understanding is fundamental for any team and I always try to add to this with an open disposition and good humor.  
        As a person I am detail-oriented, inquisitive and enthusiastic. 
        I enjoy working on complicated challenges with other skilled developers. 
        During both my education and internship I have had the privilege of working with a large set of different people from different background from whom I have learned a lot.
        
        // I have solid experience with Java, SQL, full stack JavaScript as well UP and Scrum to name a few. From my internship at a smaller startup I bring practical experience with TypeScript, PostgreSQL, React, MongoDB, Docker and more. I have a strong foundational knowledge of principals of design and patterns which means that I easily can learn the details of new languages, tools and frameworks. I like to learn new things and always aim to write clean and future proof code in any language.
        </p>*/ 
      );
}