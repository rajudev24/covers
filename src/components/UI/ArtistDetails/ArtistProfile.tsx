import Image from "next/image";

export default function ArtistProfile() {
  return (
    <div className=" md:flex border-2 p-2 rounded-lg border-slate-950 ">
      <Image
        src={"/img/artist-p.png"}
        alt="artist image"
        width={350}
        height={280}
        loading="lazy"
        className="rounded-xl "
      />
      <div className="md:ml-4">
        <div className="md:flex justify-between">
          <h1 className="text-3xl font-bold max-sm:my-2">ARTIST NAME</h1>
          <div className="flex justify-between">
            <button className="bg-primary p-1 px-4 rounded-2xl text-white mr-4">
              Subscribe
            </button>
            <button className="bg-primary p-1 px-4 rounded-2xl text-white">
              + Follow
            </button>
          </div>
        </div>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="bg-primary p-1 px-4 rounded-2xl text-white w-full">
          Read More
        </button>
      </div>
    </div>
  );
}
