export interface Tech {
  nombre: string
  icono: string
  invertir?: boolean
}

// Íconos autoalojados en public/stack (origen: devicons y simpleicons).
const icono = (archivo: string) => `/stack/${archivo}.svg`

export const stack: Tech[] = [
  { nombre: "JavaScript", icono: icono("javascript") },
  { nombre: "TypeScript", icono: icono("typescript") },
  { nombre: "React", icono: icono("react") },
  { nombre: "React Native", icono: icono("reactnative") },
  { nombre: "Next.js", icono: icono("nextjs"), invertir: true },
  { nombre: "Node.js", icono: icono("nodejs") },
  { nombre: "NestJS", icono: icono("nestjs") },
  { nombre: "Express", icono: icono("express"), invertir: true },
  { nombre: "Vite", icono: icono("vite") },
  { nombre: "Python", icono: icono("python") },
  { nombre: "FastAPI", icono: icono("fastapi") },
  { nombre: "LangChain", icono: icono("langchain"), invertir: true },
  { nombre: "LangGraph", icono: icono("langgraph"), invertir: true },
  { nombre: "Claude Code", icono: icono("claude") },
  { nombre: "MCP", icono: icono("mcp"), invertir: true },
  { nombre: "Docker", icono: icono("docker") },
  { nombre: "Nginx", icono: icono("nginx") },
  { nombre: "GitHub Actions", icono: icono("githubactions") },
  { nombre: "CI/CD", icono: icono("cicd"), invertir: true },
  { nombre: "Prometheus", icono: icono("prometheus") },
  { nombre: "Grafana", icono: icono("grafana") },
  { nombre: "Loki", icono: icono("loki") },
  { nombre: "AWS", icono: icono("aws"), invertir: true },
  { nombre: "PostgreSQL", icono: icono("postgresql") },
  { nombre: "Oracle", icono: icono("oracle") },
  { nombre: "Mercado Pago", icono: icono("mercadopago") },
]
