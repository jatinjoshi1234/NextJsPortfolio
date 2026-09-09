import { siteConfig } from "../data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              {siteConfig.about.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {siteConfig.about.title}
            </h2>
          </div>

          {/* Right */}
          <div>
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-8 text-slate-400">
                {paragraph}
              </p>
            ))}

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-2xl font-bold text-white">
                  {siteConfig.experienceSection.year}
                </p>
                <p className="mt-1 text-sm text-slate-500">Years Experience</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-2xl font-bold text-white">Full</p>
                <p className="mt-1 text-sm text-slate-500">Stack Development</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-2xl font-bold text-white">Web</p>
                <p className="mt-1 text-sm text-slate-500">
                  & Mobile Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
