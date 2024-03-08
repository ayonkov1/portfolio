import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react'

export function FooterFlowbite() {
  let currentYear = new Date().getFullYear()
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between">
          <FooterCopyright by="Atanas Yonkov" year={currentYear} />

          <FooterLinkGroup>
            <FooterLink href="mailto:atanasyonkov1@gmail.com">E-mail</FooterLink>
            <FooterLink href="tel:+359879385835">Phone</FooterLink>
            <FooterLink href="https://github.com/ayonkov1">GitHub</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/atanas-yonkov/">LinkedIn</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  )
}
