export default function ListProducts() {
  // const { data, isLoading, isError } = useListProducts()

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2">
        <h2 className="mb-4 text-2xl">Produtos</h2>

        {/* {isLoading && <p>Carregando...</p>}
            {isError && <p>Erro ao carregar produtos</p>}
    
            {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))} */}
      </div>
    </div>
  )
}
