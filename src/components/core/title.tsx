export const Title = ({ text }: { text: string }) => {
  return <h1 className="text-lg lg:text-3xl font-bold relative z-20 text-blue-900 dark:text-blue-400">{text}</h1>
}

export const SubTitle = ({ text }: { text: string }) => {
  return <h3 className="text-md lg:text-xl font-semibold text-blue-900 dark:text-blue-400">{text}</h3>
}

export const Text = ({ text }: { text: string }) => {
  return <p className="text-sm lg:text-base">{text}</p>
}
