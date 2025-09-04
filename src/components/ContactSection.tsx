import { contacts } from "../data/contacts"
import * as Icons from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="mt-16 md:mt-24 mb-16 scroll-mt-24">
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Contáctame:
        </h2>

        <div className="flex gap-5">
          {contacts.map((c, idx) => {
            const LucideIcon = (Icons as any)[c.icon]
            return (
              <a
                key={idx}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${c.color ?? "text-slate-300 hover:text-pink-400"}`}
              >
                {LucideIcon ? <LucideIcon className="h-6 w-6" /> : null}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
