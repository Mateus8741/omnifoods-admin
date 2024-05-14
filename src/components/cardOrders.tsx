import { Order } from '@/schemas/orderSchema'
import { formatDate } from '@/utils/formateDate'

export function CardOrders(order: Order) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl mt-4">
      <div className="flex flex-col w-full items-center justify-center p-4">
        <div className="flex flex-row w-full items-center justify-between">
          <h2 className="text-sm text-gray-1000 font-bold uppercase">
            Mesa: {order.tableNumber}
          </h2>

          <p className="text-sm text-gray-1000 font-bold uppercas">
            Horário: {formatDate(order.createdAt ?? '')}
          </p>
        </div>

        {order.productOrders.map((product) => (
          <div
            key={product.id}
            className="flex flex-row bg-gray-bg items-center gap-4 w-full p-4 rounded-lg mt-4"
          >
            <p className="text-lg font-bold text-gray-1000">
              {product.quantity}x
            </p>

            <p className="text-lg text-gray-1000 font-bold">
              {product.productName}
            </p>
          </div>
        ))}

        {order.changeToOrder && (
          <p className="text-gray-1000 font-bold mt-3 self-start">
            Obs: <span className="font-semibold">{order.changeToOrder}</span>
          </p>
        )}
      </div>
    </div>
  )
}
