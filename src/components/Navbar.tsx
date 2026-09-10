import { motion, useScroll, useReducedMotion } from "motion/react"
import { useActiveSection } from "../hooks/useActiveSection"
import ThemeToggle from "./ui/ThemeToggle"

const items = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Experiencia", href: "#experiencia" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contacto", href: "#contacto" },
]

const ids = items.map((item) => item.href.slice(1))

export default function Navbar() {
  const activa = useActiveSection(ids)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-papel/85 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <ul className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-humo sm:gap-6 sm:text-[11px] sm:tracking-widest md:gap-10 md:text-xs">
          {items.map((item) => {
            const esActiva = activa === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={esActiva ? "location" : undefined}
                  className={`relative inline-block py-2 transition-colors hover:text-acento ${
                    esActiva ? "text-tinta" : ""
                  }`}
                >
                  {item.nombre}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-verde transition-transform duration-300 ease-out ${
                      esActiva ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <ThemeToggle className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-6" />
      </nav>

      {/* Progreso de scroll: 1px verde que crece a lo ancho de la navbar. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-verde"
        style={reduce ? { scaleX: 1, opacity: 0 } : { scaleX: scrollYProgress }}
      />
    </header>
  )
}
