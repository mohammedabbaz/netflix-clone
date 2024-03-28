import Image from 'next/image'
import React, { ReactNode } from 'react'
import logo from "../../public/netflix_logo.svg"

export default function Authlayout({children}:{children:ReactNode}) {
  return (
    <div className='h-screen w-screen relative bg-black flex justify-center flex-col md:bg-transparent md:items-center'>
        {/* background image  */}
        <Image src={"/login_background.jpg"}  alt='background' className='hidden md:flex md:object-cover brightness-50 -z-10' priority fill/>
        {children}

        {/* logo  */}
        <Image src={logo} className=' absolute top-4 left-4 md:top-10 md:left-10 object-contain' alt='logo' width={120} height={120} />
    </div>
  )
}
