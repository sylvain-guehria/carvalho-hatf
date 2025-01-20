import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Carvalho Homme à tout faire, Chambéry, Savoie 73',
  description:
    'Découvrez mes services sur chambéry et alentours: petit travaux, jardinage, nettoyage et autres services sur mesure. Demandez un devis gratuit !',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <SpeedInsights/>
        <Footer />
      </body>
    </html>
  )
}
