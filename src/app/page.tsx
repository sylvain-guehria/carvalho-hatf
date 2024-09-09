import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { MyServices } from '@/components/Services/MyServices'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
      <main>
        <Hero />
        <PrimaryFeatures />
        <MyServices />
        <CallToAction />
        <Testimonials />
      </main>
  )
}
