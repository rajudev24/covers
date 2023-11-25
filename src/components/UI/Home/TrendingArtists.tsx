import Image from "next/image";
import React from "react";

export default function TrendingArtists() {
  return (
    <div className="md:flex justify-between  bg-primary p-8">
      <div>
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Trending Artists
          </h1>
          <p className="text-white mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <Image
          src={"/img/singer-2.jpg"}
          alt="artist image"
          width={550}
          height={200}
          loading="lazy"
          className="rounded-xl mt-4"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <Image
            key={index}
            src={"/img/artist.jpg"}
            alt="artist image"
            width={200}
            height={100}
            loading="lazy"
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
