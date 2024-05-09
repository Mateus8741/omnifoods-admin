import { ProductSchema } from '@/schemas/productSchema'

export function ProductCard({ title, details }: ProductSchema) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-5xl font-bold">{title}</h2>

      <div className="flex flex-wrap gap-4">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex flex-col gap-4 border-2 w-[18rem] h-[19rem] border-gray-light p-4 rounded-md"
          >
            <div className="flex gap-4 items-center">
              <img
                src={detail.thumbnail}
                alt={detail.name}
                className="rounded-md w-16 h-16"
              />

              <div>
                <h3 className="text-2xl">{detail.name}</h3>
                <p>{detail.price}</p>
              </div>
            </div>

            <div>
              <p className="text-xl font-bold">Ingredientes</p>
              <p>{detail.ingredients}</p>

              <p className="text-xl font-bold mt-4">Descrição</p>
              <p>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
