import { SubTitle, Title, Text } from '@/components/core/title'
import { certificates } from '@/components/data/certificates'
import Link from 'next/link'

export const Certificates = () => {
  return (
    <div>
      <Title text="Certificates" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1 pb-6 pt-2">
        {certificates.map((certificate, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg bg-slate-50 dark:bg-slate-800">
            <SubTitle text={certificate.name} />
            <Link
              href={certificate.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-mono"
            >
              {certificate.issuingOrganization}
            </Link>

            <div className="flex gap-4 justify-between font-mono text-slate-400 dark:text-slate-600 text-sm">
              {certificate.credentialID ? <p>{`Reference: ${certificate.credentialID}`}</p> : <p>{`Reference: N/A`}</p>}

              <p>{certificate.issueDate} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
