import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { deleteOrder } from '../api.Config'

export function useDeleteOrder() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) => deleteOrder(id),
    onMutate: async () => {
      toast('Deletando pedido...', { type: 'info' })
    },
    onSuccess: () => {
      toast('Pedido deletado!', { type: 'success' })
    },
    onError: () => {
      toast('Erro ao deletar pedido!', { type: 'error' })
    },
  })

  return { mutate, isSuccess, isPending }
}
