import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="border-2 rounded-xl border-slate-800 p-4 max-sm:mt-4">
      <span className="text-lg font-semibold">Share</span>
      <div className="flex justify-between mt-2">
        <Image src={"/img/fb.png"} width={30} height={30} alt="fb icon" />
        <Image src={"/img/youtube.png"} width={30} height={30} alt="fb icon" />
        <Image src={"/img/linkdien.png"} width={30} height={30} alt="fb icon" />
        <Image src={"/img/twitter.png"} width={30} height={30} alt="fb icon" />
        <Image
          src={"/img/instagram.png"}
          width={30}
          height={30}
          alt="fb icon"
        />
        <Image src={"/img/link.png"} width={30} height={30} alt="fb icon" />
      </div>
    </div>
  );
}
