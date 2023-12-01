import React from "react";
import { GrFormView } from "react-icons/gr";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Button } from "antd";
import "node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";

export default function VideoPlayer() {
  return (
    <div className="w-3/4 p-2 max-sm:w-full">
      <div>
        <Player
          poster="/img/artist.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
        <div className="md:flex justify-between mt-4 ">
          <div>
            <h1 className="text-xl font-semibold">Thunder Stunt</h1>
            <span>Published onn Junne 4, 2020</span>
          </div>
          <div className="flex text-white py-2 md:-mt-1">
            <span className="flex items-center mr-2 bg-[#AD241B] rounded-full px-6  ">
              {" "}
              <GrFormView size={30} className="-ml-2 mr-1" /> 400k
            </span>
            <span className="flex items-center mr-2 bg-[#AD241B] rounded-full px-5">
              {" "}
              <AiFillLike size={24} className="-ml-2 mr-1" /> 400k
            </span>
            <span className="flex items-center mr-2 bg-[#AD241B] rounded-full px-5">
              {" "}
              <AiFillDislike size={24} className="-ml-2 mr-1" /> 400k
            </span>
          </div>
        </div>
        <br />
        <div className="  text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <br />
          <Button
            style={{
              backgroundColor: "#AD241B",
              color: "white",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="w-full "
          >
            {" "}
            Read More <IoIosArrowDropdownCircle size={20} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
