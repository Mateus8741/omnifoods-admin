import Image from 'next/image'

export function UserItem() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="user"
        width={31}
        height={31}
        className="w-16 h-16 rounded-full ring-2 ring-white"
      />
      <div>
        <h2 className="text-lg font-bold text-gray-1000">Omni Foods</h2>
        <p className="text-gray-subtitle text-sm">Comanda principal</p>
      </div>
    </div>
  )
}
