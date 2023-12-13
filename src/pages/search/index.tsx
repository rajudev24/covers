import { useState } from "react";

import FilterBar from "../../components/Filters/Filter";
import useMobileDetection from "../../utils/phoneSizeDetect";
import VideosCard from "../../components/Core/VideosCard";
import { LuSettings2 } from "react-icons/lu";
import PhoneFilter from "../../components/Filters/PhoneFilter";
import { CustomPagination } from "../../Shared/CustomPagination";
import DesktopFIlter from "../../components/Filters/DesktopFIlter";

export default function SearchPage() {
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [dateFilter, setDateFilter] = useState(null);
  const [viewOption, setViewOption] = useState<string>("list");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile = useMobileDetection();
  const [current, setCurrent] = useState<number>(1);

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  const handleDateFilterChange = (filter) => {
    setDateFilter(filter);
  };

  const handleViewChange = (option: string) => {
    setViewOption(option);
  };

  return (
    <div className={`flex flex-col ${isMobile ? "m-2" : "m-4"} md:flex-row`}>
      {isMobile ? null : (
        <div className={`w-full md:w-60 mr-2`}>
          <h1 className="text-xl font-semibold mb-2">Filter Option</h1>
          <DesktopFIlter />
        </div>
      )}

      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold ">Videos</h1>
          {isMobile ? (
            <button onClick={showModal}>
              <LuSettings2 size={28} />
            </button>
          ) : null}
        </div>
        <FilterBar
          onSortChange={handleSortChange}
          onDateFilterChange={handleDateFilterChange}
          onViewChange={handleViewChange}
          isMobile={isMobile}
        />
        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <VideosCard
              key={index}
              url="/img/artist-p.png"
              altTag={"video"}
              width={400}
              height={250}
              category={"Action"}
              title={"Thunder Stunt"}
              description={"hello"}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <h1 className="mb-2 md:mb-0">Showing 10 from 10 Data</h1>
          <CustomPagination
            current={current}
            onChange={onChange}
            total={40}
            isRedBackground={true}
          />
        </div>
        {isModalOpen ? (
          <PhoneFilter
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </div>
    </div>
  );
}
