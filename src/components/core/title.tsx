export const Title = ({ text }: { text: string }) => {
  return (
    //  <p
    //    className="text-lg lg:text-3xl py-1 font-bold
    //    bg-gradient-to-tr from-emerald-400 to-cyan-400
    //    dark:from-indigo-400 to-cyan-400"
    //  >
    //    {text}
    //  </p>

    <h1 className="text-lg lg:text-3xl font-bold relative z-20 bg-clip-text text-transparent text-blue-900 dark:text-blue-400">
      {text}
    </h1>
  )
}
