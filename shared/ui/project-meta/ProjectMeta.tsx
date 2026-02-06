type ProjectMetaProps = {
  title: string
  subtitle: string
  description: string
}

export default function ProjectMeta({
  title,
  subtitle,
  description,
}: ProjectMetaProps) {
  return (
    <div className="overflow-hidden">
      <div className="h-0 translate-y-2 opacity-0 transition-all duration-500 group-hover:h-[148px] group-hover:translate-y-0 group-hover:opacity-100">
        <div className="relative h-[148px] pt-4">
          <p className="text-base leading-4 text-black">{description}</p>
          <p className="mt-4 text-[20px] leading-[28px] text-black">{title}</p>
          <p className="mt-3 text-base leading-[28px] text-[#707070]">{subtitle}</p>
          <button className="absolute bottom-0 right-0 inline-flex h-8 items-center justify-center rounded-full bg-black px-4 text-base text-white transition hover:bg-black/80">
            View
          </button>
        </div>
      </div>
    </div>
  )
}
