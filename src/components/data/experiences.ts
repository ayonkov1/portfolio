interface Role {
  title?: string
  description: string[]
  duration?: string
}

interface Experience {
  title: string
  company: string
  location?: string
  roles: Role[]
  duration: string
}

export const experiences: Experience[] = [
  {
    title: 'Intelligent Automation Developer',
    duration: `September 2024 – Now`,
    company: 'KPMG ITS OOD',
    location: 'Sofia, Bulgaria',
    roles: [
      {
        description: [
          'Enhance and extend low-code platform components with custom Vue.js functionality to meet complex client-specific requirements.',
          'Develop and automate the generation of data-driven Excel, PowerPoint, and PDF reports tailored to business needs, ensuring consistency, accuracy, and scalability.',
          'Collaborate closely with stakeholders to translate technical and non-technical requirements into efficient and maintainable front-end solutions.',
        ],
      },
    ],
  },
  {
    title: 'Joint Master Thesis Researcher',
    duration: `February 2024 – June 2024 (5m)`,
    company: 'CWI (Centrum Wiskunde and Informatica) and University of Amsterdam (UvA)',
    location: 'Amsterdam, The Netherlands',
    roles: [
      {
        description: [
          'Developed a Unity-based XR theatre application for Meta Quest Pro, integrating eye-tracking to gather real-time user attention data.',
        ],
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Merkle',
    location: 'Sofia, Bulgaria',
    duration: 'April 2022 – August 2023 (1y 8m)',
    roles: [
      {
        title: 'Software Engineer',
        description: [
          'Developed a environment management feature used company-wide enabling on-demand sandboxes (ODS) with sync between dev and prod, reducing setup time and errors.',
          'Built an internal rewards system using Next.js, Apollo GraphQL, and Knex.js, improving employee engagement through streamlined recognition.',
        ],
        duration: 'Feb 2022 – August 2023 (8m)',
      },
      {
        title: 'Software Engineering Intern',
        description: [
          'Created mock e-commerce applications using Salesforce Commerce Cloud to support internal onboarding and tool familiarization.',
        ],
        duration: 'April 2022 – Feb 2023 (10m)',
      },
    ],
  },
  {
    title: 'Front-end Developer',
    company: 'GILO Technologies',
    location: 'Rijswijk, The Netherlands',
    duration: 'July 2021 – February 2022 (8m)',
    roles: [
      {
        description: [
          'Developed core functionality for Google Docs and Microsoft Word add-ons using TypeScript and Node.js, enabling the GILO app to exist as ADD-ON for these document editors.',
        ],
      },
    ],
  },
]
