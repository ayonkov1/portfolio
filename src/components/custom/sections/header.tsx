import { ModeToggle } from '@/components/ui/light-dark-toggle'
import Image from 'next/image'
import { SocialButton } from '../social-buttons'

export const Header = () => {
  return (
    <div className="text-left flex items-center lg:flex-row lg:items-center gap-3 lg:gap-20 justify-start lg:justify-center">
      <div className="lg:h-48 lg:w-48 relative w-32 h-32">
        <Image
          src="/profilepic.png"
          alt="Atanas Yonkov Profile Picture"
          className="rounded-lg brightness-110 dark:brightness-125 shadow-2xl drop-shadow-2xl border"
          layout="fill"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-4">
        <h1 className="text-2xl lg:text-5xl font-extrabold relative z-20 text-blue-900 dark:text-blue-400">Atanas Yonkov</h1>
        <p className="text-lg lg:text-2xl py-1 font-mono">software engineer</p>
        <div className="flex gap-1 lg:gap-4 align-middle items-center justify-between lg:justify-start">
          <div className="mr-4 lg:mr-10">
            <ModeToggle />
          </div>
          <SocialButton variant="FileText" link="https://nbviewer.org/github/ayonkov1/cv-resume/blob/main/main.pdf" />
          <SocialButton variant="Github" link="https://github.com/ayonkov1" />
          <SocialButton variant="Linkedin" link="https://www.linkedin.com/in/atanas-yonkov/" />
        </div>
      </div>
    </div>
  )
}
