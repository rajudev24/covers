import Head from "next/head";
import Banner from "../components/UI/Home/Banner";
import RecentWatched from "../components/UI/Home/RecentWatched";
import TrendingVideos from "../components/UI/Home/TrendingVideos";
import MoreArtists from "../components/UI/Home/MoreArtists";
import PopularVideos from "../components/UI/Home/PopularVideos";
import ArtistWeek from "../components/UI/Home/ArtistWeek";
import TopCategory from "../components/UI/Home/TopCategory";
import CategoryWeek from "../components/UI/Home/CategoryWeek";
import TrendingArtists from "../components/UI/Home/TrendingArtists";

const apiBaseUrl = process.env.API_BASE_URL;
export default function HomePage({ topArtist, AllCategories, AllVideo }) {
  return (
    <>
      <Head>
        <title> This is Home page </title>
        <meta name="description" content="This is viewer home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <RecentWatched />
      <TrendingVideos />
      <MoreArtists />
      <PopularVideos />
      <ArtistWeek />
      <TopCategory />
      <CategoryWeek />
      <TrendingArtists />
    </>
  );
}

export const getServerSideProps = async () => {
  const artistRes = await fetch(
    `${apiBaseUrl}/show-all-artists?pageNo=1&itemPerPage=1`
  );
  const artistData = await artistRes.json();
  const category = await fetch(
    `${apiBaseUrl}/get-categories?pageNo=1&itemPerPage=1`
  );
  const categoryData = await category.json();
  const videos = await fetch(
    `${apiBaseUrl}/get-all-videos?pageSize=1&pageNo=1`
  );
  const videosData = await videos.json();
  return {
    props: {
      topArtist: artistData,
      AllCategories: categoryData,
      AllVideo: videosData,
    },
  };
};
