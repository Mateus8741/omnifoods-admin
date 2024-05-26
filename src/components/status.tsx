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
      preparing: {
        container: 'bg-red-pending',
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
  statusType: 'pending' | 'preparing' | 'completed'
}

export function Status({ statusType = 'pending' }: StatusProps) {
  const { container } = STATUS({ statusType })

  return (
    <div className={container()}>
      <p className="text-black font-bold text-xs">
        {statusType === 'pending' && 'Pendentes'}
        {statusType === 'preparing' && 'Em preparo'}
        {statusType === 'completed' && 'Prontos'}
      </p>
    </div>
  )
}
