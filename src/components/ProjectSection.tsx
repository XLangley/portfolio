import { useState } from "react"
import SectionTitle from "./ui/SectionTitle"
import Reveal from "./ui/Reveal"
import { projects, type MediaItem } from "../data/projects"
import ImageCarousel from "./ui/ImageCarousel"
import Lightbox from "./ui/Lightbox"

export default function ProjectsSection() {
  const [open, setOpen] = useState(false)
  const [activeMedia, setActiveMedia] = useState<MediaItem[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (media: MediaItem[], index: number) => {
    setActiveMedia(media)
    setActiveIndex(index)
    setOpen(true)
  }

  return (
    <section id="proyectos" className="mt-20 scroll-mt-24 md:mt-28">
      <SectionTitle title="Proyectos" />
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
        {projects.map((p) => (
          <Reveal key={p.nombre}>
            <article>
              {p.media && p.media.length > 0 && (
                <ImageCarousel media={p.media} onItemClick={(i) => openLightbox(p.media!, i)} />
              )}

              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {p.nombre}
                </h3>
                <span className="font-mono text-xs text-humo">{p.anio}</span>
              </div>

              <p className="mt-2 max-w-[65ch] text-[15px] leading-relaxed text-humo">
                {p.descripcion}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tecnologias.map((tec) => (
                  <li
                    key={tec.nombre}
                    data-augmented-ui="tl-clip br-clip border"
                    className="brillo px-2.5 py-0.5 font-mono text-[11px] text-humo transition-colors hover:text-verde [--aug-border-all:1px] [--aug-border-bg:var(--color-linea)] [--aug-br:5px] [--aug-tl:5px] hover:[--aug-border-bg:var(--color-verde)]"
                  >
                    {tec.nombre}
                  </li>
                ))}
              </ul>

              {p.link && p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-medium text-acento underline underline-offset-4 transition-opacity hover:opacity-75"
                >
                  Ver proyecto ↗
                </a>
              )}
            </article>
          </Reveal>
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
