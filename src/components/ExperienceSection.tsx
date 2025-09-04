import Card from "./ui/Card"
import SectionTitle from "./ui/SectionTitle"
import { experiences } from "../data/experiences"

export default function ExperienceSection() {
  return (
    <section id="experiencias" className="mt-16 md:mt-24 scroll-mt-24">
      <SectionTitle title="Experiencias laborales" subtitle="Un resumen de mi trayectoria profesional" />
      <div className="grid gap-4">
        {experiences.map((exp, idx) => (
          <Card key={idx}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{exp.puesto} — <a key={idx} href={exp.link} className="hover:text-pink-500 hover:underline" title="Ir a empresa" target="_blank"
                rel="noopener noreferrer">{exp.empresa}</a></h3>
                <p className="text-sm text-slate-400">{exp.tecnologias.join(", ")}</p>
              </div>
              <span className="text-xs text-slate-400">{exp.periodo}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-200/90 space-y-1">
              {exp.descripcion.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
