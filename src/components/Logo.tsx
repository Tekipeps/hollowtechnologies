import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../assets/images/logo.svg";

type Props = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: Props) {
  const router = useRouter();

  return (
    <button
      type={"button"}
      className={"outline-0"}
      onClick={() => router.push("/")}
    >
      <Image
        width={width}
        src={logo.src}
        height={height}
        alt={"hollow technology logo"}
      />
    </button>
  );
}
