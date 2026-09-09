export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end business applications built with .NET, Angular, SQL Server, and modern web development practices.",
  },
  {
    number: "02",
    title: ".NET Development",
    description:
      "REST APIs, business logic, authentication, integrations, database-driven applications, and backend services.",
  },
  {
    number: "03",
    title: "Angular Development",
    description:
      "Responsive and maintainable Angular applications with reusable components, forms, dashboards, and API integration.",
  },
  {
    number: "04",
    title: "Blazor Server",
    description:
      "Interactive business applications and internal tools using Blazor Server and the .NET ecosystem.",
  },
  {
    number: "05",
    title: "SQL Server Development",
    description:
      "Database design, queries, stored procedures, relationships, optimization, and application data integration.",
  },
  {
    number: "06",
    title: "Ionic Mobile Development",
    description:
      "Cross-platform mobile applications using Ionic and Angular with reliable backend API integration.",
  },
];
