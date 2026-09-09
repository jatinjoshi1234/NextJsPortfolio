export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;

  technologies: string[];

  role: string;

  duration: string;

  challenge: string;

  solution: string;

  results: string[];

  demoUrl: string;

  githubUrl: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "prognosis-finance-erp",
    title: "Prognosis Finance Erp",
    category: "Web Application",
    shortDescription:
      "Project XYZ is a production-based web application developed by converting an existing desktop application into a modern web-based platform. The system is designed for healthcare and insurance finance operations, bringing multiple business processes into one application.The platform covers areas such as procurement, finance, sales, costing, inventory, pharmacy, dental, and patient management. It helps users manage day-to-day operations and keeps different departments connected within a single system.",
    description:
      "I worked mainly on API development and frontend functionality. I developed and integrated APIs based on the application's business requirements and implemented frontend features to connect the user interface with the backend.I also worked on the WhatsApp API integration, including the required functionality without relying on a third-party API provider.",
    technologies: [
      ".NET",
      ".NET Core",
      "Html",
      "Jquery/Javascript",
      "SQL Server",
      "Entity Framework Core",
    ],
    role: "Full-Stack Developer",
    duration: "Project Duration",
    challenge:
      "Different frontend features depended on APIs with different business rules and data requirements. The project required WhatsApp-related functionality without depending on a third-party API provider.",
    solution:
      "Developed and integrated APIs according to the required functionality and handled the data flow between the frontend and backend.",
    results: [
      "Successfully transitioned the existing desktop application into a web-based platform while maintaining the core business workflows.",
      "Reduced dependency on manual data management.",
      "Improved consistency across business workflows.",
    ],
    demoUrl: "https://neminsuranceprovider.prognosiserp.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    slug: "horizon-prognosis-health-insurance",
    title: "Horizon Prognosis Health Insurance",
    category: "Dashboard & Reporting",
    shortDescription:
      "I worked on the frontend functionality and backend API integration across different modules of the ERP. My work included implementing required changes, resolving issues, and connecting frontend features with the backend services based on business requirements.",
    description:
      "This is a production-based healthcare and insurance management platform that supports different business operations through modules such as Underwriting, PBM, Claims, Sales, Administration, and Finance.",
    technologies: [".NET Core 5", "Ang Cli 13+", "SQL Server"],
    role: "Full-Stack Developer",
    duration: "Project Duration",
    challenge:
      "The ERP contained several interconnected modules, so changes in one area could depend on data or functionality from another module.",
    solution:
      "Traced the existing frontend and API flow before making changes and tested the related functionality to make sure the updates worked correctly.",
    results: [],
    demoUrl: "https://horizongbtest.prognosiserp.com:8092/",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    slug: "raat-motors-sports",
    title: "Raats | Motorsports",
    category: "Angular",
    shortDescription:
      "I worked on the frontend functionality and backend API integration for the application. My work included implementing features based on business requirements, connecting frontend screens with backend APIs, and handling the required workflows for different user roles.I worked with role-based functionality for Admin, User, and Customer and implemented changes across areas such as orders, quotations, assignments, tasks, schedules, customer management, and logistics.",
    description:
      "Project 04 is a production-based web application designed for car tyre repair, service, and warehouse-related operations. The platform provides different functionality based on three main roles: Admin, User, and Customer.The Admin side provides tools to manage orders, quotations, shops, tasks, schedules, logistics, customers, and other operational activities. Customers can manage their assignments, quotations, orders, profiles, and order-related information through their own portal.The system helps manage the complete workflow from customer requests and quotations to orders, assignments, scheduling, and logistics.",
    technologies: [".NET 9", "Ang 21", "Entity Framework core 10"],
    role: "Full-Stack Developer",
    duration: "Project Duration",
    challenge:
      "The application had different roles with different permissions and workflows. Admin, User, and Customer each required access to different features.",
    solution:
      "Implemented the required frontend functionality and API integration based on the role and ensured that each user could access the appropriate features and workflows.",
    results: [
      "Developed and maintained functionality for a production-based tyre service and warehouse management platform.",
    ],
    demoUrl: "https://staging.raats.exon-ict-group.be/",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    slug: "villa-management-system",
    title: "Villa Management System",
    category: "Blazor Server",
    duration: "1+",
    role: "full stack developer",
    shortDescription:
      "I worked on developing and maintaining the ERP functionality using Blazor Server and .NET 9. My work covered both the admin-side management features and the backend workflows connecting the ERP with external systems.I implemented functionality for villa, room, availability, seasonal pricing, booking, quotation, payment, and enquiry management. I also worked on payment and CRM integrations, automated email workflows, and synchronization between the admin panel and the WordPress frontend website.A major part of my work involved integrating Flywire payment functionality, including synchronizing payment statuses such as pending, paid, and not paid with the ERP system. I also worked on the Zoho CRM API integration and the synchronization process between the ERP and WordPress website.",
    description:
      "This project is a Villa Management ERP developed to manage villa properties, availability, pricing, bookings, payments, and related operations from a centralized admin system.The ERP allows users to manage villa and room details, availability, images, nearby locations, and season-based rates. It also includes configurable villa settings such as bank details, default property settings, and rate settings.The system handles the complete workflow from enquiries received through the frontend website to quotations and bookings. It also manages platform commissions, countries, currencies, villa collections, payments, and automated booking and payment reminder emails",
    technologies: [
      "Blazor Server",
      ".NET 9",
      "SQL Server",
      "3-Tier Architecture",
      "Flywire, Zoho CRM, WordPress",
    ],
    challenge:
      "The application had different roles with different permissions and workflows. Admin, User, and Customer each required access to different features.",
    solution:
      "Implemented the required frontend functionality and API integration based on the role and ensured that each user could access the appropriate features and workflows.",
    results: [],
    demoUrl: "https://staging.raats.exon-ict-group.be",
    githubUrl: "https://github.com",
    featured: true,
  },
  //{
  //   slug: "ionic-mobile-application",
  //   title: "Ionic Mobile Application",
  //   category: "Mobile Application",
  //   shortDescription:
  //     "A cross-platform mobile application built with Ionic and Angular and connected to backend APIs.",
  //   description:
  //     "A mobile application designed to provide users with access to business functionality from mobile devices while communicating with backend services.",
  //   technologies: ["Ionic", "Angular", "TypeScript", ".NET", "REST API"],
  //   role: "Full-Stack Developer",
  //   duration: "Project Duration",
  //   challenge:
  //     "Users needed access to important application functionality while away from desktop systems.",
  //   solution:
  //     "Developed a cross-platform Ionic application using Angular and integrated it with backend REST APIs. Implemented responsive mobile interfaces, forms, validation, and API-driven workflows.",
  //   results: [
  //     "Extended business functionality to mobile devices.",
  //     "Created a reusable cross-platform mobile interface.",
  //     "Integrated mobile workflows with existing backend APIs.",
  //     "Provided users with convenient access to business functionality.",
  //   ],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com/",
  //   featured: true,
  // },
];
