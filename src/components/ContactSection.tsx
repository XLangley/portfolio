import { useEffect, useState } from "react"
import { Check, Copy, Github, Linkedin, Mail, type LucideIcon } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"
import Reveal from "./ui/Reveal"
import { contacts } from "../data/contacts"

const iconos: Record<string, LucideIcon> = { Github, Linkedin, Mail }
const EMAIL = "agaldames.dev@gmail.com"

function CopiarEmail() {
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    if (!copiado) return
    const t = setTimeout(() => setCopiado(false), 1600)
    return () => clearTimeout(t)
  }, [copiado])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopiado(true)
    } catch {
      /* sin permiso de portapapeles: el link mailto sigue disponible */
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      data-augmented-ui="tl-clip br-clip border"
      aria-live="polite"
      className={`brillo inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors [--aug-border-all:1px] [--aug-br:6px] [--aug-tl:6px] ${
        copiado
          ? "text-verde [--aug-border-bg:var(--color-verde)]"
          : "text-humo hover:text-verde [--aug-border-bg:var(--color-linea)] hover:[--aug-border-bg:var(--color-verde)]"
      }`}
    >
      {copiado ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {copiado ? "Copiado" : "Copiar"}
    </button>
  )
}

export default function ContactSection() {
  const redes = contacts.filter((c) => c.nombre !== "Email")

  return (
    <section id="contacto" className="mt-20 scroll-mt-24 md:mt-28">
      <SectionTitle title="Contacto" numero="03" />
      <Reveal>
        <p className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          ¿Trabajamos juntos?
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block text-lg text-acento underline underline-offset-8 transition-opacity hover:opacity-75 md:text-2xl"
          >
            {EMAIL}
          </a>
          <CopiarEmail />
        </div>
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
