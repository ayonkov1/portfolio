import CVComponent from '@/components/custom/cv-base'
import Summary from '@/components/custom/sections/summary'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex justify-center p-10">
        <div className="fixed bg-cover pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black)]"></div>
        <CVComponent />
      </div>
    </main>
  )
}
