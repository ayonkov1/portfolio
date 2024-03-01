import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../ui/light-dark-toggle'
import { SocialButton } from './social-buttons'
import Summary from './sections/summary'
import Experience from './sections/experience'
import Education from './sections/education'

import Skills from './sections/skills-and-proficiencies'
import TechnicallSkills from './sections/technical-skills'

const CVComponent = () => {
  return (
    <div className="py-2 md:px-10 lg:px-20 xl:px-32 2xl:px-72">
      <div className="text-center lg:text-left flex flex-col items-center lg:flex-row lg:items-center gap-10 justify-center">
        <div className="lg:h-48 lg:w-48 relative w-32 h-32">
          <Image
            src="/profilepic.png"
            alt="Atanas Yonkov Profile Picture"
            className="rounded-lg shadow-xl drop-shadow-xl shadow-neutral-700"
            layout="fill"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-tr from-emerald-400 to-cyan-400">
            Atanas Yonkov
          </h1>
          <p className="text-lg lg:text-3xl py-1 font-bold">Software Developer</p>
          <div className="flex gap-4 align-middle items-center justify-center lg:justify-start">
            <div className="mr-10">
              <ModeToggle />
            </div>
            <SocialButton variant="Github" />
            <SocialButton variant="Linkedin" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-10">
        <Summary />
        <TechnicallSkills />
        <div className="flex flex-row gap-16">
          <div className="flex flex-2">
            <Experience />
          </div>
          <div className="flex flex-1">
            <Skills />
          </div>
        </div>
        <Education />
      </div>
    </div>
  )
}

export default CVComponent
