import { SubTitle, Title, Text } from '@/components/core/title'
import React from 'react'

const projects = [
  {
    title: 'Languages',
    description: 'JavaScript, TypeScript, Python, SQL(MySQL), HTML/CSS, R',
  },
  {
    title: 'Frameworks',
    description:
      'React, Redux (Thunk), Node.js, Next.js, Material-UI, FastAPI, Knex.js, Apollo GraphQL, D3.js, Chart.js. Tailwind CSS',
  },
  {
    title: 'Developer Tools',
    description: 'Git, Docker, Google Cloud Platform, VS Code, Eclipse, Postman',
  },
]

const TechnicallSkills = () => {
  return (
    <div>
      <Title text="Technical Skills" />

      <div className="py-1 flex flex-col lg:flex-row gap-1 lg:gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 my-2 shadow-xl bg-white dark:bg-black">
            <SubTitle text={project.title} />
            <Text text={project.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnicallSkills
