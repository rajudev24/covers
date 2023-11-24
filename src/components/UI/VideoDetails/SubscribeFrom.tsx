import { Button, Input } from "antd";
import Image from "next/image";
import React from "react";

export default function SubscribeFrom() {
  return (
    <div className="relative">
      <Image
        src={"/img/from.jpg"}
        alt="from image"
        width={1200}
        height={800}
        loading="lazy"
        style={{
          height: "300px",
        }}
      />
      <div className="text-center absolute top-1/3 md:left-1/3 ">
        <h1 className="text-lg font-bold">
          Become a member to get updated with latest videos
        </h1>
        <div className="md:flex max-sm:w-72 m-auto ">
          <Input
            style={{
              borderRadius: "20px",
            }}
            placeholder="Type your email here"
          />
          <Button
            style={{
              backgroundColor: "#AD241B",
              color: "white",
              height: "35px",
              borderRadius: "20px",
            }}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </div>
  );
}
