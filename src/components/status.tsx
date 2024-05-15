import { VariantProps, tv } from 'tailwind-variants'

const STATUS = tv({
  slots: {
    container: 'flex items-center justify-center rounded-md p-px w-24 h-5',
  },
  variants: {
    statusType: {
      pending: {
        container: 'bg-yellow-pending',
      },
      cancelled: {
        container: 'bg-red-canceled',
      },
      completed: {
        container: 'bg-green-completed',
      },
    },
  },

  defaultVariants: {
    statusType: 'pending',
  },
})

type StatusProps = VariantProps<typeof STATUS> & {
  statusType: 'pending' | 'cancelled' | 'completed'
}

export function Status({ statusType = 'pending' }: StatusProps) {
  const { container } = STATUS({ statusType })

  return (
    <div className={container()}>
      <p className="text-black font-bold text-xs">
        {statusType === 'pending' && 'Em preparo'}
        {statusType === 'cancelled' && 'Cancelados'}
        {statusType === 'completed' && 'Prontos'}
      </p>
    </div>
  )

  //   return (
  //     <div className="bg-yellow-pending rounded-md p-px text-center w-24">
  //       <p className="text-black font-bold text-xs">Em preparo</p>
  //     </div>
  //   )
}
