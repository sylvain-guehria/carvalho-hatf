'use client'

import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { IService, services } from '@/constants/my-services'





export function MyServices() {
  return (
    <section
      id="services"
      aria-label="Services for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
      <div className="border-[0.5px] border-gray-200 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {services.map((service, serviceIdx) => (
        <div
          key={service.name}
          className={clsx(
            serviceIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            serviceIdx === 1 ? 'sm:rounded-tr-lg' : '',
            serviceIdx === services.length - 2 ? 'sm:rounded-bl-lg' : '',
            serviceIdx === services.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          )}
        >
          <div>
            <span
              className={clsx(
                service.iconBackground,
                service.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white',
              )}
            >
              <service.icon aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={service.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span aria-hidden="true" className="absolute inset-0" />
                {service.name}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
            {service.description}
            </p>
            <p className="mt-2 text-sm text-gray-500">
            {service.summary}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
      </Container>
    </section>
  )
}
