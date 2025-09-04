export default function Navbar() {
    const items = [
      { nombre: "Inicio", href: "#inicio" },
      { nombre: "Experiencias", href: "#experiencias" },
      { nombre: "Proyectos", href: "#proyectos" },
      { nombre: "Contacto", href: "#contacto" },
    ]
  
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex items-center justify-center gap-6 py-3 text-sm font-medium text-slate-300">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-pink-400 transition-colors"
                >
                  {item.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
  