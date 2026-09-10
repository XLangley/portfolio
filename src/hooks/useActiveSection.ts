import { useEffect, useState } from "react"

/**
 * Devuelve el id de la sección "activa": la última cuyo borde superior ya pasó
 * la línea de referencia (un porcentaje del alto del viewport). Si el scroll
 * llegó al final de la página, activa la última sección aunque sea corta.
 */
export function useActiveSection(ids: string[], referencia = 0.4): string | null {
  const [activa, setActiva] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    let frame = 0

    const calcular = () => {
      frame = 0
      const secciones = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
      if (secciones.length === 0) return

      const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (alFinal) {
        setActiva(secciones[secciones.length - 1].id)
        return
      }

      const linea = window.innerHeight * referencia
      let actual = secciones[0].id
      for (const el of secciones) {
        if (el.getBoundingClientRect().top <= linea) actual = el.id
      }
      setActiva(actual)
    }

    const alScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(calcular)
    }

    calcular()
    window.addEventListener("scroll", alScroll, { passive: true })
    window.addEventListener("resize", alScroll)
    return () => {
      window.removeEventListener("scroll", alScroll)
      window.removeEventListener("resize", alScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids, referencia])

  return activa
}
