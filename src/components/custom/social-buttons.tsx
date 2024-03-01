import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Variants = {
  Github: React.ComponentType
  Linkedin: React.ComponentType
}

export function SocialButton({ variant }: { variant: keyof Variants }) {
  const IconComponent = {
    Github: Github,
    Linkedin: Linkedin,
  }[variant]

  return (
    <Button variant="outline" size="icon">
      <IconComponent className="h-4 w-4" />
    </Button>
  )
}
