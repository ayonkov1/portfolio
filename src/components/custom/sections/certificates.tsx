import { SubTitle, Title, Text } from '@/components/core/title'
import { certificates } from '@/components/data/certificates'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export const Certificates = () => {
  return (
    <div>
      <Title text="Certificates" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 py-1 pb-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-xl bg-white dark:bg-black">
            <SubTitle text={certificate.name} />
            <Text text={certificate.issuingOrganization} />
            <Text text={certificate.issueDate} />
            <Text text={certificate.expirationDate} />
            {certificate.credentialID && <Text text={certificate.credentialID} />}
            <a
              href={certificate.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
