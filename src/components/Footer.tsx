import { useEffect, useState } from "react"

const formato = new Intl.DateTimeFormat("es-CL", {
  timeZone: "America/Santiago",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
})

function HoraSantiago() {
  const [hora, setHora] = useState(() => formato.format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setHora(formato.format(new Date())), 15_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums">
      Santiago, CL · <time>{hora}</time>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-2 border-t border-linea py-8 font-mono text-xs text-humo">
      <span>{new Date().getFullYear()} Alfredo Galdames</span>
      <HoraSantiago />
      <span>Hecho con React + Vite</span>
    </footer>
  )
}
