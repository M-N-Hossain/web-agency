import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/Button"
import { Award, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "../dictionaries"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "dk" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const values = [
    {
      icon: Award,
      title: dict.about.values.quality.title,
      description: dict.about.values.quality.description,
    },
    {
      icon: Heart,
      title: dict.about.values.client.title,
      description: dict.about.values.client.description,
    },
    {
      icon: Lightbulb,
      title: dict.about.values.innovation.title,
      description: dict.about.values.innovation.description,
    },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Peter Jones",
      role: "UI/UX Designer",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header dict={dict} lang={lang} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-gray-900 dark:text-white tracking-tight leading-tight">
                {dict.about.title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                {dict.about.description}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 dark:text-white tracking-tight">
                  {dict.about.story.title}
                </h2>
              </div>
              
              <div className="prose prose-lg sm:prose-xl dark:prose-invert mx-auto max-w-none">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light">
                    {dict.about.story.content1}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg font-light">
                    {dict.about.story.content2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 dark:text-white tracking-tight">
                {dict.about.values.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-white dark:bg-gray-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 dark:text-white tracking-tight">
                {dict.about.team.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      {/* Placeholder for team member photo */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-2xl sm:text-3xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gray-900 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-white tracking-tight">
                {dict.about.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                {dict.about.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white min-h-[48px] px-6 sm:px-8 text-base font-semibold touch-manipulation" 
                  asChild
                >
                  <Link href={`/${lang}/contact`}>{dict.about.cta.button}</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 min-h-[48px] px-6 sm:px-8 text-base font-semibold touch-manipulation" 
                  asChild
                >
                  <Link href={`/${lang}/services`}>{dict.about.cta.secondary}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer dict={dict} lang={lang} />
    </div>
  )
}