'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-xl">
      <Sun className="h-5 w-5 rotate-0 scale-0 transition-all dark:-rotate-0 dark:scale-100 text-yellow-200" />
      <Moon className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0 text-blue-900" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
