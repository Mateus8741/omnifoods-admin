'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { DashboardCard } from '@/components/dashboardCard'
import { Icons } from '@/components/icons'
import { TopProducts } from '@/components/topProducts'
import { getDashboardValues } from '@/hooks/cardValues'
import { useExportData } from '@/hooks/exportPDF'
import { FormatMoney } from '@/utils/formatMoney'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export default function Dashboard() {
  const { data } = useListAllOrders()

  const {
    salesPerDay,
    salesPerMonth,
    totalRequests,
    totalValue,
    topProducts,
    annualSales,
    monthlySales,
  } = getDashboardValues(data?.data || [])

  const { exportData } = useExportData()

  function handleExportData() {
    exportData({
      totalValue,
      totalRequests,
      salesPerMonth,
      salesPerDay,
      annualSales,
      monthlySales,
      topProducts,
    })
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
              onClick={handleExportData}
            >
              <div className="flex items-center gap-2">
                <Icons name="Upload" size={15} color="#000" />

                <p className="text-sm font-normal text-black">Exportar</p>
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
