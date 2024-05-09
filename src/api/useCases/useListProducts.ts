import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api.Config'

export function useListProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['list-all-products'],
    queryFn: async () => getProducts(),
  })

  return {
    data,
    isLoading,
    error,
  }
}
