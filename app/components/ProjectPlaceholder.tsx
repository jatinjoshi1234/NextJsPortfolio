type ProjectPlaceholderProps = {
  title: string;
  category: string;
  technologies: string[];
};

export default function ProjectPlaceholder({
  title,
  category,
  technologies,
}: ProjectPlaceholderProps) {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-video">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_35%)]" />

      {/* Fake browser window */}
      <div className="absolute left-3 right-3 top-3 overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900 shadow-2xl sm:left-6 sm:right-6 sm:top-6 sm:rounded-xl">
        {/* Browser header */}
        <div className="flex h-7 items-center gap-1.5 border-b border-slate-800 bg-slate-950 px-2.5 sm:h-9 sm:gap-2 sm:px-4">
          <span className="h-2 w-2 shrink-0 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" />

          <div className="ml-2 h-3 flex-1 rounded bg-slate-800 sm:ml-3 sm:h-4" />
        </div>

        {/* Dashboard mockup */}
        <div className="flex h-28 sm:h-44">
          {/* Sidebar */}
          <div className="w-10 shrink-0 border-r border-slate-800 bg-slate-950 p-2 sm:w-16 sm:p-3">
            <div className="mb-3 h-4 w-4 rounded bg-sky-400/80 sm:mb-5 sm:h-6 sm:w-6" />

            <div className="space-y-2 sm:space-y-3">
              <div className="h-1.5 rounded bg-slate-700" />
              <div className="h-1.5 rounded bg-slate-800" />
              <div className="h-1.5 rounded bg-slate-800" />
              <div className="h-1.5 rounded bg-slate-800" />
            </div>
          </div>

          {/* Main content */}
          <div className="min-w-0 flex-1 p-3 sm:p-5">
            <div className="mb-2 h-3 w-20 rounded bg-slate-700 sm:mb-4 sm:h-4 sm:w-32" />

            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              <div className="h-9 rounded-md border border-slate-800 bg-slate-800/70 sm:h-14 sm:rounded-lg" />
              <div className="h-9 rounded-md border border-slate-800 bg-slate-800/70 sm:h-14 sm:rounded-lg" />
              <div className="h-9 rounded-md border border-slate-800 bg-slate-800/70 sm:h-14 sm:rounded-lg" />
            </div>

            <div className="mt-2 h-10 rounded-md border border-slate-800 bg-slate-800/50 sm:mt-4 sm:h-16 sm:rounded-lg" />
          </div>
        </div>
      </div>

      {/* Project information */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-6 sm:right-6">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-wider text-sky-400 sm:text-xs">
            {category}
          </p>

          <h3 className="mt-0.5 truncate text-base font-semibold text-white sm:mt-1 sm:text-lg">
            {title}
          </h3>

          {/* Technologies - mobile */}
          <div className="mt-2 flex max-w-full flex-wrap gap-1 sm:hidden">
            {technologies.slice(0, 2).map((technology) => (
              <span
                key={technology}
                className="max-w-[120px] truncate rounded bg-slate-800/90 px-1.5 py-0.5 text-[9px] text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Technologies - desktop */}
          <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
            {technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded bg-slate-800/90 px-2 py-1 text-[10px] text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
