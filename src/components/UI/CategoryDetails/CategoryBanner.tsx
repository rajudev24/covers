import React from "react";
import { Button } from "antd";

export default function CategoryBanner() {
  return (
    <div className="w-full bg-gradient-to-tl from-violet-500 to-violet-800 rounded-md p-2 text-white py-8">
      <h1 className="text-xl font-semibold mt-4">
        {" "}
        This is Category Banner, Here we wil show something about the Category!!{" "}
      </h1>
      <h1 className="">
        {" "}
        This is Category Banner, Here we wil show something about the Category!!{" "}
      </h1>
      <Button className="bg-white mr-4 mt-4">Default</Button>
      <Button className="text-white">Default</Button>
    </div>
  );
}
