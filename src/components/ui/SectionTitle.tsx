export default function SectionTitle({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="mb-10 flex items-baseline justify-between gap-4 border-t border-linea pt-6">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {meta && <span className="font-mono text-xs text-humo">{meta}</span>}
    </div>
  )
}
