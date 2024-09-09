import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
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
