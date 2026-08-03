import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

export default function CursorDot() {
  const reduce = useReducedMotion()
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
    window.addEventListener("pointermove", move)
    return () => window.removeEventListener("pointermove", move)
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden size-7 rounded-full border border-verde [@media(pointer:fine)]:block"
      style={{ x: sx, y: sy }}
    />
  )
}
