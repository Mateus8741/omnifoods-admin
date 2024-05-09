import { LoaderCircle } from 'lucide-react'
import React from 'react'

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  disabled: boolean
}

export function CustomButton({ title, disabled, ...props }: CustomButtonProps) {
  return (
    <button
      className={`bg-gray-light text-white items-center rounded-md p-2 font-bold py-2 px-4 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {disabled ? (
        <div className="flex items-center justify-center gap-2">
          {title} <LoaderCircle className="animate-spin mr-2" />
        </div>
      ) : (
        title
      )}
    </button>
  )
}
