import Image from "next/image";

interface IProps {
  url: string;
  altTag: string;
  width: number;
  height: number;
  title: string;
}

export default function CategoryAndArtistCard({
  url,
  altTag,
  width,
  height,
  title,
}: IProps) {
  return (
    <div className="border border-slate-950 p-3 m-2 rounded-xl text-center">
      <div className="max-w-xs mx-auto">
        <Image
          src={url}
          alt={altTag}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-xl w-full"
        />
        <h1 className="text-base md:text-lg font-semibold mt-2">{title}</h1>
      </div>
    </div>
  );
}
