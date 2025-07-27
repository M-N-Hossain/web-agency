import { Globe, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  dict: any
  lang: "en" | "dk"
}

export default function Footer({ dict, lang }: FooterProps) {
  const footerSections = [
    {
      title: dict.footer.services,
      links: [
        { href: `/${lang}/services`, label: dict.footer.links.staticWebsites },
        { href: `/${lang}/services`, label: dict.footer.links.dynamicWebsites },
        { href: `/${lang}/services`, label: dict.footer.links.customWebApps },
        { href: `/${lang}/services`, label: dict.footer.links.websiteManagement },
      ]
    },
    {
      title: dict.footer.company,
      links: [
        { href: `/${lang}/about`, label: dict.footer.links.aboutUs },
        { href: `/${lang}/contact`, label: dict.footer.links.contact },
        { href: "#", label: dict.footer.links.privacy },
        { href: "#", label: dict.footer.links.terms },
      ]
    },
    {
      title: dict.footer.support,
      links: [
        { href: "#", label: dict.footer.links.helpCenter },
        { href: "#", label: dict.footer.links.documentation },
        { href: "#", label: dict.footer.links.statusPage },
        { href: `/${lang}/contact`, label: dict.footer.links.getSupport },
      ]
    }
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@webagency.com", href: "mailto:hello@webagency.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 Web Street, Digital City", href: "#" },
  ]

  const socialLinks = [
    { icon: Globe, href: "#", label: "Twitter" },
    { icon: Globe, href: "#", label: "LinkedIn" },
    { icon: Globe, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-4">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                WebAgency
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-sm text-sm sm:text-base">
                {dict.footer.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 touch-manipulation"
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors flex-shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4 sm:mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center group py-1 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 touch-manipulation"
                        >
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            
            {/* Copyright */}
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              {dict.footer.copyright}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 touch-manipulation"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}