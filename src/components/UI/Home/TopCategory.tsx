import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomPagination } from "../../../Shared/CustomPagination";

export default function TopCategory() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="bg-[#AD241B] py-16 text-white mt-4">
      <div className="flex justify-between mx-8 ">
        <h1 className="text-3xl font-semibold ">All Category</h1>
        <CustomPagination current={current} onChange={onChange} total={40} />
      </div>
      <div className="grid grid-cols-6 max-sm:grid-cols-2 mx-8 mt-6 gap-2 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className=" ">
            <Image
              src={"/img/artist.jpg"}
              alt="artist image"
              width={150}
              height={100}
              loading="lazy"
              className="rounded-xl"
            />
            <div className="mt-2">
              <h1 className="text-lg font-bold text-white">THDST-S1EP1</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
