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
    title: 'Software Engineer',
    duration: 'September 2024 – Present',
    company: 'KPMG ITS',
    location: 'Sofia, Bulgaria',
    roles: [
      {
        description: [
          'Extend AI-powered agentic platform using LangChain and LangGraph that enables real-time client interaction with large-scale fiscal data (implemented Azure integration, multiprocessing for concurrent user sessions, and auto-scaling worker instances).',
          'Build and extend internal Vue.js platform components serving multiple concurrent client engagements, improving feature delivery through reusable, modular architecture.',
          'Mentor junior developers on codebase onboarding, PR review practices, and frontend architecture patterns.',
          'Automate generation of data-driven reports (Excel, PowerPoint, PDF), eliminating manual workflows and ensuring cross-business-unit consistency.',
        ],
      },
    ],
  },
  {
    title: 'Research Engineer',
    duration: 'February 2024 – June 2024 (5m)',
    company: 'CWI & University of Amsterdam',
    location: 'Amsterdam, The Netherlands',
    roles: [
      {
        description: [
          'Designed user study (n=16) with 7-test validation pipeline; built data collection system and delivered actionable product recommendations based on quantitative analysis.',
        ],
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Merkle (Dentsu)',
    location: 'Sofia, Bulgaria',
    duration: 'April 2022 – September 2023 (1y 6m)',
    roles: [
      {
        description: [
          'Built environment management system adopted company-wide, enabling on-demand sandbox provisioning with automated dev/prod sync — reduced setup time by approximately 80%.',
          'Developed internal employee rewards platform (Next.js, Apollo GraphQL, Knex.js), streamlining peer recognition and improving engagement.',
        ],
      },
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'GILO Technologies',
    location: 'Rijswijk, The Netherlands',
    duration: 'July 2021 – February 2022 (8m)',
    roles: [
      {
        description: [
          'Built core integration layer for Google Docs and Microsoft Word add-ons using TypeScript and Node.js.',
          'Delivered production features for document automation used by end-customers for contract management.',
        ],
      },
    ],
  },
]
