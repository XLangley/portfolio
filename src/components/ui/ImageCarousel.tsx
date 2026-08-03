import { useState } from "react"
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
      <div className="relative">
        {current.kind === "image" ? (
          <img
            src={current.src}
            alt={current.alt ?? `Imagen ${idx + 1}`}
            className="aspect-video w-full cursor-zoom-in rounded-xl border border-linea object-cover"
            onClick={() => onItemClick?.(idx)}
          />
        ) : (
          <div
            className="relative w-full overflow-hidden rounded-xl border border-linea"
            onClick={() => onItemClick?.(idx)}
          >
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${current.id}?rel=0`}
              title={current.title ?? "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-tinta/60 p-2 text-papel transition hover:bg-tinta/80 active:scale-[0.98]"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-tinta/60 p-2 text-papel transition hover:bg-tinta/80 active:scale-[0.98]"
              aria-label="Siguiente"
            >
              ›
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
