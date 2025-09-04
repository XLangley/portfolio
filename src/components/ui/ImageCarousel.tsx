import { useState } from "react"
import type { MediaItem } from "../../data/projects"

interface ImageCarouselProps {
  media: MediaItem[]
  className?: string
  onItemClick?: (index: number) => void // abrir lightbox
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
            className="h-48 w-full md:h-56 lg:h-64 object-cover rounded-xl border border-white/10 cursor-zoom-in"
            onClick={() => onItemClick?.(idx)}
          />
        ) : (
          <div className="relative w-full rounded-xl border border-white/10 overflow-hidden" onClick={() => onItemClick?.(idx)}>
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 p-2 text-white"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 p-2 text-white"
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-2 flex justify-center gap-2">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir al item ${i + 1}`}
              className={`h-1.5 w-4 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              title={m.kind === "youtube" ? (m as any).title ?? "Video" : (m as any).alt ?? "Imagen"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
