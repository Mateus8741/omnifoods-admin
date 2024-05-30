'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { DashboardCard } from '@/components/dashboardCard'
import { Icons } from '@/components/icons'
import { TopProducts } from '@/components/topProducts'
import { getDashboardValues } from '@/utils/cardValues'
import { COLORS } from '@/utils/colors'
import { FormatMoney } from '@/utils/formatMoney'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export default function Dashboard() {
  const { data } = useListAllOrders()

  const { salesPerDay, salesPerMonth, totalRequests, totalValue, topProducts } =
    getDashboardValues(data?.data || [])

  const { fixedColors } = COLORS()

  function exportData() {
    const docDefinition = {
      content: [
        { text: 'Relatório de Vendas', style: 'header' },
        {
          text: `Total de Vendas: ${FormatMoney(totalValue)}`,
          style: 'subheader',
        },
        { text: `Total de Pedidos: ${totalRequests}`, style: 'subheader' },
        { text: `Vendas do Mês: ${salesPerMonth}`, style: 'subheader' },
        { text: `Vendas do Dia: ${salesPerDay}`, style: 'subheader' },
        { text: 'Produtos Mais Vendidos', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['#', 'Nome', 'Popularidade', 'Vendas'],
              ...topProducts.map((product, index) => {
                const popularityPercentage =
                  (product.quantity /
                    Math.max(...topProducts.map((p) => p.quantity))) *
                  100
                const color = fixedColors[index % fixedColors.length]

                return [
                  { text: `${index + 1}`, style: 'tableData' },
                  { text: product.productName, style: 'tableData' },
                  {
                    text: `${Math.round(popularityPercentage)}%`,
                    border: [true, true, true, true],
                  },
                  {
                    text: FormatMoney(product.totalSales),
                    border: [true, true, true, true],
                    style: { color },
                  },
                ]
              }),
            ],
          },
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
        subheader: { fontSize: 12, margin: [0, 10, 0, 10] },
        tableData: { margin: [5, 5, 5, 5] },
      },
    }

    pdfMake
      .createPdf(docDefinition as unknown as never)
      .download('relatorio-de-vendas.pdf')
  }

  return (
    <div className="w-full h-full p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-1000">Dashboard</h1>

        <div className="flex flex-col mt-4 p-6 rounded-3xl shadow-lg w-fit drop-shadow-md">
          <div className="flex justify-between mb-6 gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-1000">Visão Geral</h2>
              <p className="text-md font-normal text-gray-1000/60">
                Sumário de vendas, pedidos e faturamento.
              </p>
            </div>

            <button
              className="flex items-center gap-2 px-4 py-px rounded-lg border-2 border-gray-1000/20 text-gray-1000/60"
              onClick={exportData}
            >
              <div className="flex items-center gap-2">
                <Icons name="Upload" size={15} color="#000" />

                <p className="text-sm font-normal text-black">Export</p>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard cardType="total" values={FormatMoney(totalValue)} />
            <DashboardCard cardType="totalRequests" values={totalRequests} />
            <DashboardCard cardType="salesPerMonth" values={salesPerMonth} />
            <DashboardCard cardType="salesPerDay" values={salesPerDay} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col mt-4 p-6 rounded-3xl shadow-lg w-fit">
          <h2 className="text-xl font-bold text-gray-1000 mb-6">
            Top produtos
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <TopProducts products={topProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
