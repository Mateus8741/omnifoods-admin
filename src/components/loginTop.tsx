import { useLogin } from '@/api/useCases/useLogin'
import { LoginSchema } from '@/schemas/loginSchema'
import { useForm } from 'react-hook-form'
import { FormTextInput } from './Form/formTextInput'
import { CustomButton } from './customButton'

export function LoginTop() {
  const { mutate, isPending } = useLogin()

  const { control, handleSubmit } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onSubmit',
  })

  function onSubmit(data: LoginSchema) {
    mutate(data)
  }

  return (
    <form className="flex flex-row items-center w-full gap-x-4">
      <div className="flex flex-row gap-x-4 -mt-3">
        <FormTextInput control={control} name="email" label="E-mail" />

        <FormTextInput control={control} name="password" label="Senha" />
      </div>

      <CustomButton
        onClick={handleSubmit(onSubmit)}
        title="Login"
        disabled={isPending}
      />
    </form>
  )
}
