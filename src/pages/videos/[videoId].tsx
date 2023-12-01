import ArtistProfile from "../../components/UI/VideoDetails/ArtistProfile";
import MoreArtists from "../../components/UI/VideoDetails/MoreArtists";
import Playlist from "../../components/UI/VideoDetails/Playlist";
import RecomendedArtists from "../../components/UI/VideoDetails/RecomendedArtists";
import SubscribeFrom from "../../components/UI/VideoDetails/SubscribeFrom";
import VideoPlayer from "../../components/UI/VideoDetails/VideoPlayer";

export default function VideoDetails() {
  return (
    <div>
      <div className="md:flex  justify-between">
        <VideoPlayer />
        <ArtistProfile />
      </div>
      <div className="md:flex justify-between">
        <MoreArtists />
        <Playlist />
      </div>
      <RecomendedArtists />
      <SubscribeFrom />
    </div>
  );
}
