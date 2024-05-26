'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { CardOrders } from '@/components/cardOrders'
import { Status } from '@/components/status'

export default function Billing() {
  const { data } = useListAllOrders()

  const pendingOrders = data?.data.filter(
    (order) => order.status === 'PREPARING',
  )

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
          <Status statusType="preparing" />
          {pendingOrders &&
            pendingOrders.map((order) => (
              <CardOrders key={order.id} {...order} />
            ))}
        </div>
      </div>
    </div>
  )
}
