import { stack, type Tech } from "../data/stack"

function Icono({ tech }: { tech: Tech }) {
  return (
    <li className="shrink-0">
      <img
        src={tech.icono}
        alt={tech.nombre}
        title={tech.nombre}
        loading="lazy"
        className={`h-9 w-9 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 md:h-10 md:w-10 ${
          tech.invertir ? "dark:invert" : ""
        }`}
      />
    </li>
  )
}

export default function StackMarquee() {
  return (
    <section
      aria-label="Stack tecnológico"
      className="mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:mask-none md:mt-16"
    >
      <div className="group flex">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:animate-none">
          {stack.map((tech) => (
            <Icono key={tech.nombre} tech={tech} />
          ))}
        </ul>
        <ul
          aria-hidden="true"
          className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:hidden"
        >
          {stack.map((tech) => (
            <Icono key={tech.nombre} tech={tech} />
          ))}
        </ul>
      </div>
    </section>
  )
}
