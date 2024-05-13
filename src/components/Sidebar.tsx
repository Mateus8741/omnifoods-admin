/* eslint-disable prettier/prettier */
'use client'

import {
  CirclePlus,
  CreditCard,
  List,
  MenuIcon,
  Settings,
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
          icon: <MenuIcon />,
          text: 'Comandas',
        },
        {
          link: '/Billing',
          icon: <CreditCard />,
          text: 'Pagamentos',
        },
      ],
    },
    {
      group: 'Produtos',
      items: [
        {
          link: '/ListProducts',
          icon: <List />,
          text: 'Todos os Produtos',
        },
        {
          link: '/AddProducts',
          icon: <CirclePlus />,
          text: 'Adicionar Produtos',
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
    <aside className="flex flex-col gap-3 w-[16rem] min-h-screen p-4 shadow-lg shadow-bg/30">
      <div>
        <UserItem />
      </div>

      <div className="grow">
        {menuList.map((group, index) => (
          <MenuItems key={index} group={group} />
        ))}
      </div>
    </aside>
  )
}
