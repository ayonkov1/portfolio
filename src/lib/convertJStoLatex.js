import fs from 'fs'
import { education } from '../components/data/education.ts'
import { experiences } from '../components/data/experiences.ts'
import { skills } from '../components/data/skills.ts'
import { certificates } from '../components/data/certificates.ts'

// Function to escape LaTeX special characters
const escapeLatex = (text) => {
  if (!text) return ''
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\$/g, '\\$')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/#/g, '\\#')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/_/g, '\\_')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/"/g, "''")
    .replace(/'/g, "'")
}

const convertEducationToLatex = (education) => {
  let latex = '\\section{Education}\n'
  latex += '\\resumeSubHeadingListStart\n'

  education.forEach((school) => {
    latex += '  \\resumeSubheading\n'
    latex += `    {${escapeLatex(school.name)}}{${escapeLatex(school.location)}}\n`
    if (school.degree) {
      const gpa = school.GPA ? `, ${escapeLatex(school.GPA)}` : ''
      latex += `    {${escapeLatex(school.degree)}${gpa}}{${escapeLatex(school.duration)}}\n`
    } else if (school.program) {
      latex += `    {${escapeLatex(school.program)}}{${escapeLatex(school.duration)}}\n`
    }
    latex += '    \\resumeItemListStart\n'
    school.activities.forEach((activity) => {
      latex += `      \\resumeItem{${escapeLatex(activity)}}\n`
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
    latex += `    {${escapeLatex(experience.title)}}{${escapeLatex(experience.duration)}}\n`
    latex += `    {${escapeLatex(experience.company)}}{${escapeLatex(experience.location)}}\n`
    experience.roles.forEach((role) => {
      if (role.title) {
        latex += '    \\resumeSubSubheading\n'
        latex += `      {${escapeLatex(role.title)}}{${escapeLatex(role.duration)}}\n`
      }
      latex += '      \\resumeItemListStart\n'
      role.description.forEach((item) => {
        latex += `        \\resumeItem{${escapeLatex(item)}}\n`
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
    latex += `    \\textbf{${escapeLatex(skill.title)}}{: ${escapeLatex(skill.description)}} \\\\\n`
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
  certificates.forEach((cert, index) => {
    const separator = index < certificates.length - 1 ? ', ' : ''
    latex += `${escapeLatex(cert.name)} (${escapeLatex(cert.issuingOrganization)}, ${escapeLatex(cert.issueDate)})${separator}`
  })

  latex += '} \\\\\n'
  latex += '  }}\n'
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
