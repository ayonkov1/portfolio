'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import dynamic from 'next/dynamic'

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="max-w-7xl h-svh flex justify-center left">
        <Viewer fileUrl="main.pdf" plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  )
}

export default dynamic(() => Promise.resolve(Resume), { ssr: false })
