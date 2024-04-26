'use client'

import { colors } from '@/theme/colors'
import { BellIcon, CreditCard, LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { Command, CommandGroup, CommandItem, CommandList } from './command'
import { UserItem } from './userItem'

export function Sidebar() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/Billing',
          icon: <CreditCard />,
          text: 'Billing',
        },
        {
          link: '/',
          icon: <BellIcon />,
          text: 'Notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          icon: <Settings />,
          text: 'General Settings',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-3 w-[16rem] border-r border-r-gray-1000/25 min-h-screen p-4 shadow-lg shadow-gray-1000/30">
      <div>
        <UserItem />
      </div>

      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey: number) => (
                  <Link href={option.link} key={optionKey} className="flex">
                    <CommandItem className="gap-2">
                      {option.icon}
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
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