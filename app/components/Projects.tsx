import Link from "next/link";
import { siteConfig } from "../data/site";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              {siteConfig.projects.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {siteConfig.projects.title}
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              {siteConfig.projects.description}
            </p>
          </div>
          {/* 
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
          >
            View All Projects →
          </Link> */}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
