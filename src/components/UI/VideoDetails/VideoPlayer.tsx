import { GrFormView } from "react-icons/gr";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Button } from "antd";
import dayjs from "dayjs";
import HTMLDescription from "../../Description/HTMLDescription";
import MoreArtists from "../../../components/UI/VideoDetails/MoreArtists";
import YoutubeVideoPlayer from "../../YoutubePlayer/YoutubePlayer";
import { useRef } from "react";

export default function VideoPlayer({ data }) {
  const videoPublishDate = dayjs(data[0]?.youtube_publish_date).format(
    "MMMM D, YYYY"
  );
  let categoryName = JSON.parse(data[0]?.categories);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: `https://www.youtube.com/watch?v=${data[0]?.youtube_link}`,
        type: "video/youtube",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };
  return (
    <div className="w-3/4 p-2 max-sm:w-full">
      <div>
        <YoutubeVideoPlayer
          options={videoJsOptions}
          onReady={handlePlayerReady}
        />
        <div className=" mt-4 ">
          <div>
            <h1 className="text-xl font-semibold">{data[0]?.title} </h1>
          </div>
          <div className="flex justify-between items-center">
            {categoryName ? (
              <h4 className="text-xl font-bold">
                {categoryName[0]?.category_name}
              </h4>
            ) : null}
            <div className="flex text-white py-2 md:-mt-1">
              <span className="flex items-center mr-2 bg-[#AD241B] rounded-full px-6  ">
                {" "}
                <GrFormView size={30} className="-ml-2 mr-1" /> 400k
              </span>
              <span className="flex items-center mr-2 bg-[#AD241B] rounded-full px-5">
                {" "}
                <AiFillLike size={24} className="-ml-2 mr-1" /> 400k
              </span>
            </div>
          </div>
          <span> Published on {videoPublishDate}</span>
        </div>
        <br />
        <div className="  text-justify">
          <HTMLDescription description={data[0]?.youtube_description} />
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
        <MoreArtists />
      </div>
    </div>
  );
}
