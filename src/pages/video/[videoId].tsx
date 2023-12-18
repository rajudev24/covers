import { useRouter } from "next/router";
import ArtistProfile from "../../components/UI/VideoDetails/ArtistProfile";
import MoreArtists from "../../components/UI/VideoDetails/MoreArtists";
import Playlist from "../../components/UI/VideoDetails/Playlist";
import RecomendedArtists from "../../components/UI/VideoDetails/RecomendedArtists";
import SubscribeFrom from "../../components/UI/VideoDetails/SubscribeFrom";
import VideoPlayer from "../../components/UI/VideoDetails/VideoPlayer";
import { useVideoQuery } from "../../redux/api/videoApi";
import Loading from "../../components/Loading/Loading";

export default function VideoDetails() {
  const router = useRouter();
  const slug = router?.query?.videoId as string;
  const videoId = slug?.match(/\d+$/)[0];
  const { data, isLoading } = useVideoQuery(videoId);
  console.log(data?.meta);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="md:flex  justify-between">
            <VideoPlayer data={data?.data} />
            <div>
              <ArtistProfile data={data?.data} />
              <Playlist />
            </div>
          </div>

          <RecomendedArtists />
          <SubscribeFrom />
        </>
      )}
    </div>
  );
}
