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
      className="mt-2 md:flex text-left border-2 p-2 border-gray-500 rounded-xl"
    >
      <div className="md:w-2/3 md:mr-4">
        <Image
          src={url}
          alt={altTag}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-xl w-full"
        />
      </div>

      <div className="md:w-2/3 mt-2">
        <span className="text-xs md:text-sm font-semibold bg-primary text-white p-1  px-3 rounded-2xl whitespace-nowrap">
          {categoryTitle}
        </span>
        <h4 className="text-base md:text-lg font-bold mt-2 whitespace-nowrap">
          {artistName}
        </h4>
      </div>
    </div>
  );
}
