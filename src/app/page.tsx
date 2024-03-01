import CVComponent from '@/components/custom/cv-base'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <main className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <CVComponent />
      </main>
    </main>
  )
}
