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
                  Software engineer with a interest in Front-end development and a strong foundation in JavaScript and TypeScript.
                  I have successfully leveraged frameworks such as React, Node.js, and Next.js to deliver innovative solutions. I
                  dare to say I don't know everything, but I am curious, quickly learn, and adapt. My preference is always for
                  user experience over interface design, but I aim to combine both. These days I am mostly playing with Next.js
                </Text>
                <Text>
                  Simply put, I feel at my best when I am inspired by what I do, which maximizes my output. As{' '}
                  <Link
                    href="https://anthonyalicea.com/"
                    as="https://anthonyalicea.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Anthony Alicea
                  </Link>{' '}
                  puts it, "Don't imitate, understand." It's fair to say that I enjoy his courses. Currently, I started exploring
                  the world of eXtended Reality (XR) environments in a scientific context. With a Master's degree in Information
                  Studies and a project at the Netherlands Institute of Mathematics and Informatics regarding VR/AR theaters, I
                  found a lot of value in scientific works.
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
