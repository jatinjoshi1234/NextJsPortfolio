import { siteConfig } from "../data/site";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-slate-800/60 bg-slate-950/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            {siteConfig.services.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {siteConfig.services.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            {siteConfig.services.description}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-slate-950 p-7 transition duration-300 hover:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-sky-400">
                  {service.number}
                </span>

                <span className="text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
