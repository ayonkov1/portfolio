import { Title } from '@/components/core/title'
import React from 'react'

interface Role {
  title?: string
  description: string
}

interface Experience {
  title: string
  company: string
  roles: Role[]
  duration: string
}

const experiences: Experience[] = [
  {
    title: 'Master Thesis Researcher',
    company: 'CWI',
    roles: [
      {
        description: 'Developed RESTful APIs and integrated with databases using Node.js and Express.',
      },
    ],
    duration: 'April 2022 – Aug. 2023',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Merkle',
    roles: [
      {
        title: 'Frontend Developer',
        description: 'Worked on building responsive user interfaces using React and styled components.',
      },
      {
        title: 'Backend Developer',
        description: 'Developed RESTful APIs and integrated with databases using Node.js and Express.',
      },
    ],
    duration: 'April 2022 – Aug. 2023',
  },
]

function ExperienceSection() {
  return (
    <div>
      <Title text="Experience" />

      {experiences.map((exp, index) => (
        <div key={index} className="text-sm lg:text-lg py-1 pb-10">
          <p className="text-lg lg:text-2xl font-semibold pt-1">{`${exp.title} at ${exp.company}`}</p>
          <p className="italic">{exp.duration}</p>
          <div className="pt-4">
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <p className="font-semibold">{role.title}</p>
                <ul className="list-disc pl-4">
                  <li>{role.description}</li>
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
