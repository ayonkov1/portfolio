'use client'

import Summary from '../custom/sections/summary'
import Experience from '../custom/sections/experience'
import Education from '../custom/sections/education'

import TechnicallSkills from '../custom/sections/technical-skills'
import { Header } from './header'
import { Certificates } from '../custom/sections/certificates'
import { Projects } from '../custom/sections/projects'
import { FooterFlowbite } from './footer'
import { FloatingNav } from '../ui/floating-navbar'

import { SquareGantt, GraduationCap, Paintbrush, Binary, ShieldCheck } from 'lucide-react'

import { useRef } from 'react'

const CVComponent = () => {
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const certificatesRef = useRef<HTMLDivElement>(null)

  const sectionRefs = {
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    education: educationRef,
    certificates: certificatesRef,
  }

  const navItems = [
    {
      name: 'Experience',
      icon: <SquareGantt className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onclick: () => {
        sectionRefs.experience.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      name: 'Projects',
      icon: <Paintbrush className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onclick: () => {
        sectionRefs.projects.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      name: 'Skills',
      icon: <Binary className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onclick: () => {
        sectionRefs.skills.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      name: 'Education',
      icon: <GraduationCap className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onclick: () => {
        sectionRefs.education.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      name: 'Certificates',
      icon: <ShieldCheck className="h-5 w-5 text-neutral-500 dark:text-white" />,
      onclick: () => {
        sectionRefs.certificates.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
  ]

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
      {/* <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div> */}
      <Header />
      <div className="flex flex-col mt-4 gap-4 lg:gap-6">
        <Summary />
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <TechnicallSkills />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={certificatesRef}>
          <Certificates />
        </div>
      </div>
      <FooterFlowbite />
    </div>
  )
}

export default CVComponent
