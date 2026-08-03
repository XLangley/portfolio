import { useEffect, useState } from "react"

export function useTypewriter(
  frases: string[],
  activo = true,
  escribirMs = 65,
  borrarMs = 35,
  pausaMs = 1100
) {
  const [indice, setIndice] = useState(0)
  const [texto, setTexto] = useState("")
  const [borrando, setBorrando] = useState(false)

  useEffect(() => {
    if (!activo) return
    const actual = frases[indice % frases.length]
    if (!borrando && texto.length < actual.length) {
      const t = setTimeout(() => setTexto(actual.slice(0, texto.length + 1)), escribirMs)
      return () => clearTimeout(t)
    }
    if (!borrando && texto.length === actual.length) {
      const t = setTimeout(() => setBorrando(true), pausaMs)
      return () => clearTimeout(t)
    }
    if (borrando && texto.length > 0) {
      const t = setTimeout(() => setTexto(actual.slice(0, texto.length - 1)), borrarMs)
      return () => clearTimeout(t)
    }
    if (borrando && texto.length === 0) {
      setBorrando(false)
      setIndice((i) => (i + 1) % frases.length)
    }
  }, [texto, borrando, indice, frases, activo, escribirMs, borrarMs, pausaMs])

  return activo ? texto : frases[0]
}
