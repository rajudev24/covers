import Image from "next/image";
import { useState } from "react";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/img/artist-p.png", "/img/login.png", "/img/artist.jpg"];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="">
      <div className=" relative mt-8">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`artist image ${index}`}
            width={250}
            height={180}
            loading="lazy"
            className={`rounded-xl ${index === currentIndex ? "" : "hidden"}`}
          />
        ))}
        <div className="absolute top-0 left-[85px] -mt-8">
          <button onClick={prevImage}>{"<"}</button>
          <Image
            src={images[currentIndex]}
            alt={`artist image ${currentIndex}`}
            width={320}
            height={180}
            loading="lazy"
            className="rounded-xl"
          />
          <button onClick={nextImage}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
