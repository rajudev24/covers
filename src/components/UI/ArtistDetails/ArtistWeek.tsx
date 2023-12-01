import Image from "next/image";

export default function ArtistWeek() {
  return (
    <div className="my-8 mx-4 md:mx-20">
      <h1 className="text-3xl font-bold mb-4">Artist of the Week</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={730}
          height={40}
          loading="lazy"
          className="rounded-xl"
        />
        <Image
          src={"/img/artist.jpg"}
          alt="artist image"
          width={335}
          height={200}
          loading="lazy"
          className="rounded-xl "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 justify-items-center">
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={350}
          height={300}
          loading="lazy"
          className="rounded-xl sm:w-full"
        />
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={350}
          height={300}
          loading="lazy"
          className="rounded-xl sm:w-full"
        />
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={350}
          height={300}
          loading="lazy"
          className="rounded-xl sm:w-full"
        />
      </div>
    </div>
  );
}
