import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  dict: any
  lang: "en" | "dk"
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WebAgency</h3>
            <p className="text-muted-foreground mb-4">{dict.footer.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@webagency.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Web Street, Digital City</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{dict.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.staticWebsites}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.dynamicWebsites}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.customWebApps}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.websiteManagement}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{dict.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{dict.footer.support}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.documentation}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.statusPage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dict.footer.links.getSupport}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
