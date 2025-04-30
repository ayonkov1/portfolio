import { Text } from '@/components/core/title'
import Link from 'next/link'
import React from 'react'

const Summary = () => {
  return (
    <div className="lg:mt-4">
      <div className="py-1 flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="min-w-80">
          <div className="w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-blue-700 to-pink-500 transform shadow-xl border bg-red-500 rounded-3xl" />
            <div className="relative shadow-xl bg-slate-50 dark:bg-slate-800 dark:bg-opacity-85 border py-3 px-4 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-start">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <Text>
                  Front-end-focused software engineer with a background in graphic design and a strong foundation in JavaScript
                  and TypeScript. My design roots gave me a deep appreciation for smooth, intuitive user experiences — that’s
                  still what drives me today. I’ve worked with tools like React, Node.js, and Next.js to build responsive,
                  user-first interfaces.
                </Text>
                <Text>
                  While I don’t claim to know everything, I’m naturally curious, quick to learn, and always adapting. If I can get
                  my hands dirty by doing something, I will definetely do so. I do my best work when I’m inspired by what I’m
                  building — that’s when ideas flow and output follows. As{' '}
                  <Link
                    href="https://anthonyalicea.com/"
                    as="https://anthonyalicea.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Anthony Alicea
                  </Link>{' '}
                  says, “Don’t imitate, understand” — a mindset I try to follow.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
