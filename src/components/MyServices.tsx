'use client'

import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { IService, services } from '@/constants/my-services'



function Service({
  service,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  service: IService
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-orange-600' : 'bg-slate-500',
        )}
      >
        <div aria-hidden="true" className="h-9 w-9" >
          <service.icon />
        </div>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-orange-600' : 'text-slate-600',
        )}
      >
        {service.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {service.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{service.description}</p>
    </div>
  )
}

function ServicesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {services.map((service) => (
        <div key={service.summary}>
          <Service service={service} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={service.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ServicesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-4 gap-x-8">
            {services.map((service, serviceIndex) => (
              <Service
                key={service.summary}
                service={{
                  ...service,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {service.name}
                    </Tab>
                  ),
                }}
                isActive={serviceIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {services.map((service, serviceIndex) => (
                <TabPanel
                  static
                  key={service.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    serviceIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={serviceIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={service.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function MyServices() {
  return (
    <section
      id="services"
      aria-label="Services for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Mes services.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Tarif sur demande et <span className='font-bold	'>devis gratuit </span>! Possibilité de  <span className='font-bold	'>crédit d&apos;impôt</span>  sur les services à la personne.
          </p>
        </div>
        <ServicesMobile />
        <ServicesDesktop />
      </Container>
    </section>
  )
}
