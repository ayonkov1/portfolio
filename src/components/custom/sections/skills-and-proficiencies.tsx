import { Title } from '@/components/core/title'
import React from 'react'

const skills: string[] = [
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
  'Lorem ipsum dolor sit amet, adipisicing sint dolore occaecat Lorem nisi cillum sint dolore incididunt',
]

const Skills = () => {
  return (
    <div>
      <Title text="Skills and Proficiencies" />

      <ul className="text-sm lg:text-lg py-1 list-disc pl-4">
        {skills.map((skill, index) => (
          <li className="list-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
