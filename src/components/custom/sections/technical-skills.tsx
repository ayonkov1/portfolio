import React from 'react'

const projects = [
  {
    title: 'Languages',
    description: 'JavaScript, TypeScript, Python, SQL (MySQL), HTML/CSS, R',
  },
  {
    title: 'Frameworks',
    description: 'React, Redux (Thunk), Node.js, Next.js, Material-UI, FastAPI, Knex.js, Apollo GraphQL. D3.js, Chart.js',
  },
  {
    title: 'Developer Tools',
    description: 'Git, Docker, Google Cloud Platform, VS Code, Eclipse, Postman',
  },
]

const TechnicallSkills = () => {
  return (
    <div>
      <p className="text-lg lg:text-3xl py-1 font-bold">Technical Skills</p>
      <div className="py-1 flex gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 my-2 shadow-xl bg-white dark:bg-black">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnicallSkills
