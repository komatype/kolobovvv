type ProjectMetaProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function ProjectMeta({ title, subtitle, description }: ProjectMetaProps) {
  return (
    <div className="overflow-hidden">
      <div className="h-0 translate-y-2 opacity-0 transition-all duration-500 group-hover:h-[148px] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:h-[148px] group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="flex h-[148px] flex-col justify-between pt-3">
          <p className="text-[13px] leading-snug text-black/70">{description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/60">
                {title}
              </p>
              <p className="mt-1 text-sm ">{subtitle}</p>
            </div>
            <button className="pointer-events-auto inline-flex items-center rounded-full border border-black/20 bg-black/5 px-4 py-1 text-[11px] font-mono  tracking-[0.3em] text-black/70 transition hover:border-black/40">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
