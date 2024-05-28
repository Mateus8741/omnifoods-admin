'use client'

import { useCreateProduct } from '@/api/useCases/useCreateproduct'
import { FormTextArea } from '@/components/Form/formTextArea'
import { FormTextInput } from '@/components/Form/formTextInput'
import { CustomButton } from '@/components/customButton'
import { CreateProductSchema } from '@/schemas/createProductSchema'
import { UploadButton } from '@/utils/uploadthings'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CreateProduct() {
  const [thumbnail, setThumbnail] = useState('')
  const [cover, setCover] = useState('')

  const { mutate, isPending } = useCreateProduct()

  const { control, handleSubmit, reset } = useForm<CreateProductSchema>({
    defaultValues: {
      title: '',
      name: '',
      price: 0,
      description: '',
      ingredients: '',
    },

    mode: 'onChange',
  })

  function onSubmit(data: CreateProductSchema) {
    const productData = {
      title: data.title,
      details: [
        {
          name: data.name,
          price: Number(data.price),
          description: data.description,
          ingredients: data.ingredients ?? '',
          thumbnail,
          cover,
        },
      ],
    }

    mutate(productData)
    reset()
    setThumbnail('')
    setCover('')
  }

  return (
    <div className="w-full h-full items-center justify-center">
      <h2 className="mb-4 text-2xl">Produtos</h2>

      <form className="flex flex-col justify-center gap-4 p-4 w-[32rem]">
        <div className="flex justify-between gap-x-4">
          <FormTextInput control={control} name="title" label="Categoria" />

          <FormTextInput control={control} name="name" label="Nome" />
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <div className="bg-black h-1 w-full" />
          <h2 className="text-2xl">Detalhes</h2>
          <div className="bg-black h-1 w-full" />
        </div>

        <div className="">
          <div>
            <div className="flex gap-5">
              <FormTextInput control={control} name="price" label="Preço" />
              <FormTextInput
                control={control}
                name="ingredients"
                label="Ingredientes"
              />
            </div>

            <FormTextArea
              control={control}
              name="description"
              label="Descrição"
              maxLength={200}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <div className="bg-black h-1 w-full" />
          <h2 className="text-2xl">Imagens</h2>
          <div className="bg-black h-1 w-full" />
        </div>

        <div className="flex items-center justify-center gap-5">
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
            <div className="flex flex-col items-center justify-center text-white">
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
            <div className="flex flex-col items-center justify-center text-white">
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

        <CustomButton
          title="Salvar"
          disabled={isPending}
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  )
}
