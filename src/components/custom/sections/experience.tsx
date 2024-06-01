import { Title, Text } from '@/components/core/title'
import React from 'react'
import { experiences } from '@/components/data/experiences'

function ExperienceSection() {
  return (
    <div>
      <div className="inline-flex items-center justify-start w-full">
        <span className="pr-3">
          <Title text="EXPERIENCE" />
        </span>
        <hr className="w-full h-px bg-blue-900 dark:bg-blue-300 border-0" />
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="text-sm lg:text-lg py-1 pb-2">
          <p className="text-md lg:text-2xl font-semibold pt-1 text-blue-500 dark:text-blue-200">{`${exp.title} at ${exp.company}`}</p>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 text-sm">
            <p className="font-bold">{exp.location}</p>
            <p className="italic ">{exp.duration}</p>
          </div>
          <div className="">
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <p className="font-semibold pt-2">{role.title}</p>
                <ul className="list-disc pl-4 text-base">
                  {role.description.map((desc, index) => (
                    <li key={index}>
                      <Text text={desc} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceSection
