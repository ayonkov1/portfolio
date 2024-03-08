import { Title } from '@/components/core/title'
import React from 'react'

const Summary = () => {
  return (
    <div className="lg:mt-4">
      <div className="py-1 flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="min-w-80">
          <div className="w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-300 to-blue-700 transform shadow-xl border bg-red-500 rounded-xl" />
            <div className="relative shadow-xl bg-slate-50 dark:bg-slate-800 border p-6 h-full overflow-hidden rounded-xl flex flex-col justify-end items-start backdrop-blur-xl">
              <Title text="Summary" />

              <div className="flex flex-col lg:flex-row gap-1 lg:gap-10">
                <p className="font-normal text-sm lg:text-base text-gray-900 dark:text-slate-200 relative z-50 mt-2">
                  I am a versatile software engineer/developer (up for you to decide) with a strong foundation in an array of
                  programming languages and frameworks, complemented by hands-on experience across various domains. With passion
                  about Front-end and strong foundation in JavaScript, TypeScript, Python, and SQL, among others, I have
                  successfully leveraged frameworks such as React, Node.js, and Next.js to deliver innovative solutions.
                </p>
                <p className="font-normal text-sm lg:text-base text-gray-900 dark:text-slate-200 relative z-50 mt-2">
                  From cutting-edge research on user experience in extended reality environments to the development of internal
                  rewards systems and crafting compelling marketing animations, my journey reflects a commitment to excellence and
                  a passion for pushing the boundaries of technology. With a Master's in Information Studies underway and a track
                  record of contributions in both academic and professional settings, I am poised to thrive in any dynamic
                  software engineering role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
