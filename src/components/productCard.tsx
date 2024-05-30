import { ProductSchema } from '@/schemas/productSchema'
import { FormatMoney } from '@/utils/formatMoney'

export function ProductCard({ title, details }: ProductSchema) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <h2 className="text-5xl font-bold">{title}</h2>

      <div className="flex flex-wrap gap-4 bg-gray-bg p-4 rounded-md w-fit">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex flex-col gap-4 w-[18rem] h-min-[19rem] bg-white p-4 rounded-md shadow-md"
          >
            <div className="flex gap-4 items-center">
              <img
                src={detail.thumbnail}
                alt={detail.name}
                className="rounded-md w-16 h-16"
              />

              <div>
                <h3 className="text-2xl font-bold">{detail.name}</h3>
                <p className="text-lg font-bold">{FormatMoney(detail.price)}</p>
              </div>
            </div>

            <div>
              {detail.ingredients && (
                <div className="flex flex-col gap-2 bg-gray-bg p-3 rounded-md">
                  <p className="text-xl font-bold">Ingredientes</p>
                  <p className="text-wrap break-words w-full">
                    {detail.ingredients}
                  </p>
                </div>
              )}

              {detail.description && (
                <div className="flex flex-col gap-2 bg-gray-bg p-3 rounded-md mt-2">
                  <p className="text-xl font-bold">Descrição</p>
                  <p>{detail.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
