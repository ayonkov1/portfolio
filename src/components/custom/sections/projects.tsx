import React from 'react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

import { Title } from '@/components/core/title'
import { items } from '@/components/data/projects'

export function Projects() {
  return (
    <div>
      <Title text="Projects" />

      <BentoGrid className="py-1 mt-2 md:auto-rows-[25rem] lg:gap-6 ">
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
