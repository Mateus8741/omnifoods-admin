import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { updateStatus } from '../api.Config'

export function useStatusUpdate() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) => updateStatus(id),
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

  return { mutate, isSuccess, isPending }
}
