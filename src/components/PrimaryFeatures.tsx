'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'

export function PrimaryFeatures() {


  return (
    <section
      id="services-hero"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Mes services.
          </h2>
          <p className="mt-6 text-xl tracking-tight text-white">
          Tarif sur demande et <span className='font-bold	'>devis gratuit </span>! Possibilité de  <span className='font-bold	'>règlement avec CESU</span>.
          </p>
        </div>
      </Container>
    </section>
  )
}
