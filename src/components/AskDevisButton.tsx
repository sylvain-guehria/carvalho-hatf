'use client'

import { Button } from '@/components/Button'
import { usePathname } from 'next/navigation'

export function AskDevisButton() {
  const pathname = usePathname()
  return (
    !pathname.includes('/contact') && (
      <Button
        href="/contact"
        className="bg-gradient-to-r from-red-500 to-orange-500"
      >
        Demander un devis
      </Button>
    )
  )
}
