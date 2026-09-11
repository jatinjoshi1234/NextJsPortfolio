"use client";

import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { siteConfig } from "../data/site";

const featuredProjects = projects.filter((project) => project.featured);

export default function ResumePage() {
  // const downloadResume = async () => {
  //   const element = document.getElementById("resume-content");

  //   if (!element) {
  //     console.error("Resume element not found");
  //     return;
  //   }

  //   try {
  //     const html2pdf = (await import("html2pdf.js")).default;

  //     // Save original styles
  //     const originalStyle = element.getAttribute("style");

  //     // Force safe colors that html2canvas understands
  //     element.style.backgroundColor = "#ffffff";
  //     element.style.color = "#0f172a";

  //     const allElements = element.querySelectorAll("*");

  //     const originalStyles = new Map<HTMLElement, string | null>();

  //     allElements.forEach((node) => {
  //       const el = node as HTMLElement;

  //       originalStyles.set(el, el.getAttribute("style"));

  //       const computed = window.getComputedStyle(el);

  //       // Replace unsupported lab/oklch colors
  //       if (
  //         computed.color.includes("lab") ||
  //         computed.color.includes("oklch")
  //       ) {
  //         el.style.color = "#334155";
  //       }

  //       if (
  //         computed.backgroundColor.includes("lab") ||
  //         computed.backgroundColor.includes("oklch")
  //       ) {
  //         el.style.backgroundColor = "#ffffff";
  //       }

  //       if (
  //         computed.borderColor.includes("lab") ||
  //         computed.borderColor.includes("oklch")
  //       ) {
  //         el.style.borderColor = "#e2e8f0";
  //       }
  //     });

  //     const options: any = {
  //       margin: [10, 10, 10, 10],
  //       filename: `${siteConfig.personal.name}-Resume.pdf`,

  //       image: {
  //         type: "jpeg",
  //         quality: 0.98,
  //       },

  //       html2canvas: {
  //         scale: 2,
  //         useCORS: true,
  //         allowTaint: true,
  //         backgroundColor: "#ffffff",

  //         // Important for full resume
  //         windowWidth: document.documentElement.scrollWidth,
  //         windowHeight: document.documentElement.scrollHeight,

  //         scrollX: 0,
  //         scrollY: 0,
  //       },

  //       jsPDF: {
  //         unit: "mm",
  //         format: "a4",
  //         orientation: "portrait",
  //         compress: true,
  //       },

  //       pagebreak: {
  //         mode: ["css", "legacy"],
  //         avoid: ["article", "section", "h2", "h3"],
  //       },
  //     };

  //     await html2pdf().set(options).from(element).save();

  //     // Restore original styles
  //     if (originalStyle) {
  //       element.setAttribute("style", originalStyle);
  //     } else {
  //       element.removeAttribute("style");
  //     }

  //     originalStyles.forEach((style, el) => {
  //       if (style) {
  //         el.setAttribute("style", style);
  //       } else {
  //         el.removeAttribute("style");
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Failed to generate PDF:", error);
  //   }
  // };

  const downloadResume = async () => {
    window.open("/resume.pdf", "_blank");
    // const element = document.getElementById("resume-content");

    // if (!element) {
    //   console.error("Resume element not found");
    //   return;
    // }

    // try {
    //   const html2pdf = (await import("html2pdf.js")).default;

    //   const originalStyle = element.getAttribute("style");

    //   // Force PDF-safe colors
    //   element.style.backgroundColor = "#ffffff";
    //   element.style.color = "#0f172a";

    //   // Store original inline styles
    //   const allElements = element.querySelectorAll("*");
    //   const originalStyles = new Map<HTMLElement, string | null>();

    //   allElements.forEach((node) => {
    //     const el = node as HTMLElement;

    //     originalStyles.set(el, el.getAttribute("style"));

    //     const computed = window.getComputedStyle(el);

    //     if (
    //       computed.color.includes("lab") ||
    //       computed.color.includes("oklch")
    //     ) {
    //       el.style.color = "#334155";
    //     }

    //     if (
    //       computed.backgroundColor.includes("lab") ||
    //       computed.backgroundColor.includes("oklch")
    //     ) {
    //       el.style.backgroundColor = "#ffffff";
    //     }

    //     if (
    //       computed.borderColor.includes("lab") ||
    //       computed.borderColor.includes("oklch")
    //     ) {
    //       el.style.borderColor = "#e2e8f0";
    //     }
    //   });

    //   const options: any = {
    //     margin: [8, 8, 8, 8],

    //     filename: `${siteConfig.personal.name}-Resume.pdf`,

    //     image: {
    //       type: "jpeg",
    //       quality: 0.95,
    //     },

    //     html2canvas: {
    //       scale: 2,
    //       useCORS: true,
    //       allowTaint: false,
    //       backgroundColor: "#ffffff",

    //       // Important
    //       scrollX: 0,
    //       scrollY: 0,

    //       windowWidth: element.scrollWidth,
    //     },

    //     jsPDF: {
    //       unit: "mm",
    //       format: "a4",
    //       orientation: "portrait",
    //       compress: true,
    //     },

    //     pagebreak: {
    //       mode: ["css", "legacy"],
    //       avoid: [".experience-item", ".project-item"],
    //     },
    //   };

    //   await html2pdf().set(options).from(element).save();

    //   // Restore main element
    //   if (originalStyle) {
    //     element.setAttribute("style", originalStyle);
    //   } else {
    //     element.removeAttribute("style");
    //   }

    //   // Restore children
    //   originalStyles.forEach((style, el) => {
    //     if (style) {
    //       el.setAttribute("style", style);
    //     } else {
    //       el.removeAttribute("style");
    //     }
    //   });
    // } catch (error) {
    //   console.error("Failed to generate PDF:", error);
    // }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Resume Actions - hidden when printing */}
      <div className="print:hidden border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
          >
            ← Back to Portfolio
          </a>

          <button
            onClick={downloadResume}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Download / Print Resume
          </button>
        </div>
      </div>

      {/* Resume */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 print:max-w-none print:px-0 print:py-0">
        <article className="w-full bg-white" id="resume-content">
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {siteConfig.personal.name} {siteConfig.personal.lastName}
            </h1>

            <p className="mt-2 text-lg font-medium text-sky-600">
              {siteConfig.personal.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-sky-600"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.mobileLink}
                className="hover:text-sky-600"
              >
                +91 {siteConfig.contact.mobile}
              </a>

              <span>{siteConfig.personal.location}</span>

              <a
                href={siteConfig.social.linkedin}
                className="hover:text-sky-600"
              >
                LinkedIn
              </a>

              <a href={siteConfig.social.github} className="hover:text-sky-600">
                GitHub
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <ResumeSection title="Professional Summary">
            <p className="text-sm leading-6 text-slate-700">
              {siteConfig.personal.description}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Experienced in developing business applications across the
              frontend, backend, database, and mobile layers. Strong hands-on
              experience with .NET, ASP.NET Core, Angular, Blazor Server, SQL
              Server, Entity Framework, REST APIs, and Ionic. Comfortable
              working with complex business workflows, third-party integrations,
              authentication, role-based functionality, and production
              applications.
            </p>
          </ResumeSection>

          {/* Core Skills */}
          <ResumeSection title="Technical Skills">
            <div className="grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-2">
              <SkillRow
                label="Backend"
                value=".NET, ASP.NET Core, C#, REST APIs"
              />

              <SkillRow
                label="Frontend"
                value="Angular, TypeScript, JavaScript, HTML, CSS"
              />

              <SkillRow
                label="Database"
                value="SQL Server, Entity Framework, LINQ, Stored Procedures"
              />

              <SkillRow
                label="Architecture"
                value="3-Tier Architecture, API Integration, Business Logic"
              />

              <SkillRow
                label="UI / Frameworks"
                value="Blazor Server, Angular, Responsive UI"
              />

              <SkillRow label="Mobile" value="Ionic, Angular" />

              <SkillRow
                label="Integrations"
                value="WhatsApp API, Flywire, Zoho CRM, WordPress"
              />

              <SkillRow
                label="Development"
                value="Authentication, Authorization, CRUD, Debugging"
              />
            </div>
          </ResumeSection>

          {/* Experience */}
          <ResumeSection title="Professional Experience">
            <div className="space-y-5">
              {experience.map((item, index) => (
                <ExperienceItem
                  key={index}
                  role={`${item.role}`}
                  company={`${item.company}`}
                  period={`${item.period}`}
                  location={`${item.location}`}
                  description={`${item.description}`}
                  responsibilities={item.responsibilities}
                />
              ))}
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Selected Projects">
            <div className="space-y-4">
              {featuredProjects.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={`${project.title}`}
                  role={`${project.role}`}
                  technologies={`${project.technologies}`}
                  description={`${project.description}`}
                  highlights={project.results}
                />
              ))}
            </div>
          </ResumeSection>

          {/* Services / Strengths */}
          <ResumeSection title="Professional Strengths">
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <Bullet text="Full-Stack Business Application Development" />
              <Bullet text="REST API Development & Integration" />
              <Bullet text="Angular Frontend Development" />
              <Bullet text="Database-Driven Application Development" />
              <Bullet text="Business Workflow Implementation" />
              <Bullet text="Third-Party API Integration" />
              <Bullet text="Authentication & Authorization" />
              <Bullet text="Production Application Support" />
            </div>
          </ResumeSection>

          {/* Footer */}
          <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <p>
              {siteConfig.personal.title} · {siteConfig.personal.location}
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}

/* -------------------------------------------------
   Components
------------------------------------------------- */

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h2 className="mb-3 border-b border-slate-200 pb-1.5 text-sm font-bold uppercase tracking-wider text-slate-900">
        {title}
      </h2>

      {children}
    </section>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-semibold text-slate-900">{label}:</span>{" "}
      <span className="text-slate-700">{value}</span>
    </div>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  location,
  description,
  responsibilities,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}) {
  return (
    <article className="experience-item">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-base font-bold text-slate-900">{role}</h3>

          <p className="text-sm font-medium text-sky-700">{company}</p>
        </div>

        <div className="text-left text-xs text-slate-500 sm:text-right">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>

      <ul className="mt-2 space-y-1">
        {responsibilities.map((item) => (
          <li
            key={item}
            className="relative pl-4 text-sm leading-5 text-slate-700"
          >
            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-sky-600" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProjectItem({
  title,
  role,
  technologies,
  description,
  highlights,
}: {
  title: string;
  role: string;
  technologies: string;
  description: string;
  highlights: string[];
}) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-bold text-slate-900">{title}</h3>

        <span className="text-xs font-medium text-sky-700">{role}</span>
      </div>

      <p className="mt-1 text-xs font-medium text-slate-500">{technologies}</p>

      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>

      <ul className="mt-2 space-y-1">
        {highlights.map((item) => (
          <li
            key={item}
            className="relative pl-4 text-sm leading-5 text-slate-700"
          >
            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-sky-600" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="relative pl-4 text-sm text-slate-700">
      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-sky-600" />
      {text}
    </div>
  );
}
