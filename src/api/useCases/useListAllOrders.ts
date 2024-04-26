import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api.Config'

export function useListAllOrders() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['list-all-orders'],
    queryFn: async () => getOrders(),
  })

  return {
    data,
    isLoading,
    error,
  }
}
