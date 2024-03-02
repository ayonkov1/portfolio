import React from 'react'
import { ModeToggle } from '../ui/light-dark-toggle'
import { SocialButton } from './social-buttons'
import Summary from './sections/summary'
import Experience from './sections/experience'
import Education from './sections/education'

import Skills from './sections/skills-and-proficiencies'
import TechnicallSkills from './sections/technical-skills'
import { Header } from './sections/header'
import { Certificates } from './sections/certificates'

const CVComponent = () => {
  return (
    <div className="py-1">
      <Header />
      <div className="flex flex-col mt-4 gap-4 lg:mt-10 lg:gap-10">
        <Summary />
        <TechnicallSkills />
        <Certificates />
        <Experience />
        {/* <Skills /> */}
        <Education />
      </div>
    </div>
  )
}

export default CVComponent
