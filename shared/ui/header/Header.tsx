type HeaderLink = {
  label: string
  href: string
  accent?: boolean
}

type HeaderProps = {
  links: HeaderLink[]
}

export default function Header({ links }: HeaderProps) {
  return (
    <header className="relative h-[148px] pt-[28px]">
      <div className="space-y-1 text-[20px] leading-[28px] text-[#707070]">
        <p>Ilya Kolobov</p>
        <p>Art Director & Product Designer</p>
        <p>Currently in Moscow</p>
      </div>

      <div className="absolute left-0 top-1/2 w-screen -translate-y-1/2 ml-[calc(50%_-_50vw)]">
        <nav className="ml-[50vw] flex flex-wrap gap-[60px] text-[20px] leading-[28px] text-black">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-black">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
