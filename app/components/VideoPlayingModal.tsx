import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";

type inAppProps = {
  title: string;
  vediosource: string;
  state: boolean;
  details: string;
  changestate: any;
  year: number;
  time: number;
  age: number;
};

export default function VideoPlayingModal({
  changestate,
  details,
  state,
  title,
  vediosource,
  age,
  time,
  year,
}: inAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changestate(!state)}>
      <DialogContent className="bg-black text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className=" line-clamp-3">
            {details}
          </DialogDescription>
          <div className="flex gap-x-2 ">
            <p className=" underline ">{age}+</p>
            <p className="">{year}</p>
            <p className="">{time}</p>
          </div>
        </DialogHeader>
        <iframe src={vediosource} height={200} className="w-full"/>
      </DialogContent>
    </Dialog>
  );
}
