import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../ui/light-dark-toggle'
import { SocialButton } from './social-buttons'
import Summary from './sections/summary'

const CVComponent = () => {
  return (
    <div className="py-2 md:px-10 lg:px-20 xl:px-32 2xl:px-72">
      <div className="text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-start">
        <div className="lg:h-64 lg:w-64 relative w-32 h-32">
          <Image
            src="/profilepic.png"
            alt="Atanas Yonkov Profile Picture"
            className="rounded-lg shadow-xl drop-shadow-xl shadow-neutral-700"
            layout="fill"
            priority
          />
        </div>
        {/* <div className="h-64 w-64 relative">
          <Image src="/profilepic.png" alt="Picture of the author" layout="fill" className="rounded-lg object-cover" priority />
        </div> */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-tr from-emerald-400 to-cyan-400">
            Atanas Yonkov
          </h1>
          <p className="text-lg lg:text-3xl py-1">Junior Software Developer</p>
          <div className="flex gap-4 align-middle items-center justify-center lg:justify-start">
            <ModeToggle />
            <SocialButton variant="Github" />
            <SocialButton variant="Linkedin" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-3 lg:gap-10 lg:py-10">
        <div>
          <Summary />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
          <Summary />
          <Summary />
        </div>
      </div>
    </div>
  )
}

export default CVComponent
