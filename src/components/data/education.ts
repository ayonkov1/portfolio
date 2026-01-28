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
    GPA: 'Distinction (Cum Laude)',
    duration: 'August 2023 – June 2024',
    activities: [
      'Specialized in intelligent systems, human-computer interaction, and data-driven product design.',
      'Thesis research conducted at CWI (Dutch national research institute) — designed user study with 16 participants and built data analysis pipeline.',
    ],
  },
  {
    name: 'Fontys University of Applied Sciences',
    location: 'Eindhoven, The Netherlands',
    degree: 'Bachelor of Science in ICT',
    duration: 'August 2019 – August 2023',
    activities: [
      'Erasmus exchange at Halmstad University (Sweden) — Computer Networks minor, Cisco CCNA fundamentals.',
      'Built full-stack web applications across multiple team-based industry projects.',
    ],
  },
]
