import Image from "next/image";
import { authOptions } from "./_utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {


  const session = await getServerSession(authOptions)

  if(!session?.user){
          return  redirect("/sign-in")
  }else{
    return redirect('/Home')
  }
}
