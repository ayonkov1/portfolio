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
    title: 'Joint Master Thesis',
    duration: `February 2024 – Present (${new Date().getMonth() - 1}m)`,
    company: 'CWI (Centrum Wiskunde and Informatica) and University of Amsterdam (UvA)',
    location: 'Amsterdam, The Netherlands',
    roles: [
      {
        description: [
          "During my master's thesis project at the Netherlands Institute of Mathematics and Informatics, I am studying the user experience of displaying subtitles in extended reality (XR) environments",
          'Integrated eye tracking functionality of the Meta Quest Pro into a Unity theatre application in order gather data during the study',
        ],
      },
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Merkle',
    location: 'Sofia, Bulgaria',
    duration: 'April 2022 – August 2023 (1y 6m)',
    roles: [
      {
        title: 'Junior Software Engineer',
        description: [
          'Developed an internal rewards system using Next.js, Apollo GraphQL and Knex.js',
          'Conducted my bachelor thesis, which was focused on exploring to what extent utilizing modern frameworks can improve the company’s development process',
          'Fixed bugs within client projects',
          'Developed a functionality for setting up and syncing (between dev and prod) on-demand sandboxes',
        ],
        duration: 'Feb 2022 – August 2023 (8m)',
      },
      {
        title: 'Software Engineering Intern',
        description: ['Developed mock projects making use of the SalesForce Commerce Cloud platform'],
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
          'Developed and implemented the foundation for the GILO Google Docs add-on using TypeScript',
          'Developed and maintained the GILO Microsoft Word add-on using TypeScript and Node.js',
          'Created short animations with marketing purposes using Adobe AfterEffects',
        ],
      },
    ],
  },
]
