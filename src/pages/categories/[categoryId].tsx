import { useEffect, useState } from "react";
import CategoryBanner from "../../components/UI/CategoryDetails/CategoryBanner";
import TopVideos from "../../components/UI/CategoryDetails/TopVideos";
import VideoTable from "../../components/UI/CategoryDetails/VideoTable";
import VideoPlaylist from "../../components/UI/CategoryDetails/VideoPlaylist";

export default function CategoryDetails() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("/AllVideos.json")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(videos);
  return (
    <div>
      <CategoryBanner />
      <div className="md:flex justify-between">
        <div className="">
          <TopVideos videos={videos} />
          <VideoTable videos={videos} />
        </div>
        <VideoPlaylist videos={videos} />
      </div>
    </div>
  );
}
