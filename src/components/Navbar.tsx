import ThemeToggle from "./ui/ThemeToggle"

const items = [
  { nombre: "Experiencia", href: "#experiencia" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-papel/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#inicio" className="font-display text-sm font-extrabold uppercase tracking-tight">
          <span className="sm:hidden">AG</span>
          <span className="hidden sm:inline">Alfredo Galdames</span>
        </a>
        <div className="flex items-center gap-4 md:gap-7">
          <ul className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-humo sm:gap-4 sm:text-[11px] sm:tracking-widest md:gap-7 md:text-xs">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block py-2 transition-colors hover:text-acento">
                  {item.nombre}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
