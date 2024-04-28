import Image from "next/image";
import logo from "@/public/images/Messenger-Logo-500x281 (1).png"
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div className="flex h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div>
          <Image alt="Logo" height={65} width={65} className="mx-auto w-auto" src={logo}/>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <AuthForm />
        </div>
      </div>
    );
  }
  