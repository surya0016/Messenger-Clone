"use client";

import AuthSocialButton from "@/app/components/AuthSocialButton";
import Button from "@/app/components/Button";
import Inputs from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle, BsGooglePlay, BsTwitterX } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

type Variant = "LOGIN" | "REGISTER"

export default function AuthForm() {
  const [variant ,setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") setVariant("REGISTER")
    else setVariant("LOGIN")
  },[variant])

  const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
    defaultValues:{
      name:'',
      email:"",
      password:"",
    }
  });

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    if(variant === 'LOGIN'){
      //Login
    }
    if(variant === 'REGISTER'){
      //REGISTER
    }
  } 

  const socialAction = (action:string) => {
    setIsLoading(true)

    //NextAuth Social Login
  }
  return (
    <div className="mt-4 sm:mx-auto sm:max-w-md sm:w-full">
      <div className="space-y-4 bg-white px-4 py-8 rounded-lg sm:px-10 shadow">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          { variant === "REGISTER" && <Inputs id="name" error={errors} label="Name" type="text" placeholder="John Doe" register={register}/>}
          <Inputs id="email" error={errors} label="Email" type="email" placeholder="johndoe@example.com" disabled={isLoading} register={register}/>
          <Inputs id="password" error={errors} label="Password" type="password" disabled={isLoading} register={register}/>
          <div>
            <Button disabled={isLoading} fullWidth type="submit">{variant === 'LOGIN' ? 'Login' : "Register"}</Button>
          </div> 
        </form>
        {/* -- */}
        <div className="">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"/>
            </div>
            <div className="relative flex justify-center text-center">
              <span className="bg-white px-2 text-gray-600 text-xs">or continue with</span>
            </div>
          </div>
        </div>
        {/* -- */}
        <div className="grid grid-flow-row grid-cols-2 gap-2">
          <AuthSocialButton icon={BsGoogle} onClick={()=>console.log("Clicked on Auth")}>Google</AuthSocialButton>
          <AuthSocialButton icon={BsGithub} onClick={()=>console.log("Clicked on Auth")}>Github</AuthSocialButton>
        </div>
        <div className="text-sm text-center text-zinc-600">
            {variant === "LOGIN" ? 'Dont have an account ? ' : 'Already have an account ? ' }<span onClick={toggleVariant} className="font-semibold cursor-pointer hover:underline ">{variant === "LOGIN" ? 'Register':'Login'}</span>
          </div>
      </div>
    </div>
  )
}
  