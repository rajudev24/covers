import { Button } from "antd";
import Image from "next/image";
import React from "react";

export default function ArtistProfile({ data }) {
  let artistName = JSON.parse(data[0]?.artist);
  return (
    <div className=" h-fit border-2 p-6 text-center rounded-lg border-slate-800 m-4">
      <Image
        src={`${data[0]?.standard_img}`}
        alt="artist image"
        width={300}
        height={300}
        loading="lazy"
        className="rounded-lg w-full"
      />
      <h1 className="text-4xl font-extrabold mt-2">
        {" "}
        {artistName?.artist_name}{" "}
      </h1>
      <div className="flex justify-between mt-2 -mb-4">
        <Button
          style={{
            backgroundColor: "#AD241B",
            color: "white",
            borderRadius: "20px",
            height: "45px",
            padding: "0px 25px",
          }}
        >
          {" "}
          Subscribe
        </Button>
        <Button
          style={{
            backgroundColor: "#AD241B",
            color: "white",
            borderRadius: "20px",
            height: "45px",
            padding: "0px 25px",
          }}
        >
          {" "}
          + Follow
        </Button>
      </div>
    </div>
  );
}
