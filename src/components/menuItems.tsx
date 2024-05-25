import { colors } from '@/theme/colors'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from './icons'

type MenuItem = {
  group: {
    group: string
    items: {
      link: string
      icon: unknown
      text: string
    }[]
  }
}

export function MenuItems({ group }: MenuItem) {
  const pathName = usePathname()

  const isActived = (link: string) => pathName === link

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-bold text-gray-1000">{group.group}</h2>
      <div className="flex flex-col gap-2 mb-3">
        {group.items.map((item, index) => (
          <>
            <Link
              key={index}
              href={item.link}
              className={`flex gap-2 p-2 rounded-md items-center font-semibold ${isActived(item.link) ? 'text-red-dark' : 'text-black'} hover:bg-red-light ${
                isActived(item.link) && 'bg-red-light'
              }`}
            >
              <Icons
                name={item.icon as never}
                size={24}
                color={
                  isActived(item.link) ? colors.red.line : colors.gray.icons
                }
              />
              {item.text}
            </Link>
          </>
        ))}
        <div className="h-[1px] bg-gray-1000/10" />
      </div>
    </div>
  )
}
