import Navbar from "./components/Navbar"
import Hero from "./components/Header"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />   
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>      
      <Navbar />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 md:pt-28 pb-4">
        <div className="flex justify-center items-center">
          <Hero />
        </div>
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
