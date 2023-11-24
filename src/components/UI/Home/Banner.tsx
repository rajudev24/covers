import { Button } from "antd";
import { AiFillStar } from "react-icons/ai";
export default function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-black from-55% rounded-md p-4">
      <div className="text-white">
        <h1 className="text-3xl font-bold"> ALONE IN SPACE</h1>
        <h2 className="text-xl font-semibold capitalize py-1">
          Walk dasney pictures (2023)
        </h2>
        <p>16+ | 215 min | Drama | Family</p>
        <p className="md:w-80 py-3 text-slate-400">
          Lorem ipsum dolor sit amet consectetur. Porttitor et tempor sit dolor
          pharetra nunc nec. Amet consectetur volutpat fringilla pellentesque
          sit erat.
        </p>
      </div>
      <div className="mt-12 text-white flex items-center">
        <span> IMDb </span>
        <AiFillStar className="mx-2 text-amber-300" />
        <span>
          {" "}
          7.8/<span className="text-slate-400">10</span>{" "}
        </span>
      </div>
      <div className="mt-2">
        <Button className="font-semibold" type="primary" danger>
          Watch Now
        </Button>
      </div>
    </div>
  );
}
