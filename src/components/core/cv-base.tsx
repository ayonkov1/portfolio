import React from 'react'
import Summary from '../custom/sections/summary'
import Experience from '../custom/sections/experience'
import Education from '../custom/sections/education'

import TechnicallSkills from '../custom/sections/technical-skills'
import { Header } from './header'
import { Certificates } from '../custom/sections/certificates'
import { Projects } from '../custom/sections/projects'

const CVComponent = () => {
  return (
    <div className="py-1">
      <Header />
      <div className="flex flex-col mt-4 gap-4 lg:mt-10 lg:gap-10">
        <Summary />
        <TechnicallSkills />
        <Projects />
        <Certificates />
        <div className="flex flex-col 2xl:flex-row max-l-full 2xl:[&>div]:max-w-xl lg:gap-10 justify-between">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  )
}

export default CVComponent
