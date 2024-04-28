import React from 'react'

import { FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'
import clsx from 'clsx'
interface InputProp {
  type?:string,
  placeholder?:string
  error:FieldErrors
  label:string
  id:string
  register: UseFormRegister<FieldValues>
  disabled?:boolean
  require?:boolean
}

  const Inputs:React.FC<InputProp> = ({type, placeholder, error, label, id, register, require, disabled}) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={id} className='ml-1 text-sm block font-semibold'>{label}</label>
      <input type={type} id={id} placeholder={placeholder} disabled={disabled} autoComplete={id} {...register(id)} required={require}
        className={clsx('form-input block shadow-sm sm:text-sm outline-none px-3 py-1.5 w-full border rounded-lg focus:ring-1 ring-inset ring-sky-600 ',
          error[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  )
}

export default Inputs
