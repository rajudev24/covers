import Image from "next/image";
interface IProps {
  key: number;
  url: string;
  altTag: string;
  width: number;
  height: number;
  title: string;
}
export default function CategoryAndArtistCard({
  key,
  url,
  altTag,
  width,
  height,
  title,
}: IProps) {
  return (
    <div
      key={key}
      className="border border-slate-950 p-2 m-2 rounded-xl text-center flex justify-center "
    >
      <div>
        <Image
          src={url}
          alt={altTag}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-xl"
        />
        <h1 className="text-lg font-semibold">{title} </h1>
      </div>
    </div>
  );
}
