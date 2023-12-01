import { Button } from "antd";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Banner() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    focusOnSelect: true,
    arrows: false,
  };
  return (
    <div className="flex justify-between items-center mx-8">
      <div className="w-2/4">
        <div>
          <h1 className="text-3xl font-bold"> ALONE IN SPACE</h1>
          <h2 className="text-xl font-semibold capitalize py-1">
            Walk dasney pictures (2023)
          </h2>
          <p>16+ | 215 min | Drama | Family</p>
          <p className=" py-3 text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Porttitor et tempor sit
            dolor pharetra nunc nec. Amet consectetur volutpat fringilla
            pellentesque sit erat.
          </p>
        </div>
        <div className="mt-12 flex items-center">
          <span> IMDb </span>
          <AiFillStar className="mx-2 text-amber-300" />
          <span>
            {" "}
            7.8/<span className="text-slate-400">10</span>{" "}
          </span>
        </div>
        <div className="mt-2">
          <Button className="font-semibold" type="primary" danger>
            Watch Now
          </Button>
        </div>
      </div>
      <div className="w-1/2 mr-8">
        <Slider {...settings}>
          <div>
            <Image
              src={"/img/artist-p.png"}
              alt="artist image"
              width={350}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>
          <div>
            <Image
              src={"/img/login.png"}
              alt="artist image"
              width={350}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>
          <div>
            <Image
              src={"/img/artist.jpg"}
              alt="artist image"
              width={370}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>

          <div>
            <Image
              src={"/img/about-us-1.png"}
              alt="artist image"
              width={250}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>
          <div>
            <Image
              src={"/img/singer-2.jpg"}
              alt="artist image"
              width={250}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>
          <div>
            <Image
              src={"/img/singer.jpg"}
              alt="artist image"
              width={250}
              height={180}
              loading="lazy"
              className="rounded-xl "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
