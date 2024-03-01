import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../ui/light-dark-toggle'
import { SocialButton } from './social-buttons'

const CVComponent = () => {
  return (
    <div className="text-center flex gap-10">
      <div>
        <Image
          src="/profilepic.png"
          alt="Atanas Yonkov Profile Picture"
          className="rounded-lg shadow-xl drop-shadow-xl shadow-neutral-700"
          width={200}
          height={24}
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold sm:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-700">
          Atanas Yonkov
        </h1>
        <p className="text-3xl py-1">Junior Software Developer</p>
        <div className="flex gap-4 align-middle items-center justify-center">
          <ModeToggle />
          <SocialButton variant="Github" />
          <SocialButton variant="Linkedin" />
        </div>
      </div>
    </div>
  )
}

export default CVComponent
