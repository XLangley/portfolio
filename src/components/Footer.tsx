export default function Footer() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-2 border-t border-linea py-8 font-mono text-xs text-humo">
      <span>{new Date().getFullYear()} Alfredo Galdames</span>
      <span>Hecho con Astro</span>
    </footer>
  )
}
