import { useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
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

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!media?.length) return null
  const item = media[index]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        data-augmented-ui="tl-clip br-clip"
        className="absolute right-4 top-4 inline-flex items-center gap-2 bg-verde px-4 py-2 font-mono text-xs uppercase tracking-widest text-papel shadow-lg shadow-black/30 transition hover:brightness-110 active:scale-[0.98] [--aug-br:8px] [--aug-tl:8px]"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" aria-hidden="true" />
        Cerrar
      </button>

      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {media.length > 1 && (
          <>
            <button
              onClick={onPrev}
              data-augmented-ui="tl-clip br-clip"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-verde text-papel shadow-lg shadow-black/30 transition hover:brightness-110 active:scale-[0.98] [--aug-br:8px] [--aug-tl:8px]"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={onNext}
              data-augmented-ui="tl-clip br-clip"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-verde text-papel shadow-lg shadow-black/30 transition hover:brightness-110 active:scale-[0.98] [--aug-br:8px] [--aug-tl:8px]"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}

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

        {media.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {media.map((_m, i) => (
              <span
                key={i}
                className={`h-1.5 w-4 rounded-full transition ${i === index ? "bg-verde" : "bg-white/30"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
