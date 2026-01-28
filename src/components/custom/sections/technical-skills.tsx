import { SubTitle, Title, TitleWithDivider } from '@/components/core/title'
import React from 'react'
import { skills } from '../../data/skills'

const TechnicallSkills = () => {
  return (
    <div>
      <TitleWithDivider>
        <Title text="SKILLS" />
      </TitleWithDivider>
      <div className="space-y-3 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:gap-4 sm:items-end">
            <div className="sm:min-w-[200px]">
              <SubTitle text={skill.title} />
            </div>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnicallSkills
