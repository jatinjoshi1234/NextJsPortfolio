import Link from "next/link";
import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <Link href="/" className="text-lg font-bold text-white">
            {siteConfig.personal.shortName}{" "}
            <span className="text-sky-400">{siteConfig.personal.lastName}</span>
          </Link>

          <p className="mt-2 text-sm text-slate-500">
            {siteConfig.footer.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-500">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            LinkedIn
          </a>

          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            GitHub
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="transition hover:text-sky-400"
          >
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-slate-600 lg:px-8">
          © {new Date().getFullYear()} . {siteConfig.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
