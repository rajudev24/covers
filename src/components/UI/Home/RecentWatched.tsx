import Image from "next/image";
import { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import ArtistCard from "../../Core/ArtistCard";

export default function RecentWatched() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="m-8 max-sm:m-2">
      <div className="flex justify-between ">
        <h1 className="text-xl font-bold ">Recent Watched</h1>
        <CustomPagination current={current} onChange={onChange} total={40} />
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-y-4 mt-4 gap-x-8 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <ArtistCard
            key={index}
            url={"/img/artist.jpg"}
            width={100}
            height={100}
            categoryTitle={"DRAMA SERIES"}
            artistName={"Oliver Jons"}
            altTag={"artist image"}
          />
        ))}
      </div>
    </div>
  );
}
