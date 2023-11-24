import Image from "next/image";
import React, { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";

export default function ArtistWeek() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="mx-8 my-8">
      <div className="flex justify-between mb-12 ">
        <h1 className="text-3xl font-semibold ">Artist of the Week</h1>

        <CustomPagination current={current} onChange={onChange} total={40} />
      </div>

      <div className="grid grid-cols-4 max-sm:grid-cols-2 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex w-36">
            <span className="text-[270px] text-[#AD241B] -my-[100px] ">
              {" "}
              {index + 2}{" "}
            </span>
            <Image
              src={"/img/artist-p.png"}
              alt="artist image"
              width={150}
              height={180}
              loading="lazy"
              className="rounded-xl h-[200px] -ml-[40px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
