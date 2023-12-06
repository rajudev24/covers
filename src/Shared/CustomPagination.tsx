import { Pagination } from "antd";
type IProps = {
  current: number;
  onChange: (number: number) => void;
  total: number;
  isRedBackground: boolean;
};
export const CustomPagination = ({
  current,
  onChange,
  total,
  isRedBackground,
}: IProps) => {
  const itemRender = (
    current: number,
    type: string,
    originalElement: string
  ) => {
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
      className={isRedBackground ? "red-pagination " : "black-pagination"}
    />
  );
};
