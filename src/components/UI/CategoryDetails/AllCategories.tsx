import CategoryAndArtistCard from "../../Core/CategoryAndArtistCard";

export default function AllCategories() {
  return (
    <div className="grid grid-cols-4 2xl:grid-cols-6 max-sm:grid-cols-2 my-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <CategoryAndArtistCard
          key={index}
          url={"/img/artist.jpg"}
          altTag="artist image"
          width={200}
          height={200}
          title={"THDST-S1EP1"}
        />
      ))}
    </div>
  );
}
