
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubAuthButton from "@/app/components/GitHubAuthButton";
import GoogleAuthButton from "@/app/components/GoogleAuthButton";


export default function page() {
  return (
    <div className="bg-black/80 md:mt-0 mt-24 py-4 px-10 rounded md:max-w-sm ">
      <form method="POST"  action={'/api/auth/signin'}>
        <h1 className="text-white text-2xl font-bold ">Sign in</h1>
        <div className="space-y-4 mt-6">
          <Input type="email" placeholder="Email" />
          {/* <Input type="password" placeholder="password" /> */}
          <Button variant={"default"} className='w-full'>
            Sign in 
          </Button>
        </div>
      </form>
      {/* dont have an account  */}
      <div className="flex gap-1 mt-5">
        <h4 className=" text-sm   text-white">Don't have an account?</h4>
        <Link href={"/sign-up"} className="text-primary hover:underline text-sm capitalize">sign up</Link>
      </div>
       {/* social media  */}
    <div className="flex item-center justify-center w-full text-white mt-4 gap-3  ">
       <GitHubAuthButton/>
       <GoogleAuthButton/>
    </div>
    </div>
  );
}
