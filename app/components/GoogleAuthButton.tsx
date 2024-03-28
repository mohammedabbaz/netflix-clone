"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import google from "../../public/google.png"


export default function GoogleAuthButton() {
  return (
    <Button onClick={()=>signIn('google')} size={"icon"}  variant={"outline"} className='bg-transparent text-white' >
    <Image src={google} alt="google" className='w-4 h-4' />
   </Button>
  )
}
