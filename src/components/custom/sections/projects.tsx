import React from 'react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

import { Title } from '@/components/core/title'
import { items } from '@/components/data/projects'

export function Projects() {
  return (
    <div>
      <div className="inline-flex items-center justify-start w-full">
        <span className="pr-3">
          <Title text="PROJECTS" />
        </span>
        <hr className="w-full h-px bg-blue-900 dark:bg-blue-300 border-0" />
      </div>

      <BentoGrid className="py-1 mt-2 gap-2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            tags={item.tags}
            articleLink={item.articleLink}
            codeLink={item.codeLink}
            prodLink={item.prodLink}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
