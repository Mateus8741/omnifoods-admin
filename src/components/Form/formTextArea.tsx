import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { InputTextAreaProps, TextAreaInput } from '../textAreaInput'

export function FormTextArea<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...fieldProps
}: InputTextAreaProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextAreaInput
          value={field.value}
          onChange={field.onChange}
          errorMessages={fieldState.error?.message}
          {...fieldProps}
        />
      )}
    />
  )
}
