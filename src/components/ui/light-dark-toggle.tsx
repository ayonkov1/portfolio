'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-6 w-6 rotate-0 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
