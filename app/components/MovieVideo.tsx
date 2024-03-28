import React from "react";
import prisma from "../_utils/db";
import BannerButtons from "./BannerButtons";

const getData = async () => {
  const data = await prisma.movie.findFirst({
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
      youtubeString:true
    },
  });
  return data;
};

export default async function MovieVideo() {
  const movie = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={movie?.imageString}
        autoPlay
        muted
        loop
        src={movie?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%] "
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {movie?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">
          {movie?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <BannerButtons
            age={movie?.age as number}
            movieId={movie?.id as number}
            overview={movie?.overview as string}
            time={movie?.duration as number}
            title={movie?.title as string}
            youtybeUrl={movie?.youtubeString as string}
            key={movie?.id}
            year={movie?.release as number}
          />

        </div>
      </div>
    </div>
  );
}
