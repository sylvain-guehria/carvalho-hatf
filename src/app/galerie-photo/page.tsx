/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next"
import { products } from "./photoMap"



export const metadata: Metadata = {
  title: 'Galerie photo, Carvalho Homme à tout faire, Chambéry',
  description: "Découvrez les photos de mes réalisations de travaux, jardinage, nettoyage et autres services sur mesure. Demandez un devis gratuit !",
}

export default function PageGaleriPhoto() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}