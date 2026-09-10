import { motion, useReducedMotion } from "motion/react"
import SectionTitle from "./ui/SectionTitle"
import Reveal from "./ui/Reveal"
import { experiences, esActual, type Experience } from "../data/experiences"

const anioInicio = (exp: Experience) => Number(exp.periodo.match(/\d{4}/)?.[0] ?? NaN)

function Punto({ actual }: { actual: boolean }) {
  if (actual) {
    return (
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-verde" />
      </span>
    )
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-2.5 w-2.5 rounded-full border-2 border-humo bg-papel"
    />
  )
}

function Descripcion({ items }: { items: string[] }) {
  const reduce = useReducedMotion()
  return (
    <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-humo">
      {items.map((d, i) => (
        <motion.li
          key={d}
          initial={reduce ? false : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
        >
          {d}
        </motion.li>
      ))}
    </ul>
  )
}

export default function ExperienceSection() {
  const primerAnio = Math.min(...experiences.map(anioInicio).filter(Number.isFinite))
  const meta = Number.isFinite(primerAnio) ? `${primerAnio} — presente` : undefined

  return (
    <section id="experiencia" className="mt-20 scroll-mt-24 md:mt-28">
      <SectionTitle title="Experiencia" meta={meta} numero="01" />
      <ol>
        {experiences.map((exp, i) => {
          const actual = esActual(exp)
          const anterior = experiences[i - 1]
          const siguiente = experiences[i + 1]
          const primero = i === 0
          const ultimo = i === experiences.length - 1
          // El tramo se pinta en verde cuando une dos trabajos que se ejercen en simultáneo.
          const tramoSuperiorVerde = actual && anterior !== undefined && esActual(anterior)
          const tramoInferiorVerde = actual && siguiente !== undefined && esActual(siguiente)

          return (
            <li key={exp.empresa}>
              <Reveal>
                <article className="grid grid-cols-[1.25rem_1fr] gap-x-4 md:grid-cols-[7rem_1.25rem_1fr] md:gap-x-6">
                  <div
                    aria-hidden="true"
                    className="relative col-start-1 row-start-1 row-span-2 flex justify-center md:col-start-2 md:row-span-1"
                  >
                    {!primero && (
                      <span
                        className={`absolute top-0 h-3 w-px ${tramoSuperiorVerde ? "bg-verde" : "bg-linea"}`}
                      />
                    )}
                    {!ultimo && (
                      <span
                        className={`absolute top-3 bottom-0 w-px ${tramoInferiorVerde ? "bg-verde" : "bg-linea"}`}
                      />
                    )}
                    <span className="relative z-10 mt-[7px]">
                      <Punto actual={actual} />
                    </span>
                  </div>

                  <span className="col-start-2 row-start-1 font-mono text-xs text-humo md:col-start-1 md:pt-1.5 md:text-right">
                    {exp.periodo}
                    {actual && <span className="sr-only"> (trabajo actual)</span>}
                  </span>

                  <div
                    className={`col-start-2 row-start-2 md:col-start-3 md:row-start-1 ${ultimo ? "" : "pb-10 md:pb-12"}`}
                  >
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 transition-colors hover:text-acento hover:underline"
                      >
                        {exp.empresa}
                      </a>
                    </h3>
                    <p className="mt-0.5 text-sm text-humo">{exp.puesto}</p>
                    <Descripcion items={exp.descripcion} />
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {exp.tecnologias.map((t) => (
                        <li
                          key={t}
                          data-augmented-ui="tl-clip br-clip border"
                          className="brillo px-2.5 py-0.5 font-mono text-[11px] text-humo transition-colors hover:text-verde [--aug-border-all:1px] [--aug-border-bg:var(--color-linea)] [--aug-br:5px] [--aug-tl:5px] hover:[--aug-border-bg:var(--color-verde)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
