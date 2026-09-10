import { useCallback, useEffect, useState } from "react"

export type Tema = "light" | "dark"

const CLAVE = "tema"
const COLOR_BARRA: Record<Tema, string> = { light: "#eeeaf4", dark: "#0e0a14" }

const leerGuardado = (): Tema | null => {
  try {
    const v = localStorage.getItem(CLAVE)
    return v === "light" || v === "dark" ? v : null
  } catch {
    return null
  }
}

const temaDelSistema = (): Tema =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

const temaActual = (): Tema =>
  document.documentElement.classList.contains("dark") ? "dark" : "light"

function aplicar(tema: Tema) {
  const raiz = document.documentElement
  raiz.classList.toggle("dark", tema === "dark")
  raiz.style.colorScheme = tema
  // El <meta name="theme-color"> con media query sigue al sistema; lo pisamos
  // con un único valor para que la barra del navegador acompañe al toggle.
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((m) => m.remove())
  const meta = document.createElement("meta")
  meta.name = "theme-color"
  meta.content = COLOR_BARRA[tema]
  document.head.appendChild(meta)
}

/**
 * Tema claro/oscuro. El script inline de index.html ya aplicó la clase antes
 * del primer render; este hook la lee, la sincroniza y la persiste.
 */
export function useTheme() {
  const [tema, setTema] = useState<Tema>(() =>
    typeof document === "undefined" ? "dark" : temaActual()
  )

  useEffect(() => {
    aplicar(tema)
  }, [tema])

  // Si no hay preferencia guardada, seguimos los cambios del sistema.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const alCambiar = () => {
      if (leerGuardado() === null) setTema(temaDelSistema())
    }
    mq.addEventListener("change", alCambiar)
    return () => mq.removeEventListener("change", alCambiar)
  }, [])

  const alternar = useCallback(() => {
    setTema((t) => {
      const nuevo: Tema = t === "dark" ? "light" : "dark"
      try {
        localStorage.setItem(CLAVE, nuevo)
      } catch {
        /* sin almacenamiento disponible */
      }
      return nuevo
    })
  }, [])

  return { tema, alternar }
}
