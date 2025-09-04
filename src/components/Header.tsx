import { X } from "lucide-react"
import { useTypewriter } from "../hooks/useTypeWriter"

export default function Hero() {
  const typed = useTypewriter(["Backend","Frontend","Full-Stack ✨"], 65, 35, 1000)

  return (
    <section id="inicio" className="flex flex-col gap-8 md:flex-row md:items-center scroll-mt-24">
      <div className="shrink-0">
        <div className="relative">
          <img
            src="/yo.jpeg"
            alt="Foto de perfil"
            className="h-36 w-36 md:h-48 md:w-48 rounded-full object-cover ring-2 ring-white/20 shadow-lg"
          />
          <span className="absolute -bottom-1 -right-1 rounded-full bg-pink-100 px-2 py-0.5 text-xs text-pink-500 border border-pink-500/30">
            <span className="flex items-center whitespace-nowrap font-bold">
              No Disponible <X className="h-4 w-4 ml-1 rounded-full" />
            </span>
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Alfredo Galdames
        </h1>
        <p className="mt-3 text-slate-300 max-w-prose">
           Ingeniero Informático con foco en calidad, rendimiento y experiencia de usuario. Desarrollo aplicaciones modernas, escalables y con un diseño cuidado, priorizando la optimización y la usabilidad.
        </p>

        <div className="mt-5 font-mono text-lg md:text-xl text-slate-200">
          <span className="opacity-70">Soy Desarollador</span>
          <span className="relative p-2 text-pink-400">
            {typed}
            <span className="ml-1 inline-block h-[1.15em] w-px align-[-2px] bg-slate-200 animate-pulse"></span>
          </span>
        </div>
      </div>
    </section>
  )
}
