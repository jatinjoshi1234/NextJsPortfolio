const exp = "6+";

export const siteConfig = {
  personal: {
    name: "Joshi",
    shortName: "Joshi",
    lastName: "Jatin",

    title: "Full-Stack .NET & Angular Developer",

    tagline:
      "I help businesses turn ideas and requirements into reliable, scalable web and mobile applications.",

    description: `Full-Stack Developer with ${exp} years of experience building web, business, and mobile applications using .NET, Angular, Blazor, SQL Server, and Ionic.`,

    experience: exp,

    location: "India",

    availability: "Open to opportunities",
  },

  contact: {
    email: "jjdb04121997@gmail.com",
    emailLink: "mailto:jjdb04121997@gmail.com",
    phone: "",
    mobile: "9558137289",
    mobileLink: "tel:+919558137289",
    whatsappUrl: "https://wa.me/919558137289",
  },

  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },

  resume: {
    url: "/resume",
    label: "Resume",
  },

  seo: {
    title: "Jatin Joshi | Full-Stack .NET & Angular Developer",

    description: `Jatin Joshi is a Full-Stack Developer with ${exp} years of experience specializing in .NET, Angular, Blazor, SQL Server, Ionic, and business application development.`,

    keywords: [
      "Jatin Joshi",
      ".NET Developer",
      "Angular Developer",
      "Full Stack Developer",
      "ASP.NET Core Developer",
      "C# Developer",
      "Blazor Developer",
      "SQL Server Developer",
      "Ionic Developer",
      "Freelance .NET Developer",
      "Freelance Angular Developer",
    ],
  },

  hero: {
    greeting: "Hi, I'm Jatin joshi",

    title: "Full-Stack",

    highlightedTitle: ".NET & Angular",

    titleSuffix: "Developer",

    description:
      "I help businesses turn ideas and requirements into reliable, scalable web and mobile applications.",

    secondaryDescription: `With ${exp} years of experience across .NET, Angular, SQL Server, Blazor, and Ionic, I work across the full development lifecycle from API and database design to responsive frontend development.`,

    primaryButton: {
      label: "View My Work",
      href: "#projects",
    },

    secondaryButton: {
      label: "Let's Work Together",
      href: "#contact",
    },
  },

  stats: [
    {
      value: exp,
      label: "Years Experience",
    },
    {
      value: ".NET",
      label: "Backend",
    },
    {
      value: "Angular",
      label: "Frontend",
    },
  ],

  navigation: [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],

  about: {
    eyebrow: "About Me",

    title: "Building reliable software with a business-first mindset.",

    paragraphs: [
      `I'm a Full-Stack Developer with ${exp} years of experience building modern web applications, business platforms, APIs, and database-driven solutions.`,

      "My primary expertise is in .NET and Angular, with experience working across the full application stack — from responsive front-end interfaces and REST APIs to business logic, database design, and application architecture.",

      "I also have experience developing interactive applications with Blazor Server and cross-platform mobile applications using Ionic. I enjoy solving complex business requirements and turning them into clean, maintainable, and practical software solutions.",
    ],
  },

  services: {
    eyebrow: "Services",

    title: "How I Can Help",

    description:
      "From new application development to existing system improvements, I build solutions around real business requirements.",
  },

  skills: {
    eyebrow: "Technical Skills",

    title: "Technologies I Work With",

    description:
      "A practical technology stack focused on building reliable, scalable, and maintainable applications.",
  },

  projects: {
    eyebrow: "My Work",

    title: "Selected Projects",

    description:
      "A selection of applications and solutions demonstrating my experience across .NET, Angular, Blazor, SQL Server, and Ionic.",
  },

  experienceSection: {
    eyebrow: "Experience",

    title: "Professional Journey",

    description: `More than ${exp} years of experience developing business applications across frontend, backend, database, and mobile technologies.`,

    year: exp,
    frontEnd: "Angular",
    backEnd: ".NET",
    dataBase: "Sql Server",
    mobile: "IONIC",
  },

  contactSection: {
    eyebrow: "Get In Touch",

    title: "Have a project in mind?",

    description:
      "Whether you need a new web application, an existing system improved, or help with a .NET and Angular project, I'd be happy to discuss your requirements.",

    availabilityLabel: "Availability",

    specializationLabel: "Specialization",

    specialization: ".NET · Angular · SQL Server",
  },

  footer: {
    description: "Full-Stack .NET & Angular Developer",

    copyright: "All rights reserved.",
  },
} as const;
