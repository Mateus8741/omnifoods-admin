'use client'

import { useListAllOrders } from '@/api/useCases/useListAllOrders'
import { DashboardCard } from '@/components/dashboardCard'
import { Icons } from '@/components/icons'
import { getDashboardValues } from '@/utils/cardValues'
import { FormatMoney } from '@/utils/formatMoney'

export default function Dashboard() {
  const { data } = useListAllOrders()

  const { salesPerDay, salesPerMonth, totalRequests, totalValue } =
    getDashboardValues(data?.data || [])

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold text-gray-1000">Dashboard</h1>

      <div className="flex flex-col mt-4 p-6 rounded-3xl shadow-lg w-fit">
        <div className="flex justify-between mb-6 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-1000">Visão Geral</h2>
            <p className="text-md font-normal text-gray-1000/60">
              Sumário de vendas, pedidos e faturamento.
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 py-px rounded-lg border-2 border-gray-1000/20 text-gray-1000/60">
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
  )
}
