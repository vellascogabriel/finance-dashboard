import React from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function SignInPage() {
  return (
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16 mb-5">
            <h1 className="text-center text-3xl text-[#2E2A47]">
                Welcome Back!
            </h1>
            <p className="text-base text-[#7E8CA0]">
                Log in or Create account to get back to your dashboard!
            </p>
        </div>
        <div className="flex items-center justify-center">
            <ClerkLoaded>
                <SignIn path="/sign-in"/>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
        </div>
    </div>
    <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo"/>
    </div>
  </div>);
}