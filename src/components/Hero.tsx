import Image from "next/image";

import hero from "../assets/images/hero.svg";
import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";

export default function Hero() {
  return (
    <div
      className={`w-full flex justify-center h-[35rem] items-start sm:h-[${hero.height}px] text-white bg-[#06216F] relative`}
    >
      <div
        className={`max-w-[1440px] h-full sm:h-[${hero.height}px] w-full flex justify-center items-end sm:items-start relative`}
      >
        <Image
          src={hero.src}
          width={hero.width}
          height={hero.height}
          alt="hero background image"
          className="w-full"
        />

        <div className="flex absolute flex-col gap-4 justify-start items-center px-5 pt-40 w-full h-full sm:pt-56">
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
