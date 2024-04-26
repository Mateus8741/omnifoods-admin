import { Order } from '@/schemas/orderSchema'

export function CardOrders(order: Order) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
        <h2 className="text-xl font-bold text-gray-1000">
          Mesa {order.tableNumber}
        </h2>

        {order.productOrders.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4"
          >
            <h3 className="text-lg font-bold text-gray-1000">
              {product.productName}
            </h3>
            <p className="text-gray-1000">Quantidade: {product.quantity}</p>
            <p className="text-gray-1000">Preço: R$ {product.productPrice}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
