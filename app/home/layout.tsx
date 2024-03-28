import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../_utils/auth";
import { redirect } from "next/navigation";
import NavBar from "../components/Nav/NavBar";

export default async function Homelayout({
  children,
}: {
  children: ReactNode;
}) {
  // const session = await getServerSession(authOptions)
  // if(!session?.user){
  //     return redirect('/sign-in')
  // }

  return (
    <div className="">
      <NavBar />
      <main className="mx-auto max-w-7xl md:px-4 lg:px-8 flex   ">
      {children}
      </main>
    </div>
  );
}
