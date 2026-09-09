import { siteConfig } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                {siteConfig.contactSection.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {siteConfig.contactSection.title}
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                {siteConfig.contactSection.description}
              </p>

              <a
                href={siteConfig.contact.email}
                className="mt-8 inline-flex rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Right */}

            <div className="border-t border-slate-800 bg-slate-950/50 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Email */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href={siteConfig.contact.emailLink}
                    className="mt-1 block break-words text-base font-medium text-white transition hover:text-sky-400"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                {/* Mobile */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Mobile No</p>

                  <a
                    href={siteConfig.contact.mobileLink}
                    className="mt-1 block break-words text-base font-medium text-white transition hover:text-sky-400"
                  >
                    {siteConfig.contact.mobile}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Whatsapp No</p>

                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-words text-base font-medium text-white transition hover:text-sky-400"
                  >
                    {siteConfig.contact.mobile}
                  </a>
                </div>

                {/* Location */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="mt-1 break-words text-base font-medium text-white">
                    {siteConfig.personal.location}
                  </p>
                </div>

                {/* Availability */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">
                    {siteConfig.personal.availability}
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-base font-medium text-white">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{siteConfig.contactSection.specialization}</span>
                  </p>
                </div>

                {/* Specialization */}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Specialization</p>

                  <p className="mt-1 break-words text-base font-medium text-white">
                    .NET · Angular · SQL Server
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
