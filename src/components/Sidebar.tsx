/* eslint-disable prettier/prettier */
'use client'

import { MenuItems } from './menuItems'
import { UserItem } from './userItem'

export function Sidebar() {
  const menuList = [
    {
      group: 'Geral',
      items: [
        {
          link: '/',
          icon: 'Menu',
          text: 'Comandas',
        },
        {
          link: '/Billing',
          icon: 'CreditCard',
          text: 'Pagamentos',
        },
      ],
    },
    {
      group: 'Produtos',
      items: [
        {
          link: '/ListProducts',
          icon: 'List',
          text: 'Todos os Produtos',
        },
        {
          link: '/AddProducts',
          icon: 'CirclePlus',
          text: 'Adicionar Produtos',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/Settings',
          icon: 'Settings',
          text: 'General Settings',
        },
      ],
    },
  ]

  return (
    <aside className="flex flex-col w-[16rem] max-h-screen p-4 shadow-lg shadow-bg/30">
      <div className='mb-7'>
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
