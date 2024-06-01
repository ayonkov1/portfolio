import { SubTitle, Title, Text } from '@/components/core/title'
import React from 'react'

const projects = [
  {
    title: 'Languages',
    description: 'JavaScript, TypeScript, HTML/CSS, Python, SQL(MySQL), Bash*, C#*, R*',
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
      <div className="inline-flex items-center justify-start w-full mb-2">
        <span className="pr-3">
          <Title text="SKILLS" />
        </span>
        <hr className="w-full h-px bg-blue-900 dark:bg-blue-300 border-0" />
      </div>

      <div className="py-1 flex flex-wrap flex-col lg:flex-row flex-grow lg:gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
            border px-4 py-2 shadow-md 
          bg-slate-50 dark:bg-slate-800
            lg:rounded-2xl last:rounded-b-2xl first:rounded-t-2xl 
            basis-auto flex-grow`}
          >
            <SubTitle text={project.title} />
            <Text text={project.description} />
          </div>
        ))}
      </div>
      <Text>
        * - slightly advanced newbie <br /> ** - newbie
      </Text>
    </div>
  )
}

export default TechnicallSkills
