import React from "react";
import prisma from "../_utils/db";
import Image from "next/image";
import MovieDetails from "./MovieDetails";

// get 4 items
const getData = async () => {
  const data = await prisma.movie.findMany({
    select: {
      overview: true,
      release: true,
      id: true,
      duration: true,
      imageString: true,
      title: true,
      youtubeString: true,
      age: true,
      WatchLists: true,
      
      
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return data;
};

export default async function Recent() {
  // get movies
  const movies = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6 ">
      {movies.map((movie, index) => (
        <div key={index} className="relative h-48 w-full">
          <Image
            src={movie.imageString}
            className="absolute rounded-lg w-full h-full object-cover"
            height={500}
            width={500}
            alt=""
          />
          {/* hover effect */}
          <div className="h-60 relative z-10 opacity-0  transition-all duration-500 hover:opacity-100 hover:scale-110 w-full flex justify-center items-center">
            <div className=" flex items-center justify-center w-full h-full bg-gradient-to-b from-transparent z-10 via-black/50 to-black rounded-lg">
              <Image
                src={movie.imageString}
                className="absolute -z-10 rounded-lg w-full h-full object-cover"
                height={500}
                width={500}
                alt=""
              />
              {/* details and button  */}
              <MovieDetails
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchlistId={movie.WatchLists[0]?.id}
                youtybeUrl={movie.youtubeString}
                watchlist={movie.WatchLists.length>0?true:false}
                key={movie.id}
                age={movie.age}
                time={movie.duration}
                year={movie.release}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
