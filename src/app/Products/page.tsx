'use client'

import { FormTextInput } from '@/components/Form/formTextInput'
import { UploadButton } from '@/utils/uploadthings'
import { useForm } from 'react-hook-form'

export default function Products() {
  const { control } = useForm()

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="flex h-full flex-col justify-center gap-4">
        <div className="w-1/2">
          <FormTextInput control={control} name="title" label="Categoria" />
        </div>

        <div className="flex items-center gap-6">
          <div>
            <h2 className="mb-4 text-2xl">Produtos</h2>

            <FormTextInput control={control} name="name" label="Nome" />
            <FormTextInput control={control} name="price" label="Preço" />
            <FormTextInput
              control={control}
              name="description"
              label="Descrição"
            />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col items-center justify-center">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log('Files: ', res)
                  alert('Upload Completed')
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`)
                }}
                className="w-32 h-32 bg-gray-light rounded-md"
              />

              <p>Thumbnail</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log('Files: ', res)
                  alert('Upload Completed')
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`)
                }}
                className="w-32 h-32 bg-gray-light rounded-md"
              />

              <p>Cover</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-gray-light text-white rounded-md p-2 w-1/2 self-center"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
