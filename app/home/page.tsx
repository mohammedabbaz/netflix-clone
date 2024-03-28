import { NextAuthOptions, getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../_utils/auth'
import { redirect } from 'next/navigation'
import NavBar from '../components/Nav/NavBar'
import MovieVideo from '../components/MovieVideo'
import Recent from '../components/Recent'


export default  async function page() {

    const session = await getServerSession(authOptions as NextAuthOptions)

    // if(!session?.user){
    //         return  redirect("/sign-in")
    // }

   
   

  return (
    <div className='p-5 lg:p-0 w-full mb-32'>
      {/* banner */}
      <MovieVideo/>
      {/* recently added  */}
      <h3 className='text-3xl  font-bold'>Recently added</h3>
      <Recent/>
    </div>
  )
}
