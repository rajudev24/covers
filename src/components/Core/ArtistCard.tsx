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
export default function ArtistCard({
  key,
  url,
  altTag,
  width,
  height,
  categoryTitle,
  artistName,
}: IProps) {
  return (
    <div
      key={key}
      className="mt-2 md:flex  text-left border-2 p-2 border-gray-500 rounded-xl"
    >
      <Image
        src={url}
        alt={altTag}
        width={width}
        height={height}
        loading="lazy"
        className="rounded-xl"
      />
      <div className="md:ml-4 mt-2">
        <span className="text-xs font-semibold bg-primary text-white p-1 rounded-2xl">
          {categoryTitle}
        </span>
        <h4 className="text-base font-bold mt-2"> {artistName} </h4>
      </div>
    </div>
  );
}
