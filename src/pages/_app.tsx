import HomeLayout from "../components/Layouts/HomeLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
