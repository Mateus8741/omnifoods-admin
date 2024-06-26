import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createProduct } from '../api.Config'

export function useCreateProduct() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (data: unknown) => createProduct(data),
    onMutate: async () => {
      toast('Criando produto...', { type: 'info' })
    },
    onSuccess: () => {
      toast('Produto criado!', { type: 'success' })
    },
    onError: () => {
      toast('Erro ao criar produto!', { type: 'error' })
    },
  })

  return { mutate, isSuccess, isPending }
}
