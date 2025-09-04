export interface Contact {
    nombre: string
    url: string
    icon: string
    color?: string
  }
  
  export const contacts: Contact[] = [
    {
      nombre: "GitHub",
      url: "https://github.com/XLangley",
      icon: "Github",
      color: "text-white hover:text-pink-400",
    },
    {
      nombre: "LinkedIn",
      url: "https://www.linkedin.com/in/alfredogaldames/",
      icon: "Linkedin",
      color: "text-blue-400 hover:text-pink-400",
    },
    {
      nombre: "Email",
      url: "mailto:agaldames.dev@gmail.com",
      icon: "Mail",
      color: "text-red-400 hover:text-pink-400",
    },
  ]
  