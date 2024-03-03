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
    <Button variant="outline" size="icon">
      {link ? (
        <Link href={link} target="_blank">
          <IconComponent className="h-6 w-6" />
        </Link>
      ) : (
        <IconComponent className="h-6 w-6" />
      )}
    </Button>
  )
}
