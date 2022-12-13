import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../assets/images/logo.svg";

export default function Logo() {
  const router = useRouter();

  return (
    <button
      type={"button"}
      className={"outline-0"}
      onClick={() => router.push("/")}
    >
      <Image
        height={48}
        width={48.7}
        src={logo.src}
        alt={"hollow technology logo"}
      />
    </button>
  );
}
