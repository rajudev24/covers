import { Pagination } from "antd";

export const CustomPagination = ({ current, onChange, total }) => {
  const itemRender = (current, type, originalElement) => {
    if (type === "page") {
      return <span className="text-xl">•</span>;
    }
    return originalElement;
  };

  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={total}
      itemRender={itemRender}
      itemActiveBgDisabled="black"
    />
  );
};
