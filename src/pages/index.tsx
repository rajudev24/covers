import dynamic from "next/dynamic";
import Head from "next/head";

const Banner = dynamic(() => import("../components/UI/Home/Banner"));
const RecentWatched = dynamic(
  () => import("../components/UI/Home/RecentWatched")
);
const TrendingVideos = dynamic(
  () => import("../components/UI/Home/TrendingVideos")
);
const MoreArtists = dynamic(() => import("../components/UI/Home/MoreArtists"));
const PopularVideos = dynamic(
  () => import("../components/UI/Home/PopularVideos")
);
const ArtistWeek = dynamic(() => import("../components/UI/Home/ArtistWeek"));
const TopCategory = dynamic(() => import("../components/UI/Home/TopCategory"));
const CategoryWeek = dynamic(
  () => import("../components/UI/Home/CategoryWeek")
);
const TrendingArtists = dynamic(
  () => import("../components/UI/Home/TrendingArtists")
);

const apiBaseUrl = process.env.API_BASE_URL;

export default function HomePage({ topArtist, AllCategories, AllVideo }) {
  return (
    <>
      <Head>
        <title>This is Home page</title>
        <meta name="description" content="This is cover home page" />
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
  try {
    const artistRes = await fetch(
      `${apiBaseUrl}/show-all-artists?pageNo=1&itemPerPage=1`
    );
    const artistData = await artistRes.json();

    const categoryRes = await fetch(
      `${apiBaseUrl}/get-categories?pageNo=1&itemPerPage=1`
    );
    const categoryData = await categoryRes.json();

    const videosRes = await fetch(
      `${apiBaseUrl}/get-all-videos?pageSize=1&pageNo=1`
    );
    const videosData = await videosRes.json();

    return {
      props: {
        topArtist: artistData,
        AllCategories: categoryData,
        AllVideo: videosData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        topArtist: null,
        AllCategories: null,
        AllVideo: null,
      },
    };
  }
};
