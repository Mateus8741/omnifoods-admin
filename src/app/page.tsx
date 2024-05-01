'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { CardOrders } from '@/components/cardOrders'

export default function Home() {
  const { data } = useListAllOrders()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

      {data?.data.map((order) => (
        <CardOrders key={order.tableNumber} {...order} />
      ))}
    </div>
  )
}
