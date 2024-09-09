import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Besoin d&apos;un service ?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Laissez un professionnel s&apos;occuper de vos tâches et travaux en tout genre.
          </p>
          <Button href="/contact" color="white" className="mt-10">
            Demander un renseignement
          </Button>
        </div>
      </Container>
    </section>
  )
}
