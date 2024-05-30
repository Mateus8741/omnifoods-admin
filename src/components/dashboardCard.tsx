import { tv } from 'tailwind-variants'
import { Icons } from './icons'

const $cards = tv({
  slots: {
    container:
      'flex flex-col justify-between w-[11rem] h-[11rem] p-4 rounded-3xl',
    icon: 'w-10 h-10 rounded-full flex items-center justify-center',
  },
  variants: {
    cardType: {
      total: {
        container: 'bg-cards-total-container',
        icon: 'bg-cards-total-icon',
      },
      totalRequests: {
        container: 'bg-cards-totalRequests-container',
        icon: 'bg-cards-totalRequests-icon',
      },
      salesPerMonth: {
        container: 'bg-cards-salesPerMonth-container',
        icon: 'bg-cards-salesPerMonth-icon',
      },
      salesPerDay: {
        container: 'bg-cards-salesPerDay-container',
        icon: 'bg-cards-salesPerDay-icon',
      },
    },
  },

  defaultVariants: {
    cardType: 'total',
  },
})

type DashboardCardProps = {
  cardType: 'total' | 'totalRequests' | 'salesPerMonth' | 'salesPerDay'
  values: number | string
}

export function DashboardCard({
  cardType = 'total',
  values,
}: DashboardCardProps) {
  const { container, icon } = $cards({ cardType })

  function getIcon() {
    switch (cardType) {
      case 'total':
        return 'BarChart4'
      case 'totalRequests':
        return 'File'
      case 'salesPerMonth':
        return 'Tag'
      case 'salesPerDay':
        return 'UserPlus'
    }
  }

  function getSubtitle() {
    switch (cardType) {
      case 'total':
        return 'Total de vendas'
      case 'totalRequests':
        return 'Total de pedidos'
      case 'salesPerMonth':
        return 'Vendas do mês'
      case 'salesPerDay':
        return 'Vendas do dia'
    }
  }

  return (
    <div className={container()}>
      <div className={icon()}>
        <Icons name={getIcon()} size={20} color="#fff" />
      </div>

      <div className="mt-4 flex flex-col items-start gap-3">
        <p className="text-2xl font-bold text-black text-center">{values}</p>
        <p className="text-md font-normal text-black/60 text-center">
          {getSubtitle()}
        </p>
      </div>
    </div>
  )
}
