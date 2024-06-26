import { useUserStorage } from '@/contexts/useUser'
import { LoginSchema } from '@/schemas/loginSchema'
import { useMutation } from '@tanstack/react-query'
import { login } from '../api.Config'

export function useLogin() {
  const { setUser } = useUserStorage()

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (data: LoginSchema) => login(data),
    onMutate: async () => {
      console.log('Carregando...')
    },
    onSettled: (data) => {
      setUser(data?.data)
    },
    onSuccess: () => {
      alert('Login efetuado com sucesso!')
    },
  })

  return { mutate, isSuccess, isPending }
}
