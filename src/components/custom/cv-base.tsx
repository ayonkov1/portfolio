import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../ui/light-dark-toggle'

const CVComponent = () => {
  return (
    <div className="text-center flex gap-4">
      <div>
        <Image
          src="/profilepic.png"
          alt="Vercel Logo"
          className="rounded-lg shadow-xl drop-shadow-xl "
          width={200}
          height={24}
          priority
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold sm:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
          Atanas Yonkov
        </h1>
        <p className="text-3xl py-1">Junior Software Engineer</p>
        <ModeToggle />
      </div>
    </div>
  )
}

export default CVComponent
