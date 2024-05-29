import React from 'react'
import { Github, Linkedin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Variants = {
  Github: React.ComponentType
  Linkedin: React.ComponentType
  FileText: React.ComponentType
}

export function SocialButton({ variant, link }: { variant: keyof Variants; link?: string }) {
  const IconComponent = {
    Github: Github,
    Linkedin: Linkedin,
    FileText: FileText,
  }[variant]

  return (
    link && (
      <Link href={link} target="_blank">
        <Button
          variant="outline"
          size="icon"
          className={`  
        dark:text-blue-400`}
        >
          <IconComponent className="h-5 w-5" />
        </Button>
      </Link>
    )
  )
}
