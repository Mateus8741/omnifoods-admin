import { useMutation } from '@tanstack/react-query'
import { deleteOrder } from '../api.Config'

export function useDeleteOrder() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) => deleteOrder(id),
    onMutate: async () => {
      console.log('deleting order...')
    },
    onSuccess: () => {
      alert('Order deleted!')
    },
  })

  return { mutate, isSuccess, isPending }
}
