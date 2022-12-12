import Image from "next/image";

import hero from "../assets/images/hero.svg";

export default function Hero() {
  // const bg = {
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundImage: `url(${bgImage.src})`,
  // };

  return (
    <div className="w-full flex items-start md:h-[900px] text-white bg-[#06216F] relative">
      <Image
        src={hero.src}
        width={hero.width}
        height={hero.height}
        alt="hero background image"
      />
      {/* <div style={bg} className="w-full h-full border border-orange-600"></div> */}
    </div>
  );
}
