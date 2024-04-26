import { UserItem } from './userItem'

export function Sidebar() {
  return (
    <div className="flex flex-col gap-3 w-[16rem] border-r border-r-gray-1000/25 min-h-screen p-4 shadow-lg shadow-gray-1000/30">
      <div>
        <UserItem />
      </div>

      <div className="grow">Menu</div>
      <div>Setting / Notifications</div>
    </div>
  )
}
