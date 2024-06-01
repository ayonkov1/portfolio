import { cn } from '@/lib/utils'
import { Badge } from './badge'
import { Code2, ExternalLink, Newspaper } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Text } from '../core/title'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn('grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-8xl', className)}>{children}</div>
}

const LinkButton = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <button
      className={`
    py-1 px-2 rounded-xl border
    hover:bg-white dark:hover:bg-slate-700
    text-blue-900 hover:text-blue-500  
    dark:text-blue-100 dark:hover:border-blue-100 hover:border-blue-400
    text-sm transition border-blue-900 dark:border-slate-600
    min-h-9 flex-grow`}
    >
      <Link
        href={link}
        as={link}
        target="_blank"
        referrerPolicy="no-referrer"
        className={`
      flex flex-row-reverse flex-grow justify-center items-center gap-2`}
      >
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
        `shadow-md row-span-1 rounded-3xl group/bento hover:shadow-xl 
        transition shadow-input dark:shadow-none p-4 bg-slate-50 dark:bg-slate-800 
        border flex flex-col
        [&>img]:grayscale [&>img]:hover:grayscale-0 [&>img]:transition
        [&>video]:grayscale [&>video]:hover:grayscale-0 [&>video]:transition
        `,
        className
      )}
    >
      {!header.endsWith('.webm') ? (
        <img
          className="group-hover/bento:translate-x-1 flex-1 w-full h-full min-h-[6rem] max-h-16 md:max-h-full rounded-xl fill-white object-cover hidden md:block"
          src={header}
          alt="image of project"
          loading="lazy"
          fetchPriority="low"
        />
      ) : (
        <video
          className="group-hover/bento:translate-x-1 flex-1 w-full h-full min-h-[6rem] max-h-16 md:max-h-full rounded-xl fill-white object-cover hidden md:block"
          loop
          autoPlay
          muted
        >
          <source src={header} type="video/webm" />
        </video>
      )}

      <div className="group-hover/bento:translate-x-1 transition md:mt-2">
        {tags?.map((tag, i) => (
          <Badge className="mr-1 border-2 dark:border-slate-600" key={i} variant="outline">
            {tag}
          </Badge>
        ))}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 overflow-ellipsis">
          {description}
        </div>
        <div className="flex flex-row gap-3 mt-2 lg:mt-6">
          {articleLink && (
            <LinkButton link={articleLink}>
              <Text>Article</Text> <Newspaper className="h-4 w-4" />
            </LinkButton>
          )}
          {codeLink && (
            <LinkButton link={codeLink}>
              <Text>Code</Text> <Code2 className="h-4 w-4" />
            </LinkButton>
          )}
          {prodLink && (
            <LinkButton link={prodLink}>
              <Text>Live</Text> <ExternalLink className="h-4 w-4" />
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  )
}
