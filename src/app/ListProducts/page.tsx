'use client'

import { useListProducts } from '@/api/useCases/useListProducts'
import { ProductCard } from '@/components/productCard'
import { LoaderCircle } from 'lucide-react'

export default function ListProducts() {
  const { data, error, isLoading } = useListProducts()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className="animate-spin h-12 w-12" />
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="mb-12 text-2xl">Produtos listados</h2>

      <div className="">
        {error && <p>Erro ao carregar produtos</p>}

        {data?.data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
