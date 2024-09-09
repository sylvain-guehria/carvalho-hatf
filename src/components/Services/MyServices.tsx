'use client'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import { services } from '@/components/Services/my-services'

export function MyServices() {
  return (
    <section
      id="services"
      aria-label="Services proposés"
      className="pb-14 pt-20 md:pb-20 md:pt-32 lg:pb-32"
    >
      <Container>
        <div
          className={clsx(
            'divide-y divide-gray-200 overflow-hidden rounded-lg border-[0.5px] border-gray-200',
            'bg-gray-200 shadow md:grid md:grid-cols-2 md:gap-px md:divide-y-0',
          )}
        >
          {services.map((service, serviceIdx) => (
            <div
              key={service.name}
              className={clsx(
                serviceIdx === 0
                  ? 'rounded-tl-lg rounded-tr-lg md:rounded-tr-none'
                  : '',
                serviceIdx === 1 ? 'md:rounded-tr-lg' : '',
                serviceIdx === services.length - 2 ? 'md:rounded-bl-lg' : '',
                serviceIdx === services.length - 1
                  ? 'rounded-bl-lg rounded-br-lg md:rounded-bl-none'
                  : '',
                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
              )}
            >
              <div className="grid grid-cols-2">
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

                <div className="m-auto">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {service.name}
                  </h3>
                </div>
              </div>
              <div className="mt-8">
                {/* <a href={service.href} className="focus:outline-none"> */}
                {/* </a> */}
                <ul className="mt-2 list-disc text-sm text-gray-500">
                  {service.tasks.map((task) => (
                    <>
                      <li className="ml-5 mt-2 text-sm text-gray-500">
                        {task.name} :
                      </li>
                      <p className="mt-2 text-sm text-gray-500">
                        {task.description}
                      </p>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
