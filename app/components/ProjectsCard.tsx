import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-sky-400">
          {project.category}
        </span>

        <span className="text-slate-600 transition group-hover:text-sky-400">
          ↗
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-500"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 border-t border-slate-800 pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-400"
        >
          View Case Study
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
