const links = [
  { name: "Email", href: "mailto:jefrimaruli@gmail.com" },
  { name: "GitHub", href: "https://github.com/xietsunzao" },
  { name: "LinkedIn", href: "https://linkedin.com/in/jefri-maruli" },
] as const

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-border">
      <div className="page-column flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jefri Maruli</p>
        <ul className="flex gap-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
