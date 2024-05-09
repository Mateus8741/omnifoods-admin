import { useMutation } from '@tanstack/react-query'
import { createProduct } from '../api.Config'

export function useCreateProduct() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (data: unknown) => createProduct(data),
    onMutate: async () => {
      console.log('Creating product...')
    },
    onSuccess: () => {
      alert('Produto criado!')
    },
  })

  return { mutate, isSuccess, isPending }
}
