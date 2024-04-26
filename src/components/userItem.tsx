import Image from 'next/image'

export function UserItem() {
  return (
    <div className="flex items-center gap-3 p-2 border border-gray-1000/20 rounded-lg">
      <Image
        src="/logo.svg"
        alt="user"
        width={40}
        height={40}
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h2 className="text-lg text-gray-1000">Omni Foods</h2>
        <p className="text-gray-subtitle text-sm">Restaurante</p>
      </div>
    </div>
  )
}
