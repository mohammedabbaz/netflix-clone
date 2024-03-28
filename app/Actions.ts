"use server"

import { revalidatePath } from "next/cache";
import prisma from "./_utils/db";

 export async function addToFavorites (formData:FormData){
    "use server"
    const movieId = formData.get('movieId');
    const pathname = formData.get('pathName');
    const data = await prisma.watchList.create({
        data: {
            userId:"abz",
            movieId:Number(movieId)
        }
    })
    revalidatePath(pathname as string)
}

export async function removeFromFavorites (formData:FormData){
"use server"
    const wathlistId =formData.get('wathlistId') as string;
    const pathname = formData.get('pathName');

    const data = await prisma.watchList.delete({where:{id:wathlistId}})
    revalidatePath(pathname as string)
}