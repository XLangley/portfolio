export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
    )
  }
  