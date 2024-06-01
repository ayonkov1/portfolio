import { ModeToggle } from '@/components/ui/light-dark-toggle'
import Image from 'next/legacy/image'
import { SocialButton } from './social-buttons'

export const Header = () => {
  return (
    <div className="text-left flex lg:flex-row gap-5 lg:gap-10 justify-start">
      <div className="lg:h-52 lg:w-52 relative w-32 h-32">
        <Image
          src="/profilepic.webp"
          alt="Atanas Yonkov Profile Picture"
          className="rounded-3xl brightness-110 shadow-xl border"
          layout="fill"
          quality={75}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2 justify-between">
        <h1 className="text-xl lg:text-4xl font-extrabold relative z-20 text-blue-900 dark:text-blue-400">Atanas Yonkov</h1>
        <p className="text-base lg:text-xl">
          software engineer <br /> from Sofia, Bulgaria 🇧🇬
        </p>
        <p className="hidden lg:block text-base lg:text-xl">📍 living in Amsterdam, The Netherlands</p>

        <div className="flex gap-1 lg:gap-4 align-middle items-center justify-between lg:justify-start">
          <div className="mr-4 lg:mr-10 ">
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
