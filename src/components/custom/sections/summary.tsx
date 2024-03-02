import { Title } from '@/components/core/title'
import { Meteors } from '@/components/ui/meteors'
import React from 'react'

const Summary = () => {
  return (
    <div className="mt-4">
      <div className="py-1 flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="min-w-80">
          <div className="w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-300 to-blue-700 transform shadow-xl drop-shadow-2xl border bg-red-500 rounded-full" />
            <div className="relative shadow-xl bg-slate-100 dark:bg-gray-900 border p-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start backdrop-blur-xl">
              {/* <h1 className="font-bold text-xl text-gray-900 dark:text-white relative z-50">Summary</h1> */}
              <Title text="Summary" />

              <p className="font-normal text-sm lg:text-base text-gray-900 dark:text-slate-200 relative z-50 mt-2 text-justify">
                I am a versatile and accomplished software engineer with a strong foundation in an array of programming languages
                and frameworks, complemented by hands-on experience across various domains. Proficient in JavaScript, TypeScript,
                Python, and SQL, among others, I have successfully leveraged frameworks such as React, Node.js, and Next.js to
                deliver innovative solutions.
              </p>
              <p className="font-normal text-sm lg:text-base text-gray-900 dark:text-slate-200 relative z-50 mt-2">
                From conducting cutting-edge research on user experience in extended reality environments to spearheading the
                development of internal rewards systems and crafting compelling marketing animations, my journey reflects a
                commitment to excellence and a passion for pushing the boundaries of technology. With a Master's in Information
                Studies underway and a track record of impactful contributions in both academic and professional settings, I am
                poised to thrive in any dynamic software engineering role.
              </p>

              {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">Explore</button> */}
              <Meteors number={20} className=" backdrop-blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
