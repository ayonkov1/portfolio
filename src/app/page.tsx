import CVComponent from '@/components/core/cv-base'

export default function Home() {
  return (
    <main>
      <div
        className={`
      p-5  
      dark:bg-black bg-white 
      dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
      absolute flex justify-center`}
      >
        <div
          className={`
        fixed bg-cover pointer-events-none inset-0 items-center 
        justify-center dark:bg-black bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]`}
        ></div>
        <CVComponent />
      </div>
    </main>
  )
}
