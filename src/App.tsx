import Navbar from "./components/Navbar"
import CursorDot from "./components/ui/CursorDot"
import Hero from "./components/Header"
import StackMarquee from "./components/StackMarquee"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-papel font-sans text-tinta antialiased">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-96 w-96 transform-gpu rounded-full bg-acento/30 blur-3xl dark:bg-acento/20" />
        <div className="absolute -right-24 top-16 h-80 w-80 transform-gpu rounded-full bg-verde/25 blur-3xl dark:bg-verde/15" />
      </div>
      <CursorDot />
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
        <Hero />
        <StackMarquee />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
