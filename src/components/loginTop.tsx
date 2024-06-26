import { useLogin } from '@/api/useCases/useLogin'
import { LoginSchema } from '@/schemas/loginSchema'
import Image from 'next/image'
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
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Image
        src="/darkLogo.svg"
        width={300}
        height={300}
        quality={100}
        alt="Logo"
      />

      <form className="flex flex-col items-center justify-center w-full gap-4 mt-12">
        <FormTextInput control={control} name="email" label="E-mail" />

        <FormTextInput control={control} name="password" label="Senha" />

        <CustomButton
          onClick={handleSubmit(onSubmit)}
          title="Login"
          disabled={isPending}
        />
      </form>
    </div>
  )
}
