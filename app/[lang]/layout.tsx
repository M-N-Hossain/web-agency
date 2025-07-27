import { ThemeProvider } from "@/components/layout/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "dk" }]
}

export const metadata: Metadata = {
  title: "WebAgency - Beautiful Websites Built for Success",
  description: "We create stunning, responsive websites that help your business grow and succeed online.",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "en" | "dk" }>
}) {
  return (
    <html lang={(params as any).lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
