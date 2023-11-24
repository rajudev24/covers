import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="mx-4 my-4">
      <div className="md:flex justify-between items-center">
        <div className="w-2/4">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p>
            Welcome to the Standups7 Community Association. We are a diverse
            alliance of businesses from all ends of the Standups7 experience,
            from manufacturers and importers of molasses, pipes and accessories
            to distributors, Hookah lounges and Hookah/shisha retail stores.{" "}
            <br /> <br /> If you are a Standup business, please join us and help
            us defend and protect your business, our culture and community.{" "}
            <br /> <br /> If you are an interested member of the public,
            welcome. Please enjoy learning about Hookah and its unique culture
            and practice.
          </p>
          <button className="bg-primary p-2 px-4 text-white rounded-xl mt-4">
            Read More
          </button>
        </div>
        <div>
          <Image
            src={"/img/about-us.png"}
            alt="artist image"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="md:flex justify-between items-center my-8">
        <div>
          <Image
            src={"/img/about-us-1.png"}
            alt="About us"
            width={350}
            height={350}
            loading="lazy"
            className="rounded-xl"
          />
        </div>
        <div className="w-2/4 text-center">
          <h1 className="text-4xl font-bold mb-2">Standups7 Association</h1>
          <p>
            Welcome to the Standups7 Community Association. We are a diverse
            alliance of businesses from all ends of the Standups7 experience,
            from manufacturers and importers of molasses, pipes and accessories
            to distributors, Hookah lounges and Hookah/shisha retail stores.
          </p>
          <button className="bg-primary p-2 px-4 text-white rounded-xl mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
