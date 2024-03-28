import prisma from "@/app/_utils/db";
import MovieDetails from "@/app/components/MovieDetails";
import Image from "next/image";
import React from "react";

const getUseraddedToFavorites = async (userId: string) => {
  const data = prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          overview: true,
          release: true,
          id: true,
          duration: true,
          imageString: true,
          title: true,
          videoSource: true,
          age: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
};

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const movies = await getUseraddedToFavorites("abz");
  return (
    <div className="w-full">
      <h1 className="py-4 text-lg font-bold w-full underline">Your watch list </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6  w-full ">
        {movies.map((movie, index) => (
          <div key={index} className="relative h-48 w-full">
            <Image
              src={movie.Movie?.imageString as string}
              className="absolute rounded-lg w-full h-full object-cover"
              height={500}
              width={500}
              alt=""
            />
            {/* hover effect */}
            <div className="h-60 relative z-10 opacity-0  transition-all duration-500 hover:opacity-100 hover:scale-110 w-full flex justify-center items-center">
              <div className=" flex items-center justify-center w-full h-full bg-gradient-to-b from-transparent z-10 via-black/50 to-black rounded-lg">
                <Image
                  src={movie.Movie?.imageString as string}
                  className="absolute -z-10 rounded-lg w-full h-full object-cover"
                  height={500}
                  width={500}
                  alt=""
                />
                {/* details and button  */}
                <MovieDetails
                  movieId={movie.Movie!.id}
                  overview={movie.Movie!.overview}
                  title={movie.Movie!.title}
                  watchlistId={movie.Movie!.WatchLists[0]?.id}
                  youtybeUrl={movie.Movie!.youtubeString}
                  watchlist={movie.Movie!.WatchLists.length>0?true:false}
                  key={movie.Movie!.id}
                  age={movie.Movie!.age}
                  time={movie.Movie!.duration}
                  year={movie.Movie!.release}
                />
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
