'use client'

import { useEffect, useRef } from 'react'
import ProjectCard from '../project-card'

type Project = {
  title: string
  subtitle: string
  description: string
  image: string
  static?: boolean
}

type CarouselProps = {
  projects: Project[]
}

export default function Carousel({ projects }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const onWheel = (event: WheelEvent) => {
      if (scroller.scrollWidth <= scroller.clientWidth) return

      const delta = event.deltaX + event.deltaY
      if (delta === 0) return

      event.preventDefault()
      scroller.scrollLeft += delta * 0.35
    }

    scroller.addEventListener('wheel', onWheel, { passive: false })
    return () => scroller.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className="relative flex-1 min-h-0">
      <div
        ref={scrollerRef}
        className="relative h-full w-screen ml-[calc(50%_-_50vw)] overflow-x-auto scrollbar-hidden"
      >
        <div className="flex h-full w-max items-start gap-3 pr-[clamp(24px,6vw,120px)] pl-[50vw]">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
