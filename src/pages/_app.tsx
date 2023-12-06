import dynamic from "next/dynamic";
const HomeLayout = dynamic(() => import("../components/Layouts/HomeLayout"));

import "../styles/globals.css";
import Providers from "../lib/Providers";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <div>
      <Providers>
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </Providers>
    </div>
  );
}
