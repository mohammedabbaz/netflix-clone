"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import VideoPlayingModal from "./VideoPlayingModal";
import { addToFavorites, removeFromFavorites } from "../Actions";
import { usePathname } from "next/navigation";

type inAppProps = {
  movieId: number;
  overview: string;
  youtybeUrl: string;
  watchlist: boolean;
  watchlistId: string;
  title: string;
  age: number;
  year: number;
  time: number;
};

export default function MovieDetails({
  movieId,
  overview,
  title,
  watchlist,
  watchlistId,
  youtybeUrl,
  age,
  time,
  year,
}: inAppProps) {
  // use state to open modal
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      {/* play button */}
      <button onClick={() => setOpen(true)} className="-mt-11">
        <PlayCircle className="size-16 text-white " />
      </button>
      {/* add to favorite button */}
      <div className="absolute top-4 right-4">
        {watchlist ? (
          <form action={removeFromFavorites}>
            <input type="hidden" name="wathlistId" value={watchlistId} />
            <input type="hidden" name="pathName" value={pathName} />
            <Button variant={"secondary"} className="bg-black/50" size={"icon"}>
              <Heart className="size-5 text-primary fill-primary" />
            </Button>
          </form>
        ) : (
          <form action={addToFavorites}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathName" value={pathName} />

            <Button variant={"secondary"} size={"icon"}>
              <Heart className="size-5" />
            </Button>
          </form>
        )}
      </div>
      {/* title */}
      <div className="absolute bottom-0 p-6 left-0 text-white">
        <h1 className=" font-bold text-lg">{title}</h1>
        {/* description */}
        <p className="text-sm font-normal line-clamp-1">{overview}</p>
        {/* time and age */}
        <div className="flex gap-x-2 ">
          <p className=" underline ">{age}+</p>
          <p className="">{year}</p>
          <p className="">{time}</p>
        </div>
      </div>
      {/* modal sheet  to show video */}
      <VideoPlayingModal
        changestate={setOpen}
        details={overview}
        state={open}
        title={title}
        vediosource={youtybeUrl}
        key={movieId}
        age={age}
        time={time}
        year={year}
      />
    </>
  );
}
