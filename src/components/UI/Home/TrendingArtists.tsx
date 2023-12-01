import Image from "next/image";
import React from "react";

export default function TrendingArtists() {
  return (
    <div className="lg:flex justify-between bg-primary p-8">
      <div className="md:w-1/2">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-white">
            Trending Artists
          </h1>
          <p className="text-white my-2">
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
          className="rounded-xl  w-full"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 items-end mt-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Image
            key={index}
            src={"/img/artist.jpg"}
            alt="artist image"
            width={150}
            height={100}
            loading="lazy"
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
