import Image from "next/image";

interface IProps {
  key: number;
  url: string;
  altTag: string;
  width: number;
  height: number;
  categoryTitle: string;
  artistName: string;
}

export default function VideoArtistCard({
  key,
  url,
  altTag,
  width,
  height,
  categoryTitle,
  artistName,
}: IProps) {
  return (
    <div key={key} className=" bg-white p-2 rounded-xl flex justify-center">
      <div>
        <Image
          src={url}
          alt={altTag}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-xl"
        />
        <div className="mt-2">
          <h1 className="text-lg font-bold text-black">{categoryTitle} </h1>
          <p className="text-primary font-bold text-sm"> {artistName} </p>
        </div>
      </div>
    </div>
  );
}
