import { Title } from '@/components/core/title'
import React from 'react'
import { experiences } from '@/components/data/experiences'

function ExperienceSection() {
  return (
    <div>
      <Title text="Experience" />

      {experiences.map((exp, index) => (
        <div key={index} className="text-sm lg:text-lg py-1 pb-6">
          <p className="text-md lg:text-2xl font-semibold pt-1 text-green-900 dark:text-purple-400">{`${exp.title} at ${exp.company}`}</p>
          <p className="italic">{exp.duration}</p>
          <div className="">
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <p className="font-semibold pt-4">{role.title}</p>
                <ul className="list-disc pl-4 text-base">
                  {role.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
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
