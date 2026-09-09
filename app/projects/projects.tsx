import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <section className="border-b border-slate-800/60 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/#projects"
            className="text-sm text-slate-500 transition hover:text-sky-400"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10">
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-sky-400">
              {project.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-400">
              {project.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 border-b border-slate-800 pb-12 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Role
              </p>

              <p className="mt-2 font-medium text-white">{project.role}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Duration
              </p>

              <p className="mt-2 font-medium text-white">{project.duration}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Category
              </p>

              <p className="mt-2 font-medium text-white">{project.category}</p>
            </div>
          </div>

          {/* Challenge */}
          <div className="mt-16 grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                01
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Challenge
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-400">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-16 grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                02
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Solution
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-400">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mt-16 grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                03
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">Results</h2>
            </div>

            <ul className="space-y-4">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex gap-3 text-lg leading-8 text-slate-400"
                >
                  <span className="mt-2 text-sky-400">✓</span>

                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="mt-16 flex flex-wrap gap-4 border-t border-slate-800 pt-10">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Live Demo ↗
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
