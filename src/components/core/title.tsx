import { cn } from '@/lib/utils'

export const Title = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={cn('text-lg lg:text-3xl font-bold relative z-20 text-blue-900 dark:text-blue-400', className)}>{text}</h1>
}

export const SubTitle = ({ text, className }: { text: string; className?: string }) => {
  return <h3 className={cn('text-md lg:text-xl font-semibold text-blue-900 dark:text-blue-400', className)}>{text}</h3>
}

export const Text = ({ text, className }: { text: string; className?: string }) => {
  return <p className={cn('text-sm lg:text-base', className)}>{text}</p>
}
