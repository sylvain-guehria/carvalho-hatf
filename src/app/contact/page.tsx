import Image from "next/image";
import chamberyImage from '@/images/screenshots/chambery.png'

export default function PageContact() {
  return (   <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Me contacter</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Demande de devis, renseignements, ou simplement être rappelé, n&apos;hésitez pas à me contacter.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Coordonées</h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href="mailto:carvalhohatf@gmail.com" className="font-semibold text-indigo-600" target="_blank" rel="noopener noreferrer">
                      carvalhohatf@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Numéro de téléphone</dt>
                  <dd>07 87 44 32 19</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Localisation</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Chambéry et ses alentours (jusq´à 30 km).
            </p>
          </div>
          <div className="grid grid-cols-1 rounded-2xl overflow-hidden">
          <Image
            src={chamberyImage}
            alt=""
            width={1944}
            height={1141}
          />
          </div>
        </div>
      </div>
    </div>
  </div>)
}
