import { useUserStorage } from '@/contexts/useUser'
import { LoginSchema } from '@/schemas/loginSchema'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { login } from '../api.Config'

export function useLogin() {
  const { setUser } = useUserStorage()

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (data: LoginSchema) => login(data),
    onMutate: async () => {
      toast('Efetuando login...', { type: 'info' })
    },
    onSettled: (data) => {
      setUser(data?.data)
    },
    onSuccess: () => {
      toast('Login efetuado com sucesso!', { type: 'success' })
    },
    onError: () => {
      toast('Erro ao efetuar login!', { type: 'error' })
    },
  })

  return { mutate, isSuccess, isPending }
}
