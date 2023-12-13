import Head from "next/head";
type IProps = {
  seoTitle: string;
  seoDescription: string;
};
export default function SEO({ seoTitle, seoDescription }: IProps) {
  return (
    <Head>
      <title> {seoTitle} </title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
