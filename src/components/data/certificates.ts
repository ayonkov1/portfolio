export interface Certificate {
  name: string
  issuingOrganization: string
  issueDate: string
  expirationDate: string
  credentialID?: string | null
  credentialURL: string
  highlights?: string[]
}

export const certificates: Certificate[] = [
  {
    name: 'AI Integrations for Developers',
    issuingOrganization: 'SoftUni AI',
    issueDate: 'August 2025',
    expirationDate: 'This certification does not expire',
    credentialID: '9505/a67b3aca',
    credentialURL: 'https://ai.softuni.bg/Certificates/Details/9505/a67b3aca',
    highlights: ['LangChain & LangGraph', 'Vector Databases & Embeddings', 'OpenAI & Anthropic API Integration'],
  },
  {
    name: 'AI Tools for Developers',
    issuingOrganization: 'SoftUni AI',
    issueDate: 'June 2025',
    expirationDate: 'This certification does not expire',
    credentialID: '8371/ea40f643',
    credentialURL: 'https://ai.softuni.bg/certificates/details/8371/ea40f643',
    highlights: ['GitHub Copilot & Cursor AI', 'Claude in Development', 'Multi-Tool AI Integration'],
  },
]
