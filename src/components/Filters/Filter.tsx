import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
const FilterBar = ({
  onSortChange,
  onDateFilterChange,
  onViewChange,
  isMobile,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-primary text-white rounded-xl m-2 ">
      <div className="flex space-x-4 items-center ">
        Category Title
        <div className="flex flex-col ml-3">
          <button className="-mb-1" onClick={() => onSortChange("asc")}>
            <AiOutlineCaretUp />
          </button>
          <button onClick={() => onSortChange("desc")}>
            <AiOutlineCaretDown />
          </button>
        </div>
      </div>
      {isMobile ? null : (
        <div className="flex space-x-4">
          <button onClick={() => onDateFilterChange("today")}>Today</button>
          <button onClick={() => onDateFilterChange("week")}>This Week</button>
          <button onClick={() => onDateFilterChange("month")}>
            This Month
          </button>
        </div>
      )}

      <div className="flex space-x-4">
        <button onClick={() => onViewChange("list")}>
          <HiOutlineViewList size={24} />
        </button>
        <button onClick={() => onViewChange("grid")}>
          <IoGridOutline size={20} />
        </button>
        <button
          className="flex items-center "
          onClick={() => onViewChange("newest")}
        >
          <FaSortAmountDown size={20} /> <span className="ml-4">Newest</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
