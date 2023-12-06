import Image from "next/image";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className=" relative">
      <Image
        src={"/img/404.png"}
        alt="About us"
        width={1200}
        height={900}
        loading="lazy"
        className="rounded-xl"
      />
      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push("/")}
          className="absolute bottom-24 py-2 px-8 border-2 border-gray-950 font-semibold border-b-primary border-r-primary border-b-4 border-r-4"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
