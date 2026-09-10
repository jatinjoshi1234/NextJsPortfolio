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
    role: ".NET / Blazor Server / Angular Developer",
    company: "Connectus Infoway Pvt Ltd",
    period: "2022 — Present",
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
    role: "Junior .NET Framework / Angular Developer",
    company: "Mehta websolutions",
    period: "2020 — 2022",
    location: "Jamnagar,Gujarat,India",
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
    role: "Store Incharge",
    company: "Kalyans' hotels",
    period: "2018 — 2020",
    location: "Khambhakiya,Gujarat,India",
    description:
      "Worked as Store incharge in Hotels and Green coal industries over 1.5 years of experience.",
    responsibilities: [
      "Managed stock receiving, storage, issuing, and maintaining accurate inventory records.",
      "Monitored stock levels and ensured timely availability of materials.",
      "Maintained proper documentation and coordinated with relevant departments for smooth store operations.",
      "Experienced in stock checking, inventory control, and maintaining organized warehouse/store facilities.",
    ],
  },
];
