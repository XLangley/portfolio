export interface Tech {
  nombre: string
  icono: string
  invertir?: boolean
}

const cdn = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

export const stack: Tech[] = [
  { nombre: "JavaScript", icono: `${cdn}/javascript/javascript-original.svg` },
  { nombre: "TypeScript", icono: `${cdn}/typescript/typescript-original.svg` },
  { nombre: "React", icono: `${cdn}/react/react-original.svg` },
  { nombre: "Next.js", icono: `${cdn}/nextjs/nextjs-original.svg`, invertir: true },
  { nombre: "Node.js", icono: `${cdn}/nodejs/nodejs-original.svg` },
  { nombre: "NestJS", icono: `${cdn}/nestjs/nestjs-original.svg` },
  { nombre: "Express", icono: `${cdn}/express/express-original.svg`, invertir: true },
  { nombre: "Vite", icono: `${cdn}/vitejs/vitejs-original.svg` },
  { nombre: "Python", icono: `${cdn}/python/python-original.svg` },
  { nombre: "FastAPI", icono: `${cdn}/fastapi/fastapi-original.svg` },
  { nombre: "LangChain", icono: "https://cdn.simpleicons.org/langchain", invertir: true },
  { nombre: "LangGraph", icono: "https://cdn.simpleicons.org/langgraph", invertir: true },
  { nombre: "Docker", icono: `${cdn}/docker/docker-original.svg` },
  { nombre: "Nginx", icono: `${cdn}/nginx/nginx-original.svg` },
  { nombre: "PostgreSQL", icono: `${cdn}/postgresql/postgresql-original.svg` },
  { nombre: "Oracle", icono: `${cdn}/oracle/oracle-original.svg` },
]
