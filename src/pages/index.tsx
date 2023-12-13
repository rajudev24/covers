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

export default function HomePage() {
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
