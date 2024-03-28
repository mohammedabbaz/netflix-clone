"use client"
import Image from "next/image";
import React from "react";
import logo from "../../../public/netflix_logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { UserNav } from "./UserNav";


interface linkProps {
  href: string;
  title: string;
}

const links: linkProps[] = [
  { href: "/home", title: "Home" },
  { href: "/home/show", title: "Tv Shows" },
  { href: "/home/movie", title: "Movies" },
  { href: "/home/recent", title: "Recent added" },
  { href: "/home/user/myLists", title: "My Lists" },
];

export default function NavBar() {


    const pathname = usePathname()

  return (
    <div className=" flex max-w-7xl mx-auto  md:px-6  lg:px-8  px-5 
     py-4 items-center justify-between">
        {/* logo and links  */}
   <div className=" flex items-center justify-center">
        <div className="w-32">
       <Link href="/home"> <Image src={logo} alt="logo"  /></Link>
      </div>
      <ul className="hidden lg:flex ml-6 gap-x-4">
        {links.map((link, index) => (
          <li key={index} className={pathname===link.href?'text-white underline text-sm font-semibold':'text-gray-500 text-sm font-normal'}>
            <Link href={link.href}> {link.title} </Link>
          </li>
        ))}
      </ul>
   </div>

      {/* user prodile button and saerch  */}
      <div className="text-sm gap-x-6 flex  items-center">
        <Search className="size-5 cursor-pointer text-white  "/>
        <Bell className="size-5 cursor-pointer text-white  "/>
        <UserNav/>
      </div>
    </div>
  );
}
