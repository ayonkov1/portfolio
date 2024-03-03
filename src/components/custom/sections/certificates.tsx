import { SubTitle, Title, Text } from '@/components/core/title'
import { certificates } from '@/components/data/certificates'

export const Certificates = () => {
  return (
    <div>
      <Title text="Certificates" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-1 pb-6 pt-2">
        {certificates.map((certificate, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-xl bg-white dark:bg-black">
            <SubTitle text={certificate.name} />
            <a
              href={certificate.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-mono"
            >
              {certificate.issuingOrganization}
            </a>

            <div className="flex gap-4 justify-between font-mono text-slate-400 dark:text-slate-600">
              {certificate.credentialID ? (
                <Text text={`Reference: ${certificate.credentialID}`} />
              ) : (
                <Text text={`Reference: N/A`} />
              )}

              <Text text={certificate.issueDate} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
