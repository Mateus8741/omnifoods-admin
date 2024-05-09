'use client'

import { colors } from '@/theme/colors'
import {
  CreditCard,
  Home,
  List,
  LogOut,
  Settings,
  ShoppingBag,
} from 'lucide-react'
import { MenuItems } from './menuItems'
import { UserItem } from './userItem'

export function Sidebar() {
  const menuList = [
    {
      group: 'Geral',
      items: [
        {
          link: '/',
          icon: <Home />,
          text: 'Home',
        },
        {
          link: '/Products',
          icon: <ShoppingBag />,
          text: 'Produtos',
        },
        {
          link: '/ListProducts',
          icon: <List />,
          text: 'Produtos Adicionados',
        },
        {
          link: '/Billing',
          icon: <CreditCard />,
          text: 'Pagamentos',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/Settings',
          icon: <Settings />,
          text: 'General Settings',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-3 w-[16rem] min-h-screen p-4 shadow-lg shadow-bg/30">
      <div>
        <UserItem />
      </div>

      <div className="grow">
        {menuList.map((group, index) => (
          <MenuItems key={index} group={group} />
        ))}
      </div>

      <div>
        <button
          className="flex gap-2 items-center text-red-danger bg-red-danger/20 p-2 rounded-md hover:bg-red-danger/10"
          onClick={() => console.log('Logout')}
        >
          <LogOut color={colors.red.danger} />
          Logout
        </button>
      </div>
    </div>
  )
}
