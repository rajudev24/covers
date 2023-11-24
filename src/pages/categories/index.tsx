import { useState } from "react";
import FilterBar from "../../components/Filters/Filter";
import AllCategories from "../../components/UI/CategoryDetails/AllCategories";
import useMobileDetection from "../../utils/phoneSizeDetect";

export default function Categories() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [dateFilter, setDateFilter] = useState(null);
  const [viewOption, setViewOption] = useState("list");
  const isMobile = useMobileDetection();

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
      </div>
      <FilterBar
        onSortChange={handleSortChange}
        onDateFilterChange={handleDateFilterChange}
        onViewChange={handleViewChange}
        isMobile={isMobile}
      />
      <AllCategories />
    </div>
  );
}
