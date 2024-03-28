"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Avatar className="cursor-pointer">
          <AvatarImage src="https://afrnpudmusddjykbsawo.supabase.co/storage/v1/object/public/user%20images/avatar.png" alt="user avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> 
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-gray-400 bg-black">
        <div className="flex flex-col ">
            <p className="font-medium text-sm">medox abz</p>
            <p >medoxabz@gmail.com</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>signOut()} >
        Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
