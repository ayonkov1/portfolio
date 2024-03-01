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
            className="rounded-lg brightness-110 dark:brightness-125 shadow-2xl drop-shadow-2xl border"
            layout="fill"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-5xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-tr text-blue-900 dark:text-blue-400">
            Atanas A. Yonkov
          </h1>
          <p className="text-lg lg:text-2xl py-1 font-mono">software developer</p>
          <div className="flex gap-4 align-middle items-center justify-center lg:justify-start">
            <div className="mr-10">
              <ModeToggle />
            </div>
            <SocialButton variant="FileText" link="https://nbviewer.org/github/ayonkov1/cv-resume/blob/main/main.pdf" />
            <SocialButton variant="Github" link="https://github.com/ayonkov1" />
            <SocialButton variant="Linkedin" link="https://www.linkedin.com/in/atanas-yonkov/" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-10">
        <Summary />
        <TechnicallSkills />
        <Experience />
        <Skills />
        <Education />
      </div>
    </div>
  )
}

export default CVComponent
