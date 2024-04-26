export function CardOrders() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-2xl font-bold text-white">Pedidos</h1>
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-white mt-4">
        <h2 className="text-xl font-bold text-white">Mesa 1</h2>
        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-white mt-4">
          <h3 className="text-lg font-bold text-white">Cachorro quente</h3>
          <p className="text-white">Quantidade: 2</p>
          <p className="text-white">Preço: R$ 10,00</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-white mt-4">
          <h3 className="text-lg font-bold text-white">Hamburguer</h3>
          <p className="text-white">Quantidade: 1</p>
          <p className="text-white">Preço: R$ 15,00</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-white mt-4">
        <h2 className="text-xl font-bold text-white">Mesa 2</h2>
        <div className="flex flex-col items-center justify-center w-full p-4 rounded-lg border border-white mt-4">
          <h3 className="text-lg font-bold text-white">Pizza</h3>
          <p className="text-white">Quantidade: 1</p>
          <p className="text-white">Preço: R$ 30,00</p>
        </div>
      </div>
    </div>
  )
}
