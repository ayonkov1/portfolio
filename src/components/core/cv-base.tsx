import React from 'react'
import Summary from '../custom/sections/summary'
import Experience from '../custom/sections/experience'
import Education from '../custom/sections/education'

import TechnicallSkills from '../custom/sections/technical-skills'
import { Header } from './header'
import { Certificates } from '../custom/sections/certificates'
import { Projects } from '../custom/sections/projects'
import { FooterFlowbite } from './footer'

const CVComponent = () => {
  return (
    <div className="py-1 2xl:px-96">
      <Header />
      <div className="flex flex-col mt-4 gap-4 lg:mt-10 lg:gap-10">
        <Summary />
        <TechnicallSkills />
        <Projects />
        <Certificates />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-between">
          <Experience />
          <Education />
        </div>
      </div>
      <FooterFlowbite />
    </div>
  )
}

export default CVComponent
