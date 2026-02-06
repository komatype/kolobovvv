import ProjectMeta from '../project-meta'

type Project = {
  title: string
  subtitle: string
  description: string
  image: string
  static?: boolean
}

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasMeta = !project.static
  return (
    <article
      className="group relative flex h-full w-[clamp(220px,24vw,360px)] flex-none flex-col snap-start animate-fadeUp"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={[
          'relative h-full overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-card transition-[height] duration-500 ease-out',
          hasMeta ? 'group-hover:h-[calc(100%-148px)]' : '',
        ].join(' ')}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-[4px] object-cover"
        />
      </div>
      {hasMeta && (
        <ProjectMeta
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
        />
      )}
    </article>
  )
}
