export type MediaItem =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "youtube"; id: string; title?: string; thumbnail?: string } // thumbnail opcional

export interface Project {
  nombre: string
  descripcion: string
  anio: string
  link?: string
  tecnologias: { nombre: string; icon?: string; color?: string }[]
  media?: MediaItem[] // <— antes era images: string[]
}
  
  export const projects: Project[] = [
    {
      nombre: "Señalando un futuro",
      descripcion: "Aplicación web para aprendizaje de lengua de señas chilena (LSCh).",
      anio: "2024",
      link: "https://senalando-un-futuro.vercel.app/",
      tecnologias: [
        { nombre: "Next.js", color: "text-blue-400" },
        { nombre: "Nest.js", color: "text-green-400" },
        { nombre: "TensorFlow", color: "text-orange-400" },
        { nombre: "Python", color: "text-yellow-400" },
        { nombre: "OpenCV", color: "text-purple-400" },
        { nombre: "Prisma", color: "text-indigo-400" },
      ],
      media: [
        { kind: "image", src: "/suf/inicio.png", alt: "Vista 1" },
        { kind: "youtube", id: "lSXqBsSOrpU", title: "Video presentación" },
      ],
    },
    {
      nombre: "Capacitaciones APH-KD",
      descripcion: "Landing page para empresa de capacitaciones medicas.",
      anio: "En contrucción",
      link: "#",
      tecnologias: [
        { nombre: "Vite", color: "text-sky-400" },
        { nombre: "Nest.js", color: "text-green-400" },
        { nombre: "Prisma", color: "text-indigo-400" },
      ],
      media: [
        { kind: "image", src: "/kd/temp.png", alt: "Vista 1" },
      ],
    },
  ]
  