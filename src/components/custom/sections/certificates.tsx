import { SubTitle, Title, Text, TitleWithDivider } from '@/components/core/title'
import { certificates } from '@/components/data/certificates'
import Link from 'next/link'

export const Certificates = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 py-1 pb-6 pt-2">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className={`flex flex-col 
          border lg:rounded-2xl p-4 shadow-lg 
          bg-slate-50 dark:bg-slate-800
          md:rounded-2xl
          first:rounded-t-2xl last:rounded-b-2xl`}
          >
            <SubTitle text={certificate.name} />

            <p className="text-blue-500">{certificate.issuingOrganization}</p>

            <div className="flex mt-auto gap-4 justify-between font-mono text-slate-400 text-xs">
              {certificate.credentialID ? (
                <Link
                  href={certificate.credentialURL}
                  as={certificate.credentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-mono"
                >
                  {certificate.credentialID}
                </Link>
              ) : (
                <p>{`Reference: N/A`}</p>
              )}
              <p className="text-right">{certificate.issueDate} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
