'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { CardOrders } from '@/components/cardOrders'
import { Status } from '@/components/status'
import { Order } from '@/schemas/orderSchema'

export default function Home() {
  // const { data } = useListAllOrders()

  // const pendingOrders = data?.data.filter((order) => order.status === 'PENDING')
  // const canceledOrders = data?.data.filter(
  //   (order) => order.status === 'CANCELLED',
  // )
  // const completedOrders = data?.data.filter(
  //   (order) => order.status === 'COMPLETED',
  // )

  // return (
  //   <div className="w-full h-full p-4">
  //     <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

  //     <div className="grid grid-cols-3 gap-4 mt-4">
  //       <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
  //         <Status statusType="pending" />

  //         {pendingOrders &&
  //           pendingOrders.map((order) => (
  //             <CardOrders key={order.tableNumber} {...order} />
  //           ))}
  //       </div>

  //       <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
  //         <Status statusType="canceled" />

  //         {canceledOrders &&
  //           canceledOrders.map((order) => (
  //             <CardOrders key={order.tableNumber} {...order} />
  //           ))}
  //       </div>

  //       <div className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl">
  //         <Status statusType="completed" />

  //         {completedOrders &&
  //           completedOrders.map((order) => (
  //             <CardOrders key={order.tableNumber} {...order} />
  //           ))}
  //       </div>
  //     </div>
  //   </div>
  // )

  const { data } = useListAllOrders()

  const ordersByStatus = data?.data.reduce(
    (acc: { [key: string]: Order[] }, order) => {
      if (!acc[order.status]) {
        acc[order.status] = []
      }
      acc[order.status].push(order)
      return acc
    },
    {
      PENDING: [],
      CANCELLED: [],
      COMPLETED: [],
    },
  )

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {Object.entries(ordersByStatus || {}).map(([status, orders]) => (
          <div
            key={status}
            className="flex flex-col px-2 py-5 bg-gray-bg rounded-3xl"
          >
            <Status
              statusType={
                status.toLowerCase() as 'pending' | 'cancelled' | 'completed'
              }
            />
            {(orders as Order[]).map((order: Order) => (
              <CardOrders key={order.tableNumber} {...order} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
