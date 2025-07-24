import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  dict: any
  lang: "en" | "dk"
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-16 flex flex-col ">
        <div className="grid md:grid-cols-4 gap-12 w-full">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">WebAgency</h3>
              <p className="text-blue-100 dark:text-slate-300 mb-6 leading-relaxed">{dict.footer.description}</p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-blue-100 dark:text-slate-300 hover:text-white transition-colors">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>hello@webagency.com</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100 dark:text-slate-300 hover:text-white transition-colors">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100 dark:text-slate-300 hover:text-white transition-colors">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>123 Web Street, Digital City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm  ml-10 ">
            <h4 className="font-bold mb-6 text-white text-lg">{dict.footer.services}</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              <li className="text-left">
                <Link href={`/${lang}/services`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.staticWebsites}
                </Link>
              </li>
              <li className="text-left">
                <Link href={`/${lang}/services`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.dynamicWebsites}
                </Link>
              </li>
              <li className="text-left">
                <Link href={`/${lang}/services`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.customWebApps}
                </Link>
              </li>
              <li className="text-left">
                <Link href={`/${lang}/services`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.websiteManagement}
                </Link>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-sm ml-10 ">
            <h4 className="font-bold mb-6 text-white text-lg">{dict.footer.company}</h4>
            <ul className="space-y-3 text-sm flex flex-col ">
              <li className="text-left">
                <Link href={`/${lang}/about`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.aboutUs}
                </Link>
              </li>
              <li className="text-left">
                <Link href={`/${lang}/contact`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.contact}
                </Link>
              </li>
              <li className="text-left">
                <Link href="#" className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.privacy}
                </Link>
              </li>
              <li className="text-left">
                <Link href="#" className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-sm ml-10 ">
            <h4 className="font-bold mb-6 text-white text-lg">{dict.footer.support}</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              <li className="text-left">
                <Link href="#" className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.helpCenter}
                </Link>
              </li>
              <li className="text-left">
                <Link href="#" className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.documentation}
                </Link>
              </li>
              <li className="text-left">
                <Link href="#" className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.statusPage}
                </Link>
              </li>
              <li className="text-left">
                <Link href={`/${lang}/contact`} className="text-blue-100 dark:text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {dict.footer.links.getSupport}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 w-full justify-space-between  ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 dark:text-slate-300 text-sm">{dict.footer.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}