import React from "react";
import { Avatar, Card, Button } from "antd";
import Image from "next/image";

const { Meta } = Card;

export default function TopPlaylist({ artistDetails }) {
  // console.log(artistDetails.data)
  return (
    <div>
      <h1 className="font-bold text-xl ml-3 mt-3">Top Artists</h1>
      <div className="my-2 md:flex ">
        {artistDetails &&
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="mx-2 max-sm:my-3 ">
              <Card
                className="md:w-56"
                cover={
                  <Image
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    width={200}
                    height={200}
                  />
                }
              >
                <div className="-ml-4 -mt-3">
                  <h4 className="font-semibold">Sudeep Sharma</h4>
                  <h1 className="mt-2 -mb-4">This is Song title</h1>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
