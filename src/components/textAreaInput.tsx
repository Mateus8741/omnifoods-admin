import React from 'react'

export interface InputTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  name?: string
  errorMessages?: string
}

export function TextAreaInput({
  label,
  name,
  errorMessages,
  ...rest
}: InputTextAreaProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="block text-xs font-bold uppercase" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="w-full p-2 text-lg bg-gray-100 border border-gray-400 text-black rounded"
        id={name}
        name={name}
        {...rest}
      />

      {errorMessages && (
        <span className="text-xs text-red-danger">{errorMessages}</span>
      )}
    </div>
  )
}
