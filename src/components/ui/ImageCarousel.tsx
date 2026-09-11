import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import type { MediaItem } from "../../data/projects"

interface ImageCarouselProps {
  media: MediaItem[]
  className?: string
  onItemClick?: (index: number) => void
}

export default function ImageCarousel({ media, className = "", onItemClick }: ImageCarouselProps) {
  const [idx, setIdx] = useState(0)
  const total = media?.length ?? 0
  if (!total) return null

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)

  const current = media[idx]

  return (
    <div className={`relative ${className}`}>
      <div
        data-augmented-ui="tr-clip bl-clip border"
        className="group relative [--aug-bl:14px] [--aug-border-all:1px] [--aug-border-bg:var(--color-verde)] [--aug-tr:24px]"
      >
        {current.kind === "image" ? (
          <img
            src={current.src}
            alt={current.alt ?? `Imagen ${idx + 1}`}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full cursor-zoom-in object-cover"
            onClick={() => onItemClick?.(idx)}
          />
        ) : (
          /* Facade: miniatura estática. El iframe de YouTube (y su ~0,5 MB de JS)
             recién se carga cuando el usuario abre el video en el lightbox. */
          <button
            type="button"
            onClick={() => onItemClick?.(idx)}
            aria-label={`Reproducir ${current.title ?? "video"}`}
            className="relative block aspect-video w-full cursor-pointer overflow-hidden"
          >
            <img
              src={current.thumbnail ?? `https://i.ytimg.com/vi/${current.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35"
            >
              <span
                data-augmented-ui="tl-clip br-clip"
                className="flex h-16 w-16 items-center justify-center bg-verde text-papel transition-transform group-hover:scale-105 [--aug-br:10px] [--aug-tl:10px]"
              >
                <Play className="ml-0.5 h-7 w-7 fill-current" />
              </span>
            </span>
          </button>
        )}

        <div
          aria-hidden="true"
          className="scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              data-augmented-ui="tl-clip br-clip"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-verde text-papel shadow-md shadow-black/20 transition hover:brightness-110 active:scale-[0.98] [--aug-br:7px] [--aug-tl:7px]"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              data-augmented-ui="tl-clip br-clip"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-verde text-papel shadow-md shadow-black/20 transition hover:brightness-110 active:scale-[0.98] [--aug-br:7px] [--aug-tl:7px]"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir al item ${i + 1}`}
              className={`h-1.5 w-4 rounded-full transition ${
                i === idx ? "bg-tinta" : "bg-tinta/25 hover:bg-tinta/50"
              }`}
              title={m.kind === "youtube" ? m.title ?? "Video" : m.alt ?? "Imagen"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
