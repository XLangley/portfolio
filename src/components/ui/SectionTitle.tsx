export default function SectionTitle({
  title,
  meta,
  numero,
}: {
  title: string
  meta?: string
  numero?: string
}) {
  return (
    <div className="mb-10 flex items-baseline justify-between gap-4 border-t border-linea pt-6">
      <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
        <span aria-hidden="true" className="inline-block h-5 w-1 bg-verde" />
        {numero && (
          <span aria-hidden="true" className="font-mono text-sm font-medium text-humo md:text-base">
            {numero}&nbsp;/
          </span>
        )}
        {title}
      </h2>
      {meta && <span className="font-mono text-xs text-humo">{meta}</span>}
    </div>
  )
}
