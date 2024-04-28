import React from 'react'
import clsx from 'clsx'

interface ButtonProp {
  type?: 'submit' | 'reset' | 'button' | undefined
  fullWidth?:boolean
  children:React.ReactNode
  onClick?:()=>void
  secondary?:boolean
  danger?:boolean
  disabled?:boolean
}

const Button:React.FC<ButtonProp> = ({type, fullWidth, children, onClick, secondary, danger, disabled}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={
        clsx(
          'py-1.5 flex justify-center font-semibold transition-all  px-3 rounded-lg ',
          fullWidth && 'w-full',
          danger && 'bg-rose-500 hover:bg-rose-600',
          secondary ? ' text-black border' : 'text-white',
          !secondary && !danger && 'bg-sky-500 hover:bg-sky-600',
          disabled && 'opacity-50 cursor-default'
        )
      }
    >{children}</button>
  )
}

export default Button