import Image from "next/image";

import hero from "../assets/images/hero.svg";
import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";

export default function Hero() {
  return (
    <div
      className={`w-[${hero.width}px] flex justify-center items-start h-[${hero.height}px] text-white bg-[#06216F] relative`}
    >
      <Image
        src={hero.src}
        width={hero.width}
        height={hero.height}
        alt="hero background image"
      />

      <div className="absolute flex flex-col items-center justify-start w-full h-full gap-4 pt-56">
        <Heading
          light
          center
          length={830}
          text={"Building Performing Products for Digital Businesses"}
        />

        <HeadingDescription
          light
          center
          length={830}
          text={
            "Our creative process from concept and design to development and production is influenced by technology transforming what's possible for your digital products."
          }
        />
      </div>
    </div>
  );
}
