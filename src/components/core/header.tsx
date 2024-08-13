import { ModeToggle } from '@/components/ui/light-dark-toggle'
import Image from 'next/legacy/image'
import { SocialButton } from './social-buttons'
import { ReactNode } from 'react'
import { FooterLink } from 'flowbite-react'
import Link from 'next/link'

export const Header = (): ReactNode => {
  return (
    <div className="text-left flex lg:flex-row gap-5 lg:gap-10 justify-start">
      <div className="lg:h-52 lg:w-52 relative w-32 h-32">
        <Image
          priority
          src="/profilepic.webp"
          alt="Atanas Yonkov Profile Picture"
          className="rounded-3xl brightness-110 shadow-xl border"
          layout="fill"
          quality={75}
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2 justify-between">
        <h1 className="text-xl lg:text-4xl font-extrabold relative z-20 text-blue-900 dark:text-blue-400">Atanas Yonkov</h1>
        <p className="text-base lg:text-xl">software engineer from Sofia, Bulgaria</p>
        <div className="hidden lg:flex text-sm lg:text-base lg:flex-col lg:gap-1">
          <Link
            className="hover:underline underline-offset-auto decoration-slate-700 transition-transform"
            href="tel:+359879385835"
          >
            mobile: +359 (0) 879 385 835
          </Link>
          <Link
            className="hover:underline underline-offset-auto decoration-slate-700 transition-transform"
            href="mailto:atanasyonkov1@gmail.com"
          >
            e-mail: atanasyonkov1@gmail.com
          </Link>
        </div>

        <div className="flex gap-1 lg:gap-4 align-middle items-center justify-between lg:justify-start">
          <div className="mr-4 lg:mr-10 ">
            <ModeToggle />
          </div>

          <SocialButton variant="FileText" link="/ayonkov-cv-resume.pdf" />
          <SocialButton variant="Github" link="https://github.com/ayonkov1" />
          <SocialButton variant="Linkedin" link="https://www.linkedin.com/in/atanas-yonkov/" />
        </div>
      </div>
    </div>
  )
}
