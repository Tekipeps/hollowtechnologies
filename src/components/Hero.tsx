import Image from "next/image";

import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";

import hero from "../assets/images/hero.svg";

export default function Hero() {
  return (
    <div
      className={`w-full flex justify-center min-h-[35rem] overflow-hidden items-end md:items-start md:h-screen text-white bg-[#06216F]`}
    >
      <div
        className={`max-w-[1440px] w-full min-h-[26rem] md:h-screen flex justify-center items-end relative`}
      >
        <Image
          src={hero.src}
          width={hero.width}
          height={hero.height}
          alt="hero background image"
          className="w-full border"
        />

        <div className="absolute flex flex-col items-center justify-start w-full h-full gap-4 px-5 pt-0 sm:pt-56">
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
    </div>
  );
}
