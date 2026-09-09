import { siteConfig } from "../data/site";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "Angular 13+",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Ionic",
    ],
  },
  {
    title: "Backend",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "Blazor Server",
      "Entity Framework Core",
    ],
  },
  {
    title: "Database",
    skills: [
      "SQL Server",
      "SQL",
      "Stored Procedures",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
      "Postman",
      "API Integration",
      "Agile Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            {siteConfig.skills.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {siteConfig.skills.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-400">
              {siteConfig.skills.description}

          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300 transition hover:border-sky-500/50 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
