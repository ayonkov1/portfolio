import { Title, Text } from '@/components/core/title'
import { education } from '@/components/data/education'
import React from 'react'

const Education = () => {
  return (
    <div>
      <div className="inline-flex items-center justify-start w-full">
        <span className="pr-3">
          <Title text="EDUCATION" />
        </span>
        <hr className="w-full h-px bg-blue-900 dark:bg-blue-300 border-0" />
      </div>
      {education.map((edu, index) => (
        <div key={index} className="text-sm lg:text-lg py-1 pb-2">
          <p className="text-md lg:text-2xl font-semibold pt-1 text-blue-500 dark:text-blue-200 hyphens-auto">
            {edu.degree ? `${edu.degree}` : `${edu.program}`}
          </p>
          <div className="flex flex-col gap-1 lg:gap-4 text-sm pb-2">
            <p className="font-bold">{edu.name}</p>
            <p className="italic ">{edu.duration}</p>
          </div>
          <p className="font-bold text-sm">{edu.GPA}</p>

          <ul className="list-disc pl-4 text-base">
            {edu.activities?.map((activity, activityIndex) => (
              <li key={activityIndex}>
                <Text text={activity} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Education
