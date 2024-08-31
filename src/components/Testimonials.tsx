import Image from 'next/image'

import { Container } from '@/components/Container'

const testimonials = [
  [
    {
      content:
        'Kevin a fait mes tapisseries et plusieurs petits travaux dans mon appartement, le résultats est incroyable ! Je recommande totalement ses services =)',
      author: {
        name: 'Sylvain G.',
      },
    },
    {
      content:
        'Homme à tout faire très consciencieux et minutieux. Je recommande vivement. Nous avons fait poser de la tapisserie dans notre couloir et nettoyé notre terrasse en bois.Tout cela avec le sourire et plein de sympathie.',
      author: {
        name: 'Brigitte S.',
      },
    },
  ],
  [
    {
      content:
        'Kévin est venu changer mon robinet, rapide, efficace, tout ce qu´on demande a bricoleur ! Je recommande vivement',
      author: {
        name: 'Charles L.',
      },
    },
    {
      content:
        'Merci Kévin pour votre travail de qualité. Nous avons apprécié travailler avec vous! Kévin est une personne de confiance que nous recommandons. Nous vous rappellerons très prochainement pour les espaces verts.',
      author: {
        name: 'Cyrielle S.',
      },
    },
  ],
  [
    {
      content:
        'J’ai fais appel à Kevin pour nettoyer ma terrasse et mon canapé. Je le recommande. Très professionnel, et très très bon résultat.',
      author: {
        name: 'Maelys S.',
      },
    },
    {
      content:
        'Pour ma part Kevin est venu Nettoyer mon canapé, après plein d´accident de la vie du quotidien celui ci avait besoin d´un bon décapage. Le résultat est incroyable. Kevin est super sympa et agréable, il sera a l´écoute de vos attentes et vous proposera des solutions adaptées.',
      author: {
        name: 'Eric A.',
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Découvrez ce que mes clients pensent de mes services.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Vous aussi, vous pouvez laisser votre avis sur mes services en vous
            rendant sur ma page Google My Business.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
