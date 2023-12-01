import { Modal } from "antd";
import { Checkbox, Input } from "antd";
const { Search } = Input;
import React, { useState } from "react";
import { Tree } from "antd";
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

export default function DesktopFIlter() {
  const [showLine, setShowLine] = useState<boolean>(true);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean | React.ReactNode>(
    false
  );

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
  return (
    <div>
      <div className="bg-primary rounded-xl p-2">
        <h1 className="text-xl text-white ">By Category</h1>
        <Checkbox.Group
          onChange={onChange}
          defaultValue={[]}
          className="flex flex-col "
        >
          {options.map((option) => (
            <Checkbox
              style={{
                color: "white",
                fontSize: "14px",
                padding: "2px",
              }}
              key={option}
              value={option}
            >
              {option}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div className="bg-primary p-2 rounded-xl mt-2">
        <div className="my-4">
          <h1 className="text-xl text-white">Editor Picks</h1>
          <Search
            placeholder="Search title"
            onSearch={onSearch}
            style={{
              width: 220,
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
              fontSize: "15px",
              border: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
