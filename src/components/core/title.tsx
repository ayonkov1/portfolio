import { ReactNode } from 'react'

type Props = { children?: ReactNode; text?: string }

export const Title = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <h1 className={`text-lg lg:text-2xl font-bold relative z-20 text-blue-900 dark:text-blue-300 ${center && 'text-center'}`}>
      {text}
    </h1>
  )
}

export const SubTitle = ({ text }: { text: string }) => {
  return <h3 className="text-md lg:text-xl font-semibold text-blue-900 dark:text-blue-200 hyphens-auto">{text}</h3>
}

export const Text = ({ children, text }: Props) => {
  return <p className="text-sm lg:text-base hyphens-auto">{children || text}</p>
}

export const TitleWithDivider = ({ children }: Props) => {
  return (
    <div className="inline-flex items-center justify-start w-full">
      <span className="pr-3">{children}</span>
      <hr className="w-full h-px border" />
    </div>
  )
}
