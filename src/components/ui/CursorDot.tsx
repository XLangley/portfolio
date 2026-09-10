import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

const INTERACTIVO = "a, button, [role='button'], input, textarea, select, label, summary"

export default function CursorDot() {
  const reduce = useReducedMotion()
  const [sobreInteractivo, setSobreInteractivo] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 32 })
  const sy = useSpring(y, { stiffness: 350, damping: 32 })

  useEffect(() => {
    if (reduce) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 14)
      y.set(e.clientY - 14)
    }
    const over = (e: PointerEvent) => {
      const el = e.target as Element | null
      setSobreInteractivo(Boolean(el?.closest?.(INTERACTIVO)))
    }
    window.addEventListener("pointermove", move)
    window.addEventListener("pointerover", over)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
    }
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden size-7 rounded-full border border-verde [@media(pointer:fine)]:block"
      style={{ x: sx, y: sy }}
      animate={{ scale: sobreInteractivo ? 1.8 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <span
        className={`block h-full w-full rounded-full bg-verde transition-opacity duration-200 ${
          sobreInteractivo ? "opacity-25" : "opacity-0"
        }`}
      />
    </motion.div>
  )
}
