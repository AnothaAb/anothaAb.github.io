import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
export function generateStaticParams(){ return projects.map(p=>({ slug:p.slug })); }
export default function ProjectPage({ params }:{ params:{ slug:string } }){
  const project = projects.find(p=>p.slug===params.slug);
  if(!project) return notFound();
  return (
    <main className="container space-y-8 py-10">
      <nav className="text-sm"><Link className="underline" href="/">← Back</Link></nav>
      <header className="space-y-2">
        <span className="inline-block text-xs px-2 py-1 rounded-full border border-line">{project.category}</span>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-mute">{project.summary}</p>
        <div className="text-sm text-mute">Year: {project.year} · Role: {project.role}</div>
      </header>
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Stack</h2>
        <div className="flex flex-wrap gap-2">{project.stack.map(s=>(<span key={s} className="text-xs px-2 py-1 rounded-full border border-line">{s}</span>))}</div>
      </section>
      {project.outcome && (<section className="card p-6 space-y-2"><h2 className="text-xl font-semibold">Outcome</h2><p className="text-mute">{project.outcome}</p></section>)}
      {(project.links?.demo || project.links?.source) && (
        <section className="card p-6 space-x-3">
          {project.links?.demo && <a className="px-3 py-2 rounded-lg border border-line" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          {project.links?.source && <a className="px-3 py-2 rounded-lg border border-line" href={project.links.source} target="_blank" rel="noreferrer">Source</a>}
        </section>
      )}
    </main>
  );
}
