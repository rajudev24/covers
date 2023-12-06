import Image from "next/image";
import React from "react";

export default function Playlist() {
  return (
    <div className="md:w-[45%] mx-4">
      <div className=" h-96 border-2 p-4 rounded-xl border-slate-800 lg:-mt-[400px] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between ">
          <h1 className="text-xl font-semibold">Playlist</h1>
          <h1>12 Videos</h1>
        </div>
        <div className="custom-scrollbar-content custom-scrollbar-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="mt-2 flex text-left items-center ">
              <Image
                src={"/img/artist.jpg"}
                alt="artist image"
                width={60}
                height={40}
                loading="lazy"
                className="rounded-xl"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold">THDST-S1EP1</h1>
                <p className="text-slate-400">
                  {" "}
                  36min Published on June 29, 2020
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 rounded-xl border-slate-800 mt-4 p-4">
        <span className="text-lg font-semibold">Share</span>
        <div className="flex justify-between mt-2">
          <Image src={"/img/fb.png"} width={30} height={30} alt="fb icon" />
          <Image
            src={"/img/youtube.png"}
            width={30}
            height={30}
            alt="fb icon"
          />
          <Image
            src={"/img/linkdien.png"}
            width={30}
            height={30}
            alt="fb icon"
          />
          <Image
            src={"/img/twitter.png"}
            width={30}
            height={30}
            alt="fb icon"
          />
          <Image
            src={"/img/instagram.png"}
            width={30}
            height={30}
            alt="fb icon"
          />
          <Image src={"/img/link.png"} width={30} height={30} alt="fb icon" />
        </div>
      </div>
      <div className="border-2 rounded-xl border-slate-800 mt-4 p-4">
        <span className="text-lg font-semibold">Tags</span>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <span className="bg-[#AD241B]  p-1 rounded-lg text-white">
                #adventure
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
