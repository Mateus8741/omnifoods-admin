'use client'

import { useUserStorage } from '@/contexts/useUser'
import { Icons } from './icons'
import { MenuItems } from './menuItems'
import { UserItem } from './userItem'

export function Sidebar() {
  const { user, removeUser } = useUserStorage()

  function handleLogout() {
    removeUser()
  }

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
      group: 'Faturamento',
      items: [
        {
          link: '/Dashboard',
          icon: 'LayoutDashboard',
          text: 'Dashboard',
        },
      ],
    },
  ]

  return (
    <aside className="flex flex-col w-[16rem] max-h-screen p-4 bg-gray-aside border border-gray-1000/10">
      <div className="mb-7 pb-4 border-b-4 border-gray-1000/10">
        <UserItem />
      </div>

      <div className="grow">
        {menuList.map((group, index) => (
          <MenuItems key={index} group={group} />
        ))}
      </div>

      {user && (
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 gap-x-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200"
        >
          <Icons name="LogOut" size={24} color="red" />
          <span>Sair</span>
        </button>
      )}
    </aside>
  )
}
