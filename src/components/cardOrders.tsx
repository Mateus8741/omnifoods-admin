import { useDeleteOrder } from '@/api/useCases/useDeleteOrder'
import { useStatusUpdate } from '@/api/useCases/useUpdateStatus'
import { useStatusComplete } from '@/api/useCases/useUpdateStatusComplete'
import { Order } from '@/schemas/orderSchema'
import { formatDate } from '@/utils/formateDate'
import { Icons } from './icons'

export function CardOrders(order: Order) {
  const { mutate } = useStatusUpdate()
  const { mutate: mutateDelete } = useDeleteOrder()
  const { complete } = useStatusComplete()

  function handleAcceptOrder() {
    mutate(order.id ?? '')
  }

  function handleCompleteOrder() {
    complete(order.id ?? '')
  }

  return (
    <div className="flex flex-col relative items-center justify-center bg-white shadow-md rounded-2xl mt-4">
      {order.status === 'COMPLETED' && (
        <div className="absolute -top-2 -right-2 bg-green-success text-white rounded-full p-1 font-semibold border-2 border-white transition duration-200 ease-in-out transform">
          <Icons name="Check" size={15} />
        </div>
      )}

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

      {order.status === 'PENDING' && (
        <div className="flex flex-row w-full items-center justify-around px-4 mb-2">
          <button
            className="bg-red-line text-white rounded-md px-4 py-2 font-semibold hover:bg-red-canceled transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={() => mutateDelete(order.id ?? '')}
          >
            Recusar
          </button>

          <button
            className="bg-green-success text-white rounded-md px-4 py-2 font-semibold hover:bg-green-completed transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={handleAcceptOrder}
          >
            Aceitar
          </button>
        </div>
      )}

      {order.status === 'PREPARING' && (
        <div className="flex flex-row w-full items-center justify-around px-4 mb-2">
          <button
            className="bg-red-line text-white rounded-md px-4 py-2 font-semibold hover:bg-red-canceled transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={() => mutateDelete(order.id ?? '')}
          >
            Cancelar
          </button>

          <button
            className="bg-green-success text-white rounded-md px-4 py-2 font-semibold hover:bg-green-completed transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={handleCompleteOrder}
          >
            Pronto
          </button>
        </div>
      )}
    </div>
  )
}
