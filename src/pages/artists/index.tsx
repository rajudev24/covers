import { useState } from "react";
import dynamic from "next/dynamic";
const FilterBar = dynamic(() => import("../../components/Filters/Filter"));
const AllArtists = dynamic(
  () => import("../../components/UI/ArtistDetails/AllArtists")
);
const PhoneFilter = dynamic(
  () => import("../../components/Filters/PhoneFilter")
);
import useMobileDetection from "../../utils/phoneSizeDetect";
import { LuSettings2 } from "react-icons/lu";

export default function ArtistsPage() {
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [dateFilter, setDateFilter] = useState(null);
  const [viewOption, setViewOption] = useState<string>("list");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile = useMobileDetection();

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
    <div className="m-4 max-sm:m-2">
      <div className="flex justify-between my-4 mx-2">
        <h1 className="text-2xl font-semibold">All Artists</h1>
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
      <AllArtists />
      {isModalOpen ? (
        <PhoneFilter
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </div>
  );
}
