"use client";

import { siteConfig } from "../data/site";

export default function ResumePage() {
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
            onClick={() => window.print()}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Download / Print Resume
          </button>
        </div>
      </div>

      {/* Resume */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 print:max-w-none print:px-0 print:py-0">
        <article className="bg-white print:w-full">
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
            <div className="space-y-7">
              {/* Senior */}
              <ExperienceItem
                role="Senior .NET / Angular Developer"
                company="Company Name"
                period="2023 — Present"
                location="India"
                description="Developing and maintaining scalable business applications using .NET, Angular, SQL Server, and modern software development practices."
                responsibilities={[
                  "Develop full-stack web applications using .NET and Angular.",
                  "Design and integrate RESTful APIs for business applications.",
                  "Develop reusable Angular components and responsive interfaces.",
                  "Work with SQL Server databases, queries, and stored procedures.",
                  "Implement authentication, authorization, and business workflows.",
                  "Collaborate with teams to translate business requirements into technical solutions.",
                ]}
              />

              {/* Developer */}
              <ExperienceItem
                role=".NET / Angular Developer"
                company="Company Name"
                period="2021 — 2023"
                location="India"
                description="Built business-focused web applications and backend services while working across frontend, backend, and database layers."
                responsibilities={[
                  "Developed applications using C#, .NET, Angular, and SQL Server.",
                  "Built REST APIs and integrated third-party services.",
                  "Created dashboards, forms, data tables, and business workflows.",
                  "Implemented database operations using Entity Framework and SQL.",
                  "Fixed application issues and improved existing functionality.",
                  "Participated in application testing, debugging, and deployment activities.",
                ]}
              />

              {/* Software Developer */}
              <ExperienceItem
                role="Software Developer"
                company="Company Name"
                period="2020 — 2021"
                location="India"
                description="Worked on web and business applications while gaining hands-on experience across the Microsoft development ecosystem."
                responsibilities={[
                  "Developed application features using C# and .NET.",
                  "Created frontend functionality using Angular.",
                  "Worked with SQL Server and application data.",
                  "Implemented CRUD functionality and business logic.",
                  "Debugged issues and supported existing applications.",
                  "Worked with development teams to deliver application features.",
                ]}
              />
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Selected Projects">
            <div className="space-y-6">
              <ProjectItem
                title="Prognosis Finance ERP"
                role="Full-Stack Developer"
                technologies=".NET, .NET Core, JavaScript, jQuery, SQL Server, Entity Framework Core"
                description="Production-based healthcare and insurance finance ERP developed by transitioning an existing desktop application into a modern web platform. Worked on API development, frontend functionality, business workflows, and WhatsApp API integration."
                highlights={[
                  "Developed and integrated REST APIs based on business requirements.",
                  "Implemented frontend functionality and connected Angular/web interfaces with backend services.",
                  "Worked across procurement, finance, sales, costing, inventory, pharmacy, dental, and patient management workflows.",
                  "Implemented WhatsApp-related functionality without relying on a third-party API provider.",
                ]}
              />

              <ProjectItem
                title="Horizon Prognosis Health Insurance"
                role="Full-Stack Developer"
                technologies=".NET Core 5, Angular 13+, SQL Server"
                description="Production-based healthcare and insurance management platform supporting Underwriting, PBM, Claims, Sales, Administration, and Finance modules."
                highlights={[
                  "Implemented frontend functionality and backend API integration.",
                  "Worked across interconnected ERP modules and business workflows.",
                  "Investigated existing frontend and API flows before implementing changes.",
                  "Resolved application issues and tested related functionality.",
                ]}
              />

              <ProjectItem
                title="Raats | Motorsports"
                role="Full-Stack Developer"
                technologies=".NET 9, Angular 21, Entity Framework Core 10"
                description="Production-based tyre service and warehouse management platform supporting Admin, User, and Customer roles."
                highlights={[
                  "Implemented role-based functionality for Admin, User, and Customer.",
                  "Worked on orders, quotations, assignments, tasks, schedules, customers, and logistics.",
                  "Integrated frontend functionality with backend APIs.",
                  "Implemented workflows according to different user permissions.",
                ]}
              />

              <ProjectItem
                title="Villa Management System"
                role="Full-Stack Developer"
                technologies="Blazor Server, .NET 9, SQL Server, 3-Tier Architecture, Flywire, Zoho CRM, WordPress"
                description="Villa Management ERP for managing properties, rooms, availability, seasonal pricing, bookings, quotations, payments, and enquiries."
                highlights={[
                  "Developed and maintained admin-side ERP functionality using Blazor Server and .NET 9.",
                  "Implemented villa, room, availability, pricing, booking, quotation, payment, and enquiry management.",
                  "Integrated Flywire payment workflows and payment status synchronization.",
                  "Worked on Zoho CRM API integration and ERP synchronization with WordPress.",
                  "Implemented automated booking and payment reminder workflows.",
                ]}
              />
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
    <section className="mt-7">
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
    <article>
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
