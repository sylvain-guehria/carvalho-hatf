import {
  HammerIcon,
  TreesIcon,
  SprayCanIcon,
  KeySquareIcon,
} from 'lucide-react'

export interface IService {
  name: string
  tasks: {
    name: string
    description?: string
  }[]
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  iconForeground: string
  iconBackground: string
}

export const services: Array<IService> = [
  {
    name: 'Petit travaux',
    tasks: [
      {
        name: 'Petite plomberie',
        description:
          'Remplacement d´equipement (robinet, WC, chasse d´eau, machine à laver...), débouchage de canalisation, changement de joint...',
      },
      {
        name: 'Petite électricité',
        description: 'Remplacement d´interrupteur, prise, luminaire, electroménagé ...',
      },
      {
        name: 'Mur et sol',
        description: 'Peinture, tapisserie, revêtement de sol légers, platerie légère...',
      },
      {
        name: 'Petit bricolage',
        description: 'Montage de meuble, fixation d´étagère, pose de tringle à rideaux...',
      }
    ],
    icon: HammerIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    name: 'Jardinage',
    icon: TreesIcon,
    tasks: [
      {
        name: 'Entretien espace vert et jardin',
        description: 'Tonte de pelouse, taille de haies et buissons, désherbage, ramassage de feuilles...',
      },
      {
        name: 'Petit aménagement',
        description: 'Plantation, pose de clôture, installation de système d´arrosage...',
      }
    ],
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    name: 'Nettoyage',
    tasks: [
      {
        name: "Terrasse (bois, carrelage, béton...)",
        description: "Nettoyage haute pression et alcalin, brosse hydraulique, traitement algicide fongicide et hydrofuge...",
      },
      {
        name: "Véhicule",
        description: "Nettoyage intérieur et extérieur...",
      },
      {
        name: "Canapé, tapis",
        description: "",
      },
      {
        name: "Autre",
        description: "Nettoyage de vitre, nettoyage de gouttière, nettoyage de garage...",
      }
    ],
    icon: SprayCanIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    name: 'Autre Services',
    tasks: [
      {
        name: 'Concièrgerie',
        description: 'Gestion des clés, réception de colis, arrosage de plante...',
      },
      {
        name: 'Gardiennage',
        description: 'Surveillance de domicile, relevé de courrier...',
      },
      {
        name: 'Aide aux déménagement',
        description: '',
      },
      {
        name: 'Autre services',
        description: 'Sur demande...',
      }
    ],
    icon: KeySquareIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
]
