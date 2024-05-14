import { Order } from '@/schemas/orderSchema'
import { formatDate } from '@/utils/formateDate'

export function CardOrders(order: Order) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-xl text-gray-1000">
            Mesa:{' '}
            <span className="font-bold uppercase">{order.tableNumber}</span>
          </h2>

          <p className="text-gray-1000">
            Hora do pedido:{' '}
            <span className="font-bold uppercase">
              {formatDate(order.createdAt ?? '')}
            </span>
          </p>
        </div>

        {order.productOrders.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4"
          >
            <h3 className="text-lg font-bold text-gray-1000">
              {product.productName}
            </h3>
            <p className="text-gray-1000">Quantidade: {product.quantity}</p>
          </div>
        ))}

        {order.changeToOrder && (
          <p className="text-gray-1000 mt-3">
            Observações:{' '}
            <span className="font-bold uppercase">{order.changeToOrder}</span>
          </p>
        )}
      </div>
    </div>
  )
}
