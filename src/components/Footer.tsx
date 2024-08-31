import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          <div className="py-16">
          <nav className="text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/galerie-photo">Galerie Photo</NavLink>
            </div>
          </nav>
        </div>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Carvalho-HATF. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
