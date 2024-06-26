import Image from "next/image";
import { useState } from "react";
import { CustomPagination } from "../../Shared/CustomPagination";

export default function CategorySection({ sectionTitle }) {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="bg-primary py-16 text-white mt-4">
      <div className="md:flex justify-between mx-4 sm:mx-8">
        <h1 className="text-3xl font-semibold"> {sectionTitle} </h1>
        <CustomPagination
          current={current}
          onChange={onChange}
          total={40}
          isRedBackground={false}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-4 sm:mx-8 mt-6 gap-2 justify-items-center">
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
              <h1 className="text-base font-bold text-white">THDST-S1EP1</h1>
              <p className="text-slate-400 font-semibold text-base">DRAMA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
