export function Sidebar() {
  return (
    <div className="flex flex-col gap-3 w-[15rem] border-r border-r-white/25 min-h-screen p-4 shadow-lg shadow-white/30">
      <div>User part</div>
      <div className="grow">Menu</div>
      <div>Setting / Notifications</div>
    </div>
  )
}
