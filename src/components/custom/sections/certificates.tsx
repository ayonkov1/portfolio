import { SubTitle, Title, Text, TitleWithDivider } from '@/components/core/title'
import { certificates } from '@/components/data/certificates'
import Link from 'next/link'

export const Certificates = () => {
  return (
    <div>
      <TitleWithDivider>
        <Title text="CERTIFICATES" />
      </TitleWithDivider>

      <div className="space-y-4 mt-4">
        {certificates.map((certificate, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="font-bold text-base lg:text-lg text-blue-900 dark:text-blue-200">{certificate.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-right">{certificate.issueDate}</p>
            </div>

            <p className="text-sm lg:text-base text-blue-600 dark:text-blue-400">{certificate.issuingOrganization}</p>

            {certificate.highlights && certificate.highlights.length > 0 && (
              <ul className="text-sm lg:text-base text-gray-700 dark:text-gray-300 list-disc list-inside mt-1">
                {certificate.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            )}

            {certificate.credentialID && (
              <Link
                href={certificate.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline mt-1"
              >
                Credential ID: {certificate.credentialID}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
