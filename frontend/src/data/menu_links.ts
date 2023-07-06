import { ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export const not_logged_in_menu_links:IMenuLink[] = [
  {
    id: 1,
    label: 'login',
    to: '/login', 
    icon: ArrowRightOnRectangleIcon,
  },
];

export const logged_in_menu_links:IMenuLink[] = [
  {
    id: 1,
    label: 'logout',
    to: '/logout', 
    icon: ArrowLeftOnRectangleIcon,
  },
  {
    id:2,
    label: 'conta',
    to: '/conta',
    icon: CurrencyDollarIcon,
  },
  {
    id:3,
    label:'investimentos',
    to: '/investimentos',
    icon: ChartBarIcon
  }
];