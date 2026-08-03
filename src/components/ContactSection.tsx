import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"
import Reveal from "./ui/Reveal"
import { contacts } from "../data/contacts"

const iconos: Record<string, LucideIcon> = { Github, Linkedin, Mail }

export default function ContactSection() {
  const redes = contacts.filter((c) => c.nombre !== "Email")

  return (
    <section id="contacto" className="mt-20 scroll-mt-24 md:mt-28">
      <SectionTitle title="Contacto" />
      <Reveal>
        <p className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          ¿Trabajamos juntos?
        </p>
        <a
          href="mailto:agaldames.dev@gmail.com"
          className="mt-6 inline-block text-lg text-acento underline underline-offset-8 transition-opacity hover:opacity-75 md:text-2xl"
        >
          agaldames.dev@gmail.com
        </a>
        <ul className="mt-10 flex flex-wrap gap-6">
          {redes.map((c) => {
            const Icono = iconos[c.icon]
            return (
              <li key={c.nombre}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-humo transition-colors hover:text-acento"
                >
                  {Icono ? <Icono className="h-4 w-4" aria-hidden="true" /> : null}
                  {c.nombre}
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
