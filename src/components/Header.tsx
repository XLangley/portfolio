import { Fragment } from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { useTypewriter } from "../hooks/useTypewriter"
import { experiences, esActual } from "../data/experiences"

const roles = ["full-stack.", "backend.", "frontend."]
const actuales = experiences.filter(esActual)

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
            <span
              data-augmented-ui="tl-clip br-clip"
              className="inline-flex items-center gap-2 bg-verde px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-papel [--aug-br:6px] [--aug-tl:6px]"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-papel opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-papel" />
              </span>
              Trabajando
            </span>
            {actuales.length > 0 && (
              <p className="mt-3 font-mono text-xs text-humo">
                Actualmente en{" "}
                {actuales.map((exp, i) => (
                  <Fragment key={exp.empresa}>
                    {i > 0 && (i === actuales.length - 1 ? " y " : ", ")}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tinta underline decoration-linea underline-offset-4 transition-colors hover:text-acento hover:decoration-acento"
                    >
                      {exp.empresa}
                    </a>
                  </Fragment>
                ))}
              </p>
            )}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Alfredo Galdames
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-display text-xl font-bold tracking-tight md:text-2xl"
          >
            Ingeniero informático{" "}
            <span className="text-verde">
              <span className="sr-only">full-stack</span>
              <span aria-hidden="true">
                {rol}
                <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-pulse bg-verde motion-reduce:hidden" />
              </span>
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-[58ch] text-lg leading-relaxed text-humo">
            Desde Santiago de Chile construyo aplicaciones web y móviles escalables con{" "}
            <span className="font-medium text-acento">TypeScript</span> (React, React Native, NestJS, PostgreSQL/Oracle)
            y soluciones de IA con <span className="font-medium text-acento">Python</span> y{" "}
            <span className="font-medium text-acento">LangGraph</span>: agentes sobre LLMs y
            automatización inteligente.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              data-augmented-ui="tl-clip br-clip"
              className="brillo bg-tinta px-6 py-3 text-sm font-medium text-papel transition hover:bg-tinta/85 active:scale-[0.98] [--aug-br:10px] [--aug-tl:10px]"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              data-augmented-ui="tl-clip br-clip border"
              className="brillo px-6 py-3 text-sm font-medium transition active:scale-[0.98] [--aug-border-all:1px] [--aug-border-bg:var(--color-linea)] [--aug-br:10px] [--aug-tl:10px] hover:[--aug-border-bg:var(--color-verde)]"
            >
              Escríbeme
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="md:col-span-4">
          <div
            data-augmented-ui="tr-clip bl-clip border"
            className="w-40 md:w-full [--aug-bl:12px] [--aug-border-all:1px] [--aug-border-bg:var(--color-verde)] [--aug-tr:20px]"
          >
            <img
              src="/yo.webp"
              width="800"
              height="800"
              fetchPriority="high"
              alt="Foto de perfil de Alfredo Galdames"
              className="aspect-square w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
