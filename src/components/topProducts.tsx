import { COLORS } from '@/utils/colors'

export interface ProductSales {
  productName: string
  quantity: number
  totalSales: number
}

interface TopProductsProps {
  products: ProductSales[]
}

export function TopProducts({ products }: TopProductsProps) {
  const { fixedColors, generateLighterColor } = COLORS()

  function formatIndex(index: number) {
    return index < 10 ? `0${index + 1}` : index
  }

  const maxQuantity = Math.max(...products.map((p) => p.quantity))

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-center">
          <th className="py-2 px-4 border-b font-normal">#</th>
          <th className="py-2 px-4 border-b font-normal">Nome</th>
          <th className="py-2 px-4 border-b font-normal">Popularidade</th>
          <th className="py-2 px-4 border-b font-normal">Vendas (%)</th>
        </tr>
      </thead>
      <tbody className="divide-y-[0.5px] divide-gray-1000/10">
        {products.map((product, index) => {
          const popularityPercentage = (product.quantity / maxQuantity) * 100
          //   const color = getColor(index)
          //   const lighterColor = getLighterColor(color)
          const color = fixedColors[index % fixedColors.length]
          const lighterColor = generateLighterColor(color)

          return (
            <tr key={product.productName} className="text-gray-700">
              <td className="py-2 px-4 text-center">{formatIndex(index)}</td>
              <td className="py-2 px-4 text-center">{product.productName}</td>

              <td className="py-2 px-4">
                <div
                  className="w-full bg-gray-200 rounded"
                  style={{ backgroundColor: lighterColor }}
                >
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${popularityPercentage}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
              </td>

              <td className="py-2 px-4 text-center">
                <div
                  className="rounded-md w-[50px] h-[24px]"
                  style={{
                    border: `2px solid ${color}`,
                    backgroundColor: lighterColor,
                    color,
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color }}>
                    {Math.round(popularityPercentage)}%
                  </p>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
