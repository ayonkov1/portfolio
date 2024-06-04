import { SubTitle, Title, Text, TitleWithDivider } from '@/components/core/title'
import React from 'react'
import { skills } from '../../data/skills'

const TechnicallSkills = () => {
  return (
    <div>
      <TitleWithDivider>
        <Title text="SKILLS" />
      </TitleWithDivider>
      <div className="py-1 flex flex-wrap flex-col lg:flex-row flex-grow lg:gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
            border px-4 py-2 shadow-md 
          bg-slate-50 dark:bg-slate-800
            lg:rounded-2xl last:rounded-b-2xl first:rounded-t-2xl 
            basis-auto flex-grow`}
          >
            <SubTitle text={skill.title} />
            <Text text={skill.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnicallSkills
