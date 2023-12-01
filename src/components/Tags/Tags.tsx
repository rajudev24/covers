export default function Tags() {
  return (
    <div className="border-2 rounded-xl border-slate-800 mt-4 p-4">
      <span className="text-lg font-semibold ">Tags</span>
      <div className="grid grid-cols-3  gap-5 mt-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="mb-2 md:mb-0 lg:mb-0">
            <span className="bg-[#AD241B] p-1 rounded-lg text-white">
              #adventure
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
