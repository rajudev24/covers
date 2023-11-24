import ArtistBanner from "../../components/UI/ArtistDetails/ArtistBanner";
import TopPlaylist from "../../components/UI/ArtistDetails/TopPlaylist";
import ArtistTable from "../../components/UI/ArtistDetails/ArtistTable";
import RecentArtist from "../../components/UI/ArtistDetails/RecentArtist";

export default function ArtistDetails({ artistDetails }) {
  return (
    <>
      <ArtistBanner />
      <div className="md:flex justify-between">
        <div>
          <TopPlaylist artistDetails={artistDetails} />
          <ArtistTable />
        </div>
        <RecentArtist />
      </div>
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
