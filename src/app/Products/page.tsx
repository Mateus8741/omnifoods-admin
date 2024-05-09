'use client'

import { useCreateProduct } from '@/api/useCases/useCreateproduct'
import { FormTextArea } from '@/components/Form/formTextArea'
import { FormTextInput } from '@/components/Form/formTextInput'
import { CreateProductSchema } from '@/schemas/createProductSchema'
import { UploadButton } from '@/utils/uploadthings'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Products() {
  const [thumbnail, setThumbnail] = useState('')
  const [cover, setCover] = useState('')

  const { mutate, isPending, isSuccess } = useCreateProduct()

  const { control, handleSubmit, reset } = useForm<CreateProductSchema>()

  function onSubmit(data: CreateProductSchema) {
    const productData = {
      title: data.title,
      details: [
        {
          name: data.name,
          price: Number(data.price),
          description: data.description,
          ingredients: data.ingredients,
          thumbnail,
          cover,
        },
      ],
    }

    mutate(productData)

    if (isSuccess) {
      reset()
      setThumbnail('')
      setCover('')

      alert('Produto criado com sucesso!')
    }
  }

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
              name="ingredients"
              label="Ingredientes"
            />
            <FormTextArea
              control={control}
              name="description"
              label="Descrição"
              maxLength={200}
            />
          </div>

          <div className="flex gap-5">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt="Thumbnail"
                width={32}
                height={32}
                className="w-32 h-32 rounded-md"
                quality={100}
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log('Files: ', res)
                    setThumbnail(res[0].url)
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`)
                  }}
                  className="w-32 h-32 bg-gray-light rounded-md"
                />

                <p>Thumbnail</p>
              </div>
            )}

            {cover ? (
              <Image
                src={cover}
                alt="Cover"
                width={32}
                height={32}
                className="w-32 h-32 rounded-md"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log('Files: ', res)
                    setCover(res[0].url)
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`)
                  }}
                  className="w-32 h-32 bg-gray-light rounded-md"
                />

                <p>Cover</p>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-gray-light text-white rounded-md p-2 w-1/2 self-center"
          onClick={handleSubmit(onSubmit)}
          disabled={isPending}
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
