import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomPagination } from "../../../Shared/CustomPagination";
import { useCategoriesQuery } from "../../../redux/api/categoryApi";

export default function TopCategory() {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  query["pageNo"] = page;
  query["itemPerPage"] = size;
  const { data, isLoading } = useCategoriesQuery({ ...query });
  console.log(data);
  const onChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-primary py-8 md:py-16 text-white mt-4">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
          All Category
        </h1>
        <CustomPagination
          current={page}
          onChange={onChange}
          total={40}
          isRedBackground={true}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-8 mx-4 md:mx-8 mt-4 gap-y-4">
        {data &&
          data?.data.map((category: any, index: number) => (
            <div key={index} className=" ">
              <Image
                src={"/img/artist.jpg"}
                alt="artist image"
                width={150}
                height={100}
                loading="lazy"
                className="rounded-xl w-full"
              />
              <div className="mt-2">
                <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">
                  {category?.category_name}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
