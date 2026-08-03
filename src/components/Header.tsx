import { motion, useReducedMotion, type Variants } from "motion/react"
import { useTypewriter } from "../hooks/useTypewriter"

const roles = ["full-stack.", "backend.", "frontend."]

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rol = useTypewriter(roles, !reduce)

  return (
    <section id="inicio" className="scroll-mt-24">
      <motion.div
        className="grid gap-10 md:grid-cols-12"
        variants={contenedor}
        initial={reduce ? false : "oculto"}
        animate="visible"
      >
        <div className="md:col-span-8">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full bg-acento px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-papel">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-papel opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-papel" />
              </span>
              Trabajando
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ingeniero informático
            <span className="block text-acento">
              <span className="sr-only">full-stack</span>
              <span aria-hidden="true">
                {rol}
                <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.06em] animate-pulse bg-acento motion-reduce:hidden md:w-1" />
              </span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[58ch] text-lg leading-relaxed text-humo">
            Con base en Santiago de Chile, desarrollo software con foco en calidad, rendimiento y
            experiencia de usuario: APIs escalables con{" "}
            <span className="font-medium text-acento">NestJS</span>, interfaces rápidas con{" "}
            <span className="font-medium text-acento">React</span> y{" "}
            <span className="font-medium text-acento">agentes de IA</span> con LangGraph, con la
            misma soltura en sistemas legados sobre{" "}
            <span className="font-medium text-acento">Oracle</span> que en productos modernos.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-tinta px-6 py-3 text-sm font-medium text-papel transition hover:bg-tinta/85 active:scale-[0.98]"
            >
              Ver proyectos
            </a>
            <a
              href="mailto:agaldames.dev@gmail.com"
              className="rounded-full border border-linea px-6 py-3 text-sm font-medium transition hover:border-tinta active:scale-[0.98]"
            >
              Escríbeme
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="md:col-span-4">
          <img
            src="/yo.jpeg"
            alt="Foto de perfil de Alfredo Galdames"
            className="aspect-square w-40 rounded-xl object-cover ring-1 ring-linea md:w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
