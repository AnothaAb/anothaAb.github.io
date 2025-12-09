"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
export type Project = { slug:string; title:string; category:"Software"|"Hardware"|"Other"; year:string; summary:string; stack:string[]; role:string; outcome?:string; links?:{ demo?:string; source?:string } };
type Props = { projects: Project[] };
const categories = ["All","Software","Hardware","Other"] as const;
export function ProjectsGrid({ projects }: Props) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => (filter==="All"?projects:projects.filter(p=>p.category===filter)), [projects, filter]);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map(c=>(
          <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1.5 rounded-full border ${filter===c?"bg-accent text-black border-transparent":"border-line"}`} aria-pressed={filter===c}>{c}</button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map(p=>(
          <article key={p.slug} className="card p-5">
            <div className="text-xs px-2 py-1 rounded-full border border-line w-fit mb-2">{p.category}</div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-mute text-sm">{p.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.stack.slice(0,4).map(s=>(<span key={s} className="text-[11px] px-2 py-1 rounded-full border border-line">{s}</span>))}
            </div>
            <div className="mt-4"><Link className="underline" href={`/projects/${p.slug}`}>Read case study →</Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}
