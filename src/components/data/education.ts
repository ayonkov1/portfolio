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
    degree: 'Master of Science in Information Systems',
    GPA: 'Grade: Distinction',
    duration: 'August 2023 – June 2024',
    activities: [
      'Data Systems Project: Designed and implemented a comprehensive data system in collaboration with TNO, focusing on database design, optimization, and real-world data engineering tasks.',
      'Explored how to leverage big data for business innovation, market opportunities, and entrepreneurial ventures through case studies and practical exercises',
      'Studied the design and implementation of intelligent systems using human-computer interaction and machine learning to create adaptive user experiences.',
      'Learned to build and simulate models for understanding complex systems and their dynamic behaviors across various applications.',
      'Examined the societal impacts of digital technologies, including digital identity, privacy, and ethical considerations of emerging tech.',
      'Analyzed and modeled complex societal systems using data analytics to design effective solutions for issues like urbanization, healthcare, and education.',
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
