import ProjectPlaceholder from "@/app/components/ProjectPlaceholder";
import { projects } from "@/app/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | John Son",
    };
  }

  return {
    title: `${project.title} | John Son`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950">
      {/* Header */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-slate-400 transition hover:text-sky-400"
          >
            ← Back to Projects
          </Link>

          <div className="mt-8 sm:mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 sm:text-sm">
              {project.category}
            </p>

            <h1 className="mt-3 break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Preview */}
      {/* Project Preview */}
      <section className="w-full py-6 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl px-3 sm:px-6 lg:px-8">
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 sm:rounded-2xl">
            <div className="w-full min-w-0">
              <ProjectPlaceholder
                title={project.title}
                category={project.category}
                technologies={project.technologies}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* IMPORTANT: Mobile = 1 column, Desktop = 2 columns */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
            {/* Main Content */}
            <div className="min-w-0">
              {/* Project Overview */}
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Project Overview
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mt-10 sm:mt-12">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Key Features
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.technologies.map((feature) => (
                    <div
                      key={feature}
                      className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 text-sky-400">✓</span>

                        <span className="min-w-0 break-words text-sm leading-6 text-slate-300">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contribution */}
              <div className="mt-10 sm:mt-12">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  My Contribution
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="min-w-0">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 lg:sticky lg:top-28">
                <h3 className="font-semibold text-white">Technologies</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full break-words rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 space-y-3 sm:mt-8">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-sky-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                  >
                    View Live Demo ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
                  >
                    View Source Code ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
