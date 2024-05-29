import { ModeToggle } from '@/components/ui/light-dark-toggle'
import Image from 'next/legacy/image'
import { SocialButton } from './social-buttons'

export const Header = () => {
  return (
    <div className="text-left flex items-center lg:flex-row lg:items-center gap-5 lg:gap-20 justify-center">
      <div className="lg:h-48 lg:w-48 relative w-28 h-28">
        <Image
          src="/profilepic.png"
          alt="Atanas Yonkov Profile Picture"
          className="rounded-lg brightness-110 shadow-xl border"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-4">
        <h1 className="text-2xl lg:text-5xl font-extrabold relative z-20 text-blue-900 dark:text-blue-400">Atanas Yonkov</h1>
        <p className="text-lg lg:text-2xl py-1 font-mono">software engineer</p>
        <div className="flex gap-1 lg:gap-4 align-middle items-center justify-between lg:justify-start">
          <div className="mr-4 lg:mr-10">
            <ModeToggle />
          </div>

          <SocialButton variant="FileText" link="resume.pdf" />
          <SocialButton variant="Github" link="https://github.com/ayonkov1" />
          <SocialButton variant="Linkedin" link="https://www.linkedin.com/in/atanas-yonkov/" />
        </div>
      </div>
    </div>
  )
}
