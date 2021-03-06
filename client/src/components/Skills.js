import React from 'react'
import { DesktopComputerIcon } from '@heroicons/react/solid'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <DesktopComputerIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A selection of relevant languages, frameworks etc I have a theoretical and practical experience with. Hover over each for a small description.
          </p>
        </div>
        {
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full group">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center ">
                  <span>
                    <p className="title-font font-medium text-white">
                      {skill.title}
                    </p>

                    <p className="hidden text-base leading-relaxed mb-5 group-hover:block">
                      {skill.text}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  )
}
