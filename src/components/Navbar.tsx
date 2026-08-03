const items = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Experiencia", href: "#experiencia" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-papel/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <ul className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-humo sm:gap-6 sm:text-[11px] sm:tracking-widest md:gap-10 md:text-xs">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="inline-block py-2 transition-colors hover:text-acento">
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
