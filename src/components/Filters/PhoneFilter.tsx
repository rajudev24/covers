import { Modal } from "antd";
import { Checkbox, Input } from "antd";
const { Search } = Input;
import React, { useState } from "react";
import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Select, Switch, Tree } from "antd";
import type { DataNode } from "antd/es/tree";

const treeData: DataNode[] = [
  {
    title: "Most Viewed",
    key: "0-0",
    children: [
      {
        title: "Alone Here",
        key: "0-0-0",
      },
      {
        title: "Alien Invassion",
        key: "0-0-1",
      },
      {
        title: "Bullo The Cat",
        key: "0-0-2",
      },
      {
        title: "Cut That Hair!",
        key: "0-0-3",
      },
      {
        title: "Dragon Of The King",
        key: "0-0-4",
      },
    ],
  },
  {
    title: "parent 2",
    key: "0-1",
    children: [
      {
        title: "parent 2-0",
        key: "0-1-0",
      },
      {
        title: "parent 2-0",
        key: "0-2-0",
      },
      {
        title: "parent 2-0",
        key: "0-3-0",
      },
      {
        title: "parent 2-0",
        key: "0-4-0",
      },
    ],
  },
];
export default function PhoneFilter({ isModalOpen, setIsModalOpen }) {
  const [showLine, setShowLine] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean | React.ReactNode>(
    false
  );
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (checkedValues: string[]) => {
    console.log("Checked values:", checkedValues);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const options = [
    "3D",
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Document",
    "Drama",
    "Family",
  ];
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log("selected", selectedKeys, info);
  };

  const handleLeafIconChange = (value: "true" | "false" | "custom") => {
    if (value === "custom") {
      return setShowLeafIcon(<CheckOutlined />);
    }

    if (value === "true") {
      return setShowLeafIcon(true);
    }

    return setShowLeafIcon(false);
  };

  return (
    <div className="bg-primary">
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ maxHeight: "calc(80vh - 20px)", overflowY: "auto" }}
      >
        <div style={{ maxHeight: "100%" }}>
          <h1 className="text-xl">By Category</h1>
          <Checkbox.Group
            onChange={onChange}
            defaultValue={[]}
            className="flex flex-col "
          >
            {options.map((option) => (
              <Checkbox
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </Checkbox.Group>

          <div className="my-4">
            <h1 className="text-xl">Editor Picks</h1>
            <Search
              placeholder="Search title"
              onSearch={onSearch}
              style={{
                width: 250,
              }}
            />
          </div>

          <div>
            <Tree
              showLine={showLine ? { showLeafIcon } : false}
              defaultExpandedKeys={["0-0-0"]}
              onSelect={onSelect}
              treeData={treeData}
              style={{
                backgroundColor: "#AD241B",
                color: "white",
                fontSize: "20px",
                border: "0px",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
