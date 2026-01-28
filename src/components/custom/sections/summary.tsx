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
                  Fullstack Engineer with 3+ years of experience building web applications for enterprise clients. Currently
                  extending AI-powered agentic systems using LangChain and LangGraph at KPMG, while independently architecting a
                  production-grade ERP system (React, FastAPI, PostgreSQL, Docker, Nginx) end-to-end. Master's from University of
                  Amsterdam with Distinction, specializing in intelligent systems and HCI. Comfortable owning systems end-to-end,
                  from schema design to deployment.{' '}
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
