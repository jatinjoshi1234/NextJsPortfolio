import { experience } from "../data/experience";
import { siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance & full-time opportunities
            </div>

            <p className="mb-4 text-lg font-medium text-sky-400">
              {siteConfig.hero.greeting}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.hero.title}{" "}
              <span className="text-sky-400">
                {siteConfig.hero.highlightedTitle}
              </span>{" "}
              {siteConfig.hero.titleSuffix}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              {siteConfig.hero.description}
            </p>

            <p className="mt-4 text-base text-slate-500">
              {siteConfig.hero.secondaryDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.hero.primaryButton.href}
                className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {siteConfig.hero.primaryButton.label}
              </a>

              <a
                href={siteConfig.hero.secondaryButton.href}
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
              >
                {siteConfig.hero.secondaryButton.label}
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>

                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-slate-500">developer</span>
                  <span className="text-white"> = </span>
                  <span className="text-sky-400">
                    "{siteConfig.personal.name} {siteConfig.personal.lastName}"
                  </span>
                </div>

                <div>
                  <span className="text-slate-500">experience</span>
                  <span className="text-white"> = </span>
                  <span className="text-emerald-400">
                    "{siteConfig.experienceSection.year} years"
                  </span>
                </div>

                <div>
                  <span className="text-slate-500">frontend</span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400">
                    {siteConfig.experienceSection.frontEnd}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500">backend</span>
                  <span className="text-white"> = </span>
                  <span className="text-purple-400">
                    "{siteConfig.experienceSection.backEnd}"
                  </span>
                </div>

                <div>
                  <span className="text-slate-500">database</span>
                  <span className="text-white"> = </span>
                  <span className="text-yellow-400">
                    "{siteConfig.experienceSection.dataBase}"
                  </span>
                </div>

                <div>
                  <span className="text-slate-500">mobile</span>
                  <span className="text-white"> = </span>
                  <span className="text-pink-400">
                    "{siteConfig.experienceSection.mobile}"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
