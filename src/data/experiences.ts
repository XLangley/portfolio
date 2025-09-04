export interface Experience {
    empresa: string
    link:string
    puesto: string
    periodo: string
    tecnologias: string[]
    descripcion: string[]
  }
  
  export const experiences: Experience[] = [
    {
        empresa: "Cramer",
        link:"https://www.linkedin.com/company/cramer-s-a-c-i-/posts/?feedView=all",
        puesto: "Desarrollador Full-Stack",
        periodo: "2025 — Presente",
        tecnologias: ["React", "Vite", "Node.js (Express, NestJS)", "PostgreSQL", "Oracle", "Docker"],
        descripcion: [
          "Diseño e implementación de APIs escalables con Node.js (Express, NestJS).",
          "Desarrollo de interfaces con React + Vite, aplicando buenas prácticas de rendimiento, accesibilidad y diseño responsivo.",
          "Contenerización y despliegue de servicios mediante Docker."
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
  