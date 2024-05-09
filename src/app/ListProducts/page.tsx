'use client'

import { useListProducts } from '@/api/useCases/useListProducts'
import { ProductCard } from '@/components/productCard'

export default function ListProducts() {
  const { data, error, isLoading } = useListProducts()

  return (
    <div className="flex flex-col justify-center">
      <h2 className="mb-12 text-2xl">Produtos listados</h2>

      <div className="">
        {isLoading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar produtos</p>}

        {data?.data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
