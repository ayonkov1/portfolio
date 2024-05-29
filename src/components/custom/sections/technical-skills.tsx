import { SubTitle, Title, Text } from '@/components/core/title'
import { title } from 'process'
import React from 'react'

const projects = [
  {
    title: 'Languages',
    description: 'JavaScript, TypeScript, HTML/CSS, Python, SQL(MySQL), Bash*, C#*, R*, ',
  },
  {
    title: 'Frameworks',
    description:
      'React, Redux (Thunk), Node.js, Next.js, Material-UI, Knex.js, SFCC, Apollo GraphQL, Tailwind CSS, FastAPI*, D3.js*, Chart.js*, numpy*, pandas*, matplotlib*',
  },
  {
    title: 'Tools',
    description: 'Git, VS Code, Postman, Unity*, Eclipse*, MatLab**',
  },
  { title: 'Concepts', description: 'OOP, Agile Development, Scrum' },
]

const TechnicallSkills = () => {
  return (
    <div>
      <div className="py-1 flex flex-col lg:flex-row flex-grow-0 lg:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
            border p-3 shadow-xl 
          bg-slate-50 dark:bg-slate-800
            lg:rounded-lg last:rounded-b-xl first:rounded-t-xl`}
          >
            <SubTitle text={project.title} />
            <Text text={project.description} />
          </div>
        ))}
      </div>
      <p className="text-xs">* - Advanced Newbie</p>
      <p className="text-xs">** - Newbie</p>
    </div>
  )
}

export default TechnicallSkills
