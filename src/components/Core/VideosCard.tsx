import Image from "next/image";

interface IProps {
  key: number;
  url: string;
  altTag: string;
  width: number;
  height: number;
  category: string;
  title: string;
  description: string;
}

export default function VideosCard({
  key,
  url,
  altTag,
  width,
  height,
  category,
  title,
  description,
}: IProps) {
  return (
    <div
      key={key}
      className="lg:flex border border-slate-950 rounded-xl p-2 mb-4 md:mb-0"
    >
      <div className="relative ">
        <Image
          src={url}
          alt={altTag}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-xl "
        />
        <div className="flex justify-center">
          <h4 className="absolute top-0 bg-primary text-white p-1 rounded-lg">
            {category}
          </h4>
        </div>
      </div>
      <div className="ml-2">
        <h1 className="text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h1>
        <span className="text-primary">2018 1hr 2min</span>
        {/* <p className="text-primary hidden md:block">{description}</p> */}
        <p className="text-primary">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a ....
        </p>
      </div>
    </div>
  );
}
