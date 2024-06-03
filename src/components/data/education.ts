interface Education {
  name: string
  location: string
  degree?: string
  program?: string
  GPA?: string
  duration: string
  activities?: string[]
}

export const education: Education[] = [
  {
    name: 'University of Amsterdam',
    location: 'Amsterdam, The Netherlands',
    degree: 'Master of Science in Information Studies',
    GPA: 'Current GPA: 8.1',
    duration: 'August 2023 – Present',
    activities: [
      'Next.js and Node.js were used to develop a full-stack web application for a research project focused on automating construction of formal normative language models',
    ],
  },
  {
    name: 'Halmstad University of Applied Sciences',
    location: 'Halmstad, Sweden',
    program: 'Erasmus Exchange in Computer Networks (Minor)',
    duration: 'August 2022 – January 2023',
    activities: [
      'Learned the fundamentals of computer networks based on Cisco CCNA',
      'Studied system administration and gained practical insights into managing large-scale computer and network systems',
      'Applied networking concepts using Linux and Python',
    ],
  },
  {
    name: 'Fontys University of Applied Sciences',
    location: 'Eindhoven, The Netherlands',
    degree: 'Bachelor of Science in Information and Communication Technology',
    duration: 'August 2019 – August 2023',
    activities: [
      'Collaborated with both internal and external stakeholders to produce various projects',
      'Developed websites, mockups, user journeys, personas, and similar',
      'Utilized established research methods (CMDMethods.nl) to test, implement and validate',
      'Created small video games using Unity and made custom 3D props and assets using Autodesk Maya',
    ],
  },
]
