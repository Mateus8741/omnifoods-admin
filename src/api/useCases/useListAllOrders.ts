import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api.Config'

export function useListAllOrders() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['list-all-orders'],
    queryFn: async () => getOrders(),
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
  })

  return {
    data,
    isLoading,
    error,
  }
}
