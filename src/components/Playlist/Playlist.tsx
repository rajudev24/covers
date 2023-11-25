import Image from "next/image";

export default function Playlist() {
  return (
    <div className=" h-96 border-2 p-4 rounded-xl border-slate-800 overflow-y-auto custom-scrollbar m-4">
      <div className="flex justify-between ">
        <h1 className="text-xl font-semibold">Playlist</h1>
        <h1>12 Videos</h1>
      </div>
      <div className="custom-scrollbar-content custom-scrollbar-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="mt-2 flex text-left items-center ">
            <Image
              src={"/img/artist.jpg"}
              alt="artist image"
              width={60}
              height={40}
              loading="lazy"
              className="rounded-xl"
            />
            <div className="ml-4">
              <h1 className="text-lg font-semibold">THDST-S1EP1</h1>
              <p className="text-slate-400">
                {" "}
                36min Published on June 29, 2020
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
