import { useState } from "react";
import FilterBar from "../../components/Filters/Filter";
import AllCategories from "../../components/UI/CategoryDetails/AllCategories";
import useMobileDetection from "../../utils/phoneSizeDetect";
import { LuSettings2 } from "react-icons/lu";
import PhoneFilter from "../../components/Filters/PhoneFilter";

export default function Categories() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [dateFilter, setDateFilter] = useState(null);
  const [viewOption, setViewOption] = useState("list");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">All Categories</h1>
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
      <AllCategories />
      {isModalOpen ? (
        <PhoneFilter
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </div>
  );
}
