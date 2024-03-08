import { cn } from '@/lib/utils'
import { Badge } from './badge'
import { Code2, Earth } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn('grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-8xl', className)}>{children}</div>
}

const LinkButton = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <button className="py-1 px-2 rounded-xl bg-blue-400  text-white hover:text-blue-500 font-bold text-sm transition hover:bg-white border-2 dark:hover:border-blue-900 hover:border-blue-400 min-h-9 max-w-36 overflow-ellipsis">
      <Link href={link} target="_blank" referrerPolicy="no-referrer">
        {children}
      </Link>
    </button>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  tags,
  articleLink,
  codeLink,
  prodLink,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string
  header: string
  icon?: React.ReactNode
  tags?: Array<string>
  articleLink?: string
  codeLink?: string
  prodLink?: string
}) => {
  return (
    <div
      className={cn(
        'shadow-md row-span-1 rounded-3xl group/bento hover:shadow-xl transition shadow-input dark:shadow-none p-4 bg-slate-50 dark:bg-slate-800 border justify-between flex flex-col [&>img]:grayscale [&>img]:hover:grayscale-0 [&>img]:transition',
        className
      )}
    >
      <img
        className="group-hover/bento:translate-x-1 flex-1 w-full h-full min-h-[6rem] max-h-16 md:max-h-full rounded-xl fill-white object-cover border opacity-90 dark:brightness-75"
        src={header}
        alt="image of project"
      />
      <div className="group-hover/bento:translate-x-1 transition mt-2 lg:mt-6">
        {tags?.map((tag, i) => (
          <Badge className="mr-1 border-2 dark:border-slate-600" key={i} variant="outline">
            {tag}
          </Badge>
        ))}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 overflow-ellipsis">
          {description}
        </div>
        <div className="flex justify-between gap-2 mt-2 lg:mt-6">
          {articleLink && <LinkButton link={articleLink}>Read the article</LinkButton>}

          <div className="flex gap-2">
            {codeLink && (
              <LinkButton link={codeLink}>
                <Code2 className="h-4 w-4" />
              </LinkButton>
            )}

            {prodLink && (
              <LinkButton link={prodLink}>
                <Earth className="h-4 w-4" />
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
