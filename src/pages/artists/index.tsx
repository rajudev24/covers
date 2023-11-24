import { useState } from "react";
import FilterBar from "../../components/Filters/Filter";
import AllArtists from "../../components/UI/ArtistDetails/AllArtists";
import useMobileDetection from "../../utils/phoneSizeDetect";
import { Button } from "antd";
import PhoneFilter from "../../components/Filters/PhoneFilter";

export default function ArtistsPage() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [dateFilter, setDateFilter] = useState(null);
  const [viewOption, setViewOption] = useState("list");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMobileDetection();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleDateFilterChange = (filter) => {
    setDateFilter(filter);
  };

  const handleViewChange = (option) => {
    setViewOption(option);
  };
  return (
    <div className="m-4 max-sm:m-2">
      <div>
        <h1 className="text-2xl font-semibold">All Categories</h1>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
          <PhoneFilter
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Button> */}
      </div>
      <FilterBar
        onSortChange={handleSortChange}
        onDateFilterChange={handleDateFilterChange}
        onViewChange={handleViewChange}
        isMobile={isMobile}
      />
      <AllArtists />
    </div>
  );
}
