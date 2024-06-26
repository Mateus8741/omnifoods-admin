import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { completeStatus } from '../api.Config'

export function useStatusComplete() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) => completeStatus(id),
    onMutate: async () => {
      toast('Atualizando status...', { type: 'info' })
    },
    onSuccess: () => {
      toast('Status atualizado!', { type: 'success' })
    },
    onError: () => {
      toast('Erro ao atualizar status!', { type: 'error' })
    },
  })

  return { complete: mutate, isSuccess, isPending }
}
