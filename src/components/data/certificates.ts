export interface Certificate {
  name: string
  issuingOrganization: string
  issueDate: string
  expirationDate: string
  credentialID?: string | null
  credentialURL: string
}

export const certificates: Certificate[] = [
  {
    name: 'Adobe Premiere Pro',
    issuingOrganization: 'Softuni Creative',
    issueDate: 'May 2021',
    expirationDate: 'This certification does not expire',
    credentialURL: 'https://creative.softuni.bg/Certificates/Details/15971/706eecef',
  },
  {
    name: 'Agile Software Development',
    issuingOrganization: 'Coursera',
    issueDate: 'September 2020',
    expirationDate: 'This certification does not expire',
    credentialID: 'XHLFLW6BQXHR',
    credentialURL: 'https://www.coursera.org/account/accomplishments/certificate/XHLFLW6BQXHR',
  },
  {
    name: 'Brand New Brand',
    issuingOrganization: 'Coursera',
    issueDate: 'June 2020',
    expirationDate: 'This certification does not expire',
    credentialID: 'ANNS8YX3JNFT',
    credentialURL: 'https://www.coursera.org/account/accomplishments/certificate/ANNS8YX3JNFT',
  },
  {
    name: 'Introduction to Typography',
    issuingOrganization: 'Coursera',
    issueDate: 'May 2020',
    expirationDate: 'This certification does not expire',
    credentialID: 'ZD3QHMGR2XE9',
    credentialURL: 'https://www.coursera.org/account/accomplishments/certificate/ZD3QHMGR2XE9',
  },
  {
    name: 'Fundamentals of Graphic Design',
    issuingOrganization: 'Coursera',
    issueDate: 'May 2020',
    expirationDate: 'This certification does not expire',
    credentialID: 'Y7ZN6VP5743C',
    credentialURL: 'https://www.coursera.org/account/accomplishments/certificate/Y7ZN6VP5743C',
  },
  {
    name: 'Introduction to SQL',
    issuingOrganization: 'DataCamp',
    issueDate: 'November 2019',
    expirationDate: 'This certification does not expire',
    credentialID: 'Y7ZN6VP5743C',
    credentialURL: 'https://www.datacamp.com/statement-of-accomplishment/course/db819f7016ce7088e12ae695c504d18a6a6a4692',
  },
  {
    name: 'Introduction to Tidyverse',
    issuingOrganization: 'DataCamp',
    issueDate: 'September 2019',
    expirationDate: 'This certification does not expire',
    credentialID: 'Y7ZN6VP5743C',
    credentialURL: 'https://www.datacamp.com/statement-of-accomplishment/course/ed885ce1dd657113464082e4864df8f7312b1602',
  },
]
