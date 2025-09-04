import { useState } from "react"
import Card from "./ui/Card"
import SectionTitle from "./ui/SectionTitle"
import { projects } from "../data/projects"
import ImageCarousel from "./ui/ImageCarousel"
import Lightbox from "./ui/Lightbox"

export default function ProjectsSection() {
  const [open, setOpen] = useState(false)
  const [activeMedia, setActiveMedia] = useState<any[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (media: any[], index: number) => {
    setActiveMedia(media)
    setActiveIndex(index)
    setOpen(true)
  }

  return (
    <section id="proyectos" className="mt-16 md:mt-24 scroll-mt-24">
      <SectionTitle title="Proyectos" subtitle="Selección de trabajo reciente" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Card key={idx} className="group">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.nombre}</h3>
              <span className="text-xs text-slate-400">{p.anio}</span>
            </div>

            <p className="mt-2 text-sm text-slate-300">{p.descripcion}</p>

            {p.media && p.media.length > 0 && (
              <ImageCarousel
                media={p.media}
                className="mt-3"
                onItemClick={(i) => openLightbox(p.media!, i)}
              />
            )}

            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tecnologias.map((tec, i) => (
                <span
                  key={i}
                  className={`rounded-md bg-white/10 px-2 py-0.5 text-xs ${tec.color ?? "text-slate-200"}`}
                >
                  {tec.icon ? <img src={tec.icon} alt={tec.nombre} className="inline h-4 w-4 mr-1" /> : null}
                  {tec.nombre}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                className="mt-4 inline-block text-sm text-pink-300 hover:text-pink-200 underline underline-offset-4"
              >
                Ver más
              </a>
            )}
          </Card>
        ))}
      </div>

      {open && (
        <Lightbox
          media={activeMedia}
          index={activeIndex}
          onClose={() => setOpen(false)}
          onPrev={() => setActiveIndex((i) => (i - 1 + activeMedia.length) % activeMedia.length)}
          onNext={() => setActiveIndex((i) => (i + 1) % activeMedia.length)}
        />
      )}
    </section>
  )
}
