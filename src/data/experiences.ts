export interface Experience {
    empresa: string
    link:string
    puesto: string
    periodo: string
    tecnologias: string[]
    descripcion: string[]
  }
  
  /** Un trabajo es "actual" si su periodo sigue abierto. */
  export const esActual = (exp: Experience) => /presente|actualidad/i.test(exp.periodo)

  export const experiences: Experience[] = [
    {
        empresa: "Cramer",
        link:"https://www.linkedin.com/company/cramer-s-a-c-i-/posts/?feedView=all",
        puesto: "Desarrollador Full-Stack",
        periodo: "2025 — Presente",
        tecnologias: ["React", "Vite", "Node.js (Express, NestJS)", "Python (FastAPI, LangGraph)", "OpenAI", "PostgreSQL", "Oracle", "Docker"],
        descripcion: [
          "Migración de Salesforce a un CRM propio multi-tenant (SalesCramer) con NestJS + Oracle PL/SQL y React, integrado con un agente de IA conversacional (Python, FastAPI, LangGraph + OpenAI) que navega el sistema y autocompleta formularios desde lenguaje natural.",
          "Diseño e implementación de APIs escalables con Node.js (Express, NestJS).",
          "Desarrollo de interfaces con React + Vite, aplicando buenas prácticas de rendimiento, accesibilidad y diseño responsivo.",
          "Contenerización y despliegue de servicios mediante Docker."
        ]
    },
    {
      empresa: "ColectyRed",
      link:"https://www.linkedin.com/company/colectyred/",
      puesto: "Full Stack Engineer",
      periodo: "2026 — Presente",
      tecnologias: ["React", "React Native", "NestJS", "TypeScript", "PostgreSQL", "Mercado Pago", "GitHub Actions", "AWS EC2", "Claude Code / MCP"],
      descripcion: [
        "Rediseño y migración de la aplicación móvil de pasajeros, modernizando completamente la experiencia UI/UX y mejorando la usabilidad de la aplicación.",
        "Integración de Mercado Pago Checkout API para habilitar y gestionar el flujo de pagos dentro de la aplicación.",
        "Implementación de pipeline de CI/CD con GitHub Actions, automatizando el proceso de build y despliegue hacia infraestructura AWS EC2.",
        "Desarrollo y evolución de soluciones Full Stack y Mobile utilizando tecnologías como React, React Native, NestJS, TypeScript y PostgreSQL.",
        "Incorporación de herramientas de IA para desarrollo de software, utilizando flujos de trabajo con Claude Code, MCP y AI-assisted development."
      ]
    },
    {
      empresa: "Insico S.A",
      link:"https://www.linkedin.com/company/insico-s.a./posts/?feedView=all",
      puesto: "Desarrollador Full-Stack",
      periodo: "2024 — 2025",
      tecnologias: [".NET Framework / ASP.NET", "Oracle", "JQuery"],
      descripcion: [
        "Desarrollo de sistemas de gestión de honorarios para distintas entidades",
        "Migración de aplicaciones legadas en VB6 a entornos web modernos con ASP.NET sobre .NET Framework"
      ]
    },
  ]
  