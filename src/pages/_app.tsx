import dynamic from "next/dynamic";
const HomeLayout = dynamic(() => import("../components/Layouts/HomeLayout"));

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <div>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </div>
  );
}
