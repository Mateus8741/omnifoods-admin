export function CardOrders() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-2xl font-bold text-gray-1000">Pedidos</h1>

      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
        <h2 className="text-xl font-bold text-gray-1000">Mesa 1</h2>

        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
          <h3 className="text-lg font-bold text-gray-1000">Cachorro quente</h3>
          <p className="text-gray-1000">Quantidade: 2</p>
          <p className="text-gray-1000">Preço: R$ 10,00</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
          <h3 className="text-lg font-bold text-gray-1000">Hamburguer</h3>
          <p className="text-gray-1000">Quantidade: 1</p>
          <p className="text-gray-1000">Preço: R$ 15,00</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
        <h2 className="text-xl font-bold text-gray-1000">Mesa 2</h2>
        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-bg mt-4">
          <h3 className="text-lg font-bold text-gray-1000">Pizza</h3>
          <p className="text-gray-1000">Quantidade: 1</p>
          <p className="text-gray-1000">Preço: R$ 30,00</p>
        </div>
      </div>
    </div>
  )
}
