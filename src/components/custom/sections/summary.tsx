import { Title } from '@/components/core/title'
import { Meteors } from '@/components/ui/meteors'
import React from 'react'

const Summary = () => {
  return (
    <div className="mt-4">
      <div className="py-1 flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="min-w-80">
          <div className="w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-300 to-blue-700 transform shadow-xl drop-shadow-2xl border bg-red-500 rounded-full" />
            <div className="relative shadow-xl bg-gray-50 dark:bg-gray-900 border p-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              {/* <h1 className="font-bold text-xl text-gray-900 dark:text-white relative z-50">Summary</h1> */}
              <Title text="Summary" />

              <p className="font-normal text-sm lg:text-base text-gray-900 dark:text-slate-200 relative z-50 mt-2">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
                pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud
                ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
                officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
                cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
                ullamco ut ea consectetur et est culpa et culpa duis.
              </p>

              {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">Explore</button> */}

              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
