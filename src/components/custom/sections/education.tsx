import { Title, Text } from '@/components/core/title'
import { education } from '@/components/data/education'
import React from 'react'

const Education = () => {
  return (
    <div>
      <Title text="Education" />

      {education.map((edu, index) => (
        <div key={index} className="text-sm lg:text-lg py-1 pb-6">
          <p className="text-md lg:text-2xl font-semibold pt-1 text-purple-600 dark:text-purple-400">
            {edu.degree ? `${edu.degree} at ${edu.name}` : `${edu.program} at ${edu.name}`}
          </p>
          <p className="italic">{edu.duration}</p>
          <ul className="list-disc pl-4 text-base">
            {edu.activities?.map((activity, activityIndex) => (
              <div key={activityIndex}>
                <Text text={activity} />
              </div>
              // <li key={activityIndex}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Education
