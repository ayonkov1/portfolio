interface Role {
  title?: string
  description: string[]
}

interface Experience {
  title: string
  company: string
  roles: Role[]
  duration: string
}

export const experiences: Experience[] = [
  {
    title: 'Master Thesis Researcher',
    duration: 'February 2024 – Present',

    company: 'CWI',
    roles: [
      {
        description: [
          'At the nation Institue of Mathematics and Informatics of the Netherlands I am conducting a master thesis project working on a study regarding user experience of subtitles display within extended reality (XR) environments',
          'Developed a full-stack web application for a research project regarding automated construction of formal normative language models using Next.js and Node.js',
        ],
      },
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Merkle',
    duration: 'April 2022 – Aug. 2023',
    roles: [
      {
        title: 'Junior Software Engineer',
        description: [
          'Developed an internal rewards system using Next.js, Apollo GraphQL and Knex.js',
          'Conducted my bachelor thesis, which was focused on exploring to what extent utilizing modern frameworks can improve the company’s development process',
          'Fixed bugs within client projects',
          'Developed a functionality for setting up and syncing (between dev and prod) on-demand sandboxes',
        ],
      },
      {
        title: 'Software Engineering Intern',
        description: ['Developed mock projects making use of the SalesForce Commerce Cloud platform'],
      },
    ],
  },
  {
    title: 'Front-end Developer',
    company: 'GILO Technologies',
    duration: 'July 2021 – Feb.2022',
    roles: [
      {
        description: [
          'Developed and implemented the foundation for the GILO Google Docs add-on using TypeScript',
          'Developed and maintained the GILO Microsoft Word add-on using TypeScript and Node.js',
          'Created short animations with marketing purposes using Adobe AfterEffects',
        ],
      },
    ],
  },
  {
    title: 'Front-end Developer',
    company: 'GILO Technologies',
    duration: 'July 2021 – Feb.2022',
    roles: [
      {
        description: [
          'Developed and implemented the foundation for the GILO Google Docs add-on using TypeScript',
          'Developed and maintained the GILO Microsoft Word add-on using TypeScript and Node.js',
          'Created short animations with marketing purposes using Adobe AfterEffects',
        ],
      },
    ],
  },
]
