/* eslint-disable prettier/prettier */
'use client'

import { MenuItems } from './menuItems'
import { UserItem } from './userItem'

export function Sidebar() {
  const menuList = [
    {
      group: 'Comandas',
      items: [
        {
          link: '/',
          icon: 'Menu',
          text: 'Recepção',
        },
        {
          link: '/Kitchen',
          icon: 'CookingPot',
          text: 'Cozinha',
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
    <aside className="flex flex-col w-[16rem] max-h-screen p-4 bg-gray-aside border border-gray-1000/10">
      <div className='mb-7 pb-4 border-b-4 border-gray-1000/10'>
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
