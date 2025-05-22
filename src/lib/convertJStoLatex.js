const fs = require('fs')
import { education } from '../components/data/education'
import { experiences } from '../components/data/experiences'
import { skills } from '../components/data/skills'
import { certificates } from '../components/data/certificates'

const convertEducationToLatex = (education) => {
  let latex = '\\section{Education}\n'
  latex += '\\resumeSubHeadingListStart\n'

  education.forEach((school) => {
    latex += '  \\resumeSubheading\n'
    latex += `    {${school.name}}{${school.location}}\n`
    if (school.degree) {
      latex += `    {${school.degree}, ${school.GPA ? school.GPA : ''}}{${school.duration}}\n`
    } else if (school.program) {
      latex += `    {${school.program}}{${school.duration}}\n`
    }
    latex += '    \\resumeItemListStart\n'
    school.activities.forEach((activity) => {
      latex += `      \\resumeItem{${activity}}\n`
    })
    latex += '    \\resumeItemListEnd\n'
  })

  latex += '\\resumeSubHeadingListEnd\n'
  return latex
}

const convertExperienceToLatex = (experiences) => {
  let latex = '\\section{Experience}\n'
  latex += '\\resumeSubHeadingListStart\n'

  experiences.forEach((experience) => {
    latex += '  \\resumeSubheading\n'
    latex += `    {${experience.title}}{${experience.duration}}\n`
    latex += `    {${experience.company}}{${experience.location}}\n`
    experience.roles.forEach((role) => {
      if (role.title) {
        latex += '    \\resumeSubSubheading\n'
        latex += `      {${role.title}}{${role.duration}}\n`
      }
      latex += '      \\resumeItemListStart\n'
      role.description.forEach((item) => {
        latex += `        \\resumeItem{${item}}\n`
      })
      latex += '      \\resumeItemListEnd\n'
    })
  })

  latex += '\\resumeSubHeadingListEnd\n'
  return latex
}

const convertSkillsToLatex = (skills) => {
  let latex = '\\section{Technical Skills}\n'
  latex += ' \\begin{itemize}[leftmargin=0.15in, label={}]\n'
  latex += '  \\small{\\item{\n'

  skills.forEach((skill) => {
    latex += `    \\textbf{${skill.title}}{: ${skill.description}} \\\\\n`
  })
  latex += '  }}\n'
  latex += ' \\end{itemize}\n'
  return latex
}

const convertCertificatesToLatex = (certificates) => {
  let latex = '\\section{Certificates}\n'
  latex += ' \\begin{itemize}[leftmargin=0.15in, label={}]\n'
  latex += '  \\small{\\item{\n'

  latex += `    \\textbf{Languages}{: English C1 (CAE), Russian B2 (TORFL-2), French B2 (DELF)} \\\\\n`
  latex += `    \\textbf{Technical}{: `
  certificates.forEach((cert) => {
    latex += `${cert.name} (${cert.issuingOrganization}, ${cert.issueDate}), `
  })

  latex += '\n}}}\n'
  latex += ' \\end{itemize}\n'
  return latex
}

const experienceLatex = convertExperienceToLatex(experiences)
const educationLatex = convertEducationToLatex(education)
const skillsLatex = convertSkillsToLatex(skills)
// const certificatesLatex = convertCertificatesToLatex(certificates)

const latexContent = experienceLatex + '\n' + skillsLatex + '\n' + educationLatex + '\n'
fs.writeFileSync('latex/data.tex', latexContent)

console.log('LaTeX file generated: latex/data.tex')
