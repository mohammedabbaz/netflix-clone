"use client"
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function GitHubAuthButton() {
  return (
    <Button onClick={()=>signIn("github")} size={"icon"}  variant={"outline"} className='bg-transparent text-white' >
        <Github className='size-4'/>
       </Button>
  )
}
