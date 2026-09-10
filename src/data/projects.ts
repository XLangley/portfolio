export type MediaItem =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "youtube"; id: string; title?: string; thumbnail?: string }

export interface Project {
  nombre: string
  descripcion: string
  anio: string
  /** Sitio en producción. */
  link?: string
  /** Repositorio público, si existe. */
  repo?: string
  tecnologias: { nombre: string }[]
  media?: MediaItem[]
}

export const projects: Project[] = [
  {
    nombre: "Señalando un futuro",
    descripcion: "Aplicación web para aprendizaje de lengua de señas chilena (LSCh).",
    anio: "2024",
    link: "https://senalando-un-futuro.vercel.app/",
    tecnologias: [
      { nombre: "Next.js" },
      { nombre: "Nest.js" },
      { nombre: "TensorFlow" },
      { nombre: "Python" },
      { nombre: "OpenCV" },
      { nombre: "Prisma" },
    ],
    media: [
      { kind: "image", src: "/suf/inicio.webp", alt: "Vista 1" },
      { kind: "youtube", id: "lSXqBsSOrpU", title: "Video presentación", thumbnail: "/suf/video.webp" },
    ],
  },
]
