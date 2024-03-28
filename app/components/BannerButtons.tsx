"use client"
import { Button } from "@/components/ui/button";
import { Info, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import VideoPlayingModal from "./VideoPlayingModal";

type inAppProps = {
    movieId: number;
    overview: string;
    youtybeUrl: string;
  
    title: string;
    age: number;
    year: number;
    time: number;
  };

export default function BannerButtons({age ,time , overview , title , movieId , year ,youtybeUrl}:inAppProps) {

    const [open, setOpen] = useState(false)
  return (
    <div className=" flex gap-x-3">
      <Button onClick={()=>setOpen(true)} className="text-lg font-bold flex text-white items-center gap-1 ">
        <PlayCircle /> Play
      </Button>

      <Button onClick={()=>setOpen(true)} variant={"outline"} className="text-lg font-bold text-black flex items-center gap-1">
        <Info /> See more
      </Button>

       {/* modal sheet  to show video */}
       <VideoPlayingModal
        changestate={setOpen}
        details={overview}
        state={open}
        title={title}
        vediosource={youtybeUrl}
        key={movieId}
        age={age}time={time} year={year}
      />
    
    </div>


  );
}
