import { Pagination } from "antd";

export const CustomPagination = ({
  current,
  onChange,
  total,
  isRedBackground,
}) => {
  const itemRender = (current, type, originalElement) => {
    if (type === "page") {
      return <span className="text-xl">•</span>;
    }
    return originalElement;
  };
  const customIconStyle = {
    fontSize: "12px",
    theme: "filled",
  };
  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={total}
      itemRender={itemRender}
      className={isRedBackground ? "red-pagination " : "black-pagination"}
    />
  );
};
