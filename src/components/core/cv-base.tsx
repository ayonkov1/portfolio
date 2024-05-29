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
    <div
      className={`
      py-1
      mx-0 
      sm:mx-12
      md:mx-24
      lg:mx-48
      xl:mx-72
      2xl:mx-96
      `}
    >
      <Header />
      <div className="flex flex-col mt-4 gap-4 lg:mt-10 lg:gap-6">
        <Summary />
        <Experience />
        <TechnicallSkills />
        <Projects />
        <Education />
        <Certificates />
      </div>
      <FooterFlowbite />
    </div>
  )
}

export default CVComponent
