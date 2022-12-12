import Image from "next/image";

import logo from "../assets/images/logo.svg";

export default function Logo() {
  console.log(logo);
  return (
    <div className="border">
      <Image
        height={48}
        width={48.7}
        src={logo.src}
        alt="hollow technology logo"
      />
    </div>
  );
}
