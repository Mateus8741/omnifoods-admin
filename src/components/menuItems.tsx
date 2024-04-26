import Link from 'next/link'

type MenuItem = {
  group: {
    group: string
    items: {
      link: string
      icon: React.ReactNode
      text: string
    }[]
  }
}

export function MenuItems({ group }: MenuItem) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-bold text-white">{group.group}</h2>
      <div className="flex flex-col gap-2 mb-3">
        {group.items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex gap-2 p-2 rounded-md items-center text-gray-subtitle hover:text-white hover:bg-white/10"
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
