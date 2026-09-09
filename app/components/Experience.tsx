import { experience } from "../data/experience";
import { siteConfig } from "../data/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-800/60 bg-slate-950/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
  {siteConfig.experienceSection.eyebrow}
</p>

<h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
  {siteConfig.experienceSection.title}
</h2>

<p className="mt-4 text-lg leading-8 text-slate-400">
  {siteConfig.experienceSection.description}
</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-slate-800 sm:block" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={`${item.company}-${item.period}`}
                className="relative sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.1)] sm:block" />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 font-medium text-sky-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="text-sm text-slate-500">
                      {item.period}
                      {item.location && ` · ${item.location}`}
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span className="mt-1 text-sky-400">✓</span>

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index !== experience.length - 1 && (
                  <div className="mx-auto mt-8 h-px w-full bg-slate-800/60 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
