import { IconType } from 'react-icons';
import React from 'react'

interface AuthSocialButtonType {
  icon:IconType,
  children:React.ReactNode,
  onClick:()=>void
}

const AuthSocialButton:React.FC<AuthSocialButtonType> = ({icon:Icon , children, onClick}) => {
  return (
    <button type='button' onClick={onClick}
      className='border flex justify-center items-center w-full py-1.5 rounded-md bg-zinc-50 hover:bg-zinc-100 '
    ><Icon className='mr-2'/>{children}</button>
  )
}

export default AuthSocialButton