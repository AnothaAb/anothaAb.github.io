import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectsGrid, type Project } from "@/components/ProjectsGrid";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
export default function HomePage() {
  return (
    <main id="main" className="container space-y-16 py-10">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-b border-line">
        <nav className="container flex items-center justify-between py-3">
          <Link href="/" className="font-semibold">Ab (Abdulelah) Almasri</Link>
          <div className="flex items-center gap-3">
            <a className="px-3 py-2 rounded-lg hover:underline" href="#projects">Projects</a>
            <a className="px-3 py-2 rounded-lg hover:underline" href="#about">About</a>
            <a className="px-3 py-2 rounded-lg bg-accent text-black" href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <Hero />
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ProjectsGrid projects={projects as Project[]} />
      </section>
      <section id="about" className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-mute">Computer Engineering (Robotics) student at Boston University. Interested in embedded systems,
            hardware–software integration, and building small products end-to-end. Comfortable with Python, JavaScript, and Arduino/C++.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-2">
            <li>📍 Boston, MA</li>
            <li>🎓 B.S. Computer Engineering — Robotics (BU), Expected May 2027</li>
            <li>💼 Seeking: Internship / Entry-level</li>
            <li>✉️ <a className="underline" href="mailto:aalmasri@bu.edu">aalmasri@bu.edu</a></li>
          </ul>
        </div>
      </section>
      <section id="contact" className="card p-6">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <div className="flex gap-3 flex-wrap">
          <a className="px-3 py-2 rounded-lg border border-line" href="mailto:aalmasri@bu.edu">Email</a>
          <a className="px-3 py-2 rounded-lg border border-line" href="https://www.linkedin.com/in/ab-almasri-81b007255/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="px-3 py-2 rounded-lg bg-accent text-black" href="/resume.pdf" download>Download Resume</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
