// src/components/Projects.js

import React from 'react'
import { BookOpenIcon } from '@heroicons/react/solid'

import { educationList } from '../data'

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-20 mx-auto text-center">
        <BookOpenIcon className="w-10 inline-block mb-4" />
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
            Education
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {educationList.map((education) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
                {/* <p className="leading-relaxed mb-6">{education.name}</p> */}
                <div className="inline-flex items-center">
                  <img
                    alt="education"
                    src={education.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {education.institution}
                    </span>
                    <span className="leading-relaxed mb-6">
                      {education.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {education.date}
                    </span>
                    <p className="leading-relaxed mb-6">
                      {education.description}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
