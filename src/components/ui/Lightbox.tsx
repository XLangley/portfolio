import { useEffect } from "react"
import type { MediaItem } from "../../data/projects"

interface LightboxProps {
  media: MediaItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ media, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, onPrev, onNext])

  if (!media?.length) return null
  const item = media[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-4 right-4 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-white hover:bg-white/20"
      >
        Cerrar
      </button>

      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white"
          aria-label="Siguiente"
        >
          ›
        </button>

        {item.kind === "image" ? (
          <img
            src={item.src}
            alt={item.alt ?? `Imagen ${index + 1}`}
            className="mx-auto max-h-[80vh] w-auto rounded-xl border border-white/10 shadow-2xl"
          />
        ) : (
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
              title={item.title ?? "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        <div className="mt-4 flex justify-center gap-2">
          {media.map((m, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
