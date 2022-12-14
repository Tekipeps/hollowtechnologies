import Image from "next/image";

import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";

import hero from "../assets/images/hero.svg";
import bgBlur from "../assets/images/bgBlur.svg";

export default function Hero() {
  const bg = {
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgBlur.src})`,
  };

  return (
    <div className="w-full flex justify-center h-screen 2xl:h-[50rem] overflow-hidden items-end md:items-start text-white bg-gradient-to-b from-[#051D61] to-[#0A2977]">
      <div
        style={bg}
        className="max-w-[1440px] w-full h-full flex justify-center items-end relative"
      >
        <Image
          src={hero.src}
          width={hero.width}
          alt={"hero image"}
          height={hero.height}
          className={"w-full"}
        />

        <div className="flex absolute flex-col gap-4 justify-start items-center px-5 pt-72 w-full h-full xs:pt-60">
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
