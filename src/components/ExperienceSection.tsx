import SectionTitle from "./ui/SectionTitle"
import Reveal from "./ui/Reveal"
import { experiences } from "../data/experiences"

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="mt-20 scroll-mt-24 md:mt-28">
      <SectionTitle title="Experiencia" meta="2024 — presente" />
      <div>
        {experiences.map((exp) => (
          <Reveal
            key={exp.empresa}
            className="border-b border-linea py-8 first:pt-0 last:border-b-0 last:pb-0"
          >
            <article className="grid gap-3 md:grid-cols-12">
              <span className="font-mono text-xs text-humo md:col-span-3 md:pt-1.5">
                {exp.periodo}
              </span>
              <div className="md:col-span-9">
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
                <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-humo">
                  {exp.descripcion.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
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
        ))}
      </div>
    </section>
  )
}
