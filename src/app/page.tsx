'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { CardOrders } from '@/components/cardOrders'
import { Status } from '@/components/status'

export default function Home() {
  const { data } = useListAllOrders()

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
          <Status statusType="pending" />

          {data?.data.map((order) => (
            <CardOrders key={order.tableNumber} {...order} />
          ))}
        </div>

        <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
          <Status statusType="canceled" />
        </div>

        <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
          <Status statusType="completed" />
        </div>
      </div>
    </div>
  )
}
