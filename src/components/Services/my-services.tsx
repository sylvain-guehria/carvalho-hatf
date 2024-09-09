import {
  HammerIcon,
  TreesIcon,
  SprayCanIcon,
  KeySquareIcon,
} from 'lucide-react'

export interface IService {
  name: string
  href: string
  summary: string
  description: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  iconForeground: string
  iconBackground: string
}

export const services: Array<IService> = [
  {
    name: 'Petit travaux',
    href: '#',
    summary: 'Petite plomberie et petite électricité (Remplacement robinet, lavabo, toilet, machine à laver...).',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    icon: HammerIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    name: 'Jardinage',
    href: '#',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    icon: TreesIcon,

    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    name: 'Nettoyage',
    href: '#',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: SprayCanIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    name: 'Autre Services',
    href: '#',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: KeySquareIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
]
