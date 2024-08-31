import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import { type ImageProps } from 'next/image'
import { HammerIcon, TreesIcon, SprayCanIcon, KeySquareIcon } from 'lucide-react';

export interface IService {
    name: React.ReactNode
    summary: string
    description: string
    image: ImageProps['src']
    icon: React.ComponentType
  }
  
  export const services: Array<IService> = [
    {
      name: 'Petit travaux',
      summary: 'Stay on top of things with always up-to-date reporting features.',
      description:
        'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
      image: screenshotProfitLoss,
      icon: () => <HammerIcon className='m-auto w-full h-full p-1' fill="none" stroke='black' />
    },
    {
      name: 'Jardinage',
      summary:
        'Never lose track of what’s in stock with accurate inventory tracking.',
      description:
        'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
      image: screenshotInventory,
      icon: ()  => <TreesIcon className='m-auto w-full h-full p-1' fill="none" stroke='black'/>
    },
    {
      name: 'Nettoyage',
      summary:
        'Organize all of your contacts, service providers, and invoices in one place.',
      description:
        'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
      image: screenshotContacts,
      icon: ()  => <SprayCanIcon className='m-auto w-full h-full p-1' fill="none" stroke='black'/>
    },
    {
      name: 'Autre Services',
      summary:
        'Organize all of your contacts, service providers, and invoices in one place.',
      description:
        'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
      image: screenshotContacts,
      icon: ()  => <KeySquareIcon className='m-auto w-full h-full p-1' fill="none" stroke='black' />
    },
  ]