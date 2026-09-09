export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior .NET / Angular Developer",
    company: "Company Name",
    period: "2023 — Present",
    location: "India",
    description:
      "Developing and maintaining scalable business applications using .NET, Angular, SQL Server, and modern software development practices.",
    responsibilities: [
      "Develop full-stack web applications using .NET and Angular.",
      "Design and integrate RESTful APIs for business applications.",
      "Develop reusable Angular components and responsive interfaces.",
      "Work with SQL Server databases, queries, and stored procedures.",
      "Implement authentication, authorization, and business workflows.",
      "Collaborate with teams to translate business requirements into technical solutions.",
    ],
  },
  {
    role: ".NET / Angular Developer",
    company: "Company Name",
    period: "2021 — 2023",
    location: "India",
    description:
      "Built business-focused web applications and backend services while working across frontend, backend, and database layers.",
    responsibilities: [
      "Developed applications using C#, .NET, Angular, and SQL Server.",
      "Built REST APIs and integrated third-party services.",
      "Created dashboards, forms, data tables, and business workflows.",
      "Implemented database operations using Entity Framework and SQL.",
      "Fixed application issues and improved existing functionality.",
      "Participated in application testing, debugging, and deployment activities.",
    ],
  },
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2020 — 2021",
    location: "India",
    description:
      "Worked on web and business applications while gaining hands-on experience across the Microsoft development ecosystem.",
    responsibilities: [
      "Developed application features using C# and .NET.",
      "Created frontend functionality using Angular.",
      "Worked with SQL Server and application data.",
      "Implemented CRUD functionality and business logic.",
      "Debugged issues and supported existing applications.",
      "Worked with development teams to deliver application features.",
    ],
  },
];
