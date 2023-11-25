import Image from "next/image";

export default function ArtistWeek() {
  return (
    <div className="my-8 mx-20 max-sm:mx-4">
      <h1 className="text-3xl font-bold mb-4">Artist of the Week</h1>
      <div className="md:flex justify-between items-center">
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={600}
          height={40}
          loading="lazy"
          className="rounded-xl"
        />
        <Image
          src={"/img/artist.jpg"}
          alt="artist image"
          width={270}
          height={200}
          loading="lazy"
          className="rounded-xl"
        />
      </div>
      <div className="md:flex justify-between items-center mt-4">
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={280}
          height={300}
          loading="lazy"
          className="rounded-xl"
        />
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={280}
          height={300}
          loading="lazy"
          className="rounded-xl"
        />
        <Image
          src={"/img/singer.jpg"}
          alt="artist image"
          width={280}
          height={300}
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
