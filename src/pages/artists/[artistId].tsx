import dynamic from "next/dynamic";
const ArtistProfile = dynamic(
  () => import("../../components/UI/ArtistDetails/ArtistProfile")
);
const SocialMedia = dynamic(
  () => import("../../components/SocialMedia/SocialMedia")
);
const Tags = dynamic(() => import("../../components/Tags/Tags"));
const Playlist = dynamic(() => import("../../components/Playlist/Playlist"));
const TrendingArtists = dynamic(
  () => import("../../components/UI/Home/TrendingArtists")
);
const CategorySection = dynamic(
  () => import("../../components/Core/CategorySection")
);
const ArtistWeek = dynamic(
  () => import("../../components/UI/ArtistDetails/ArtistWeek")
);

export default function ArtistDetails({ artistDetails }) {
  return (
    <>
      <div className="lg:flex m-4 justify-between items-center ">
        <div className="w-full lg:w-3/4 md:mr-2 ">
          <ArtistProfile />
        </div>
        <div className="">
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
