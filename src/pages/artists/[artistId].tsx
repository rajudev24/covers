import ArtistProfile from "../../components/UI/ArtistDetails/ArtistProfile";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Tags from "../../components/Tags/Tags";
import Playlist from "../../components/Playlist/Playlist";
import TrendingArtists from "../../components/UI/Home/TrendingArtists";
import CategorySection from "../../components/Core/CategorySection";
import ArtistWeek from "../../components/UI/ArtistDetails/ArtistWeek";

export default function ArtistDetails({ artistDetails }) {
  return (
    <>
      <div className="md:flex m-4 justify-between items-center">
        <div className="md:w-3/4 md:mr-2">
          <ArtistProfile />
        </div>
        <div>
          <SocialMedia />
          <Tags />
        </div>
      </div>
      <Playlist />
      <CategorySection sectionTitle={"Popular Videos of Artist Name"} />
      <ArtistWeek />
      <TrendingArtists />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const artistDetails = await fetch(
    `https://api.covers7.com/api/artist-playlist?artist_id=${params?.artistId}&pageNo=1&itemPerPage=1`
  );
  const artistsData = await artistDetails.json();
  return {
    props: {
      artistDetails: artistsData,
    },
  };
};
