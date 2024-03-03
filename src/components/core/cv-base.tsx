import React from 'react'
import Summary from '../custom/sections/summary'
import Experience from '../custom/sections/experience'
import Education from '../custom/sections/education'

import TechnicallSkills from '../custom/sections/technical-skills'
import { Header } from './header'
import { Certificates } from '../custom/sections/certificates'

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
