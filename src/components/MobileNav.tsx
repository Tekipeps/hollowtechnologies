import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";

type NavLinkProps = { label: string; pageSection: string };

export default function MobileNav() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const navLinks: NavLinkProps[] = [
    { label: "Services", pageSection: "services" },
    { label: "About", pageSection: "about" },
    { label: "Process", pageSection: "process" },
    { label: "Pricing", pageSection: "pricing" },
  ];

  return (
    <div className="flex flex-col justify-start items-start sm:hidden">
      <button type="button" onClick={() => setShowMenu(true)}>
        <Image
          alt={"menu"}
          src={menu.src}
          height={menu.height}
          width={menu.width * 1.4}
        />
      </button>

      <div
        id={"mobile-menu"}
        className={`flex sm:hidden flex-col w-full justify-start items-start fixed left-0 right-0 top-0 z-50 p-7 bg-gradient-to-b to-[#051D61] via-[#030B40] from-[#000000] ${
          showMenu ? "visible opacity-100 h-screen" : "invisible opacity-0 h-0"
        }`}
      >
        <div className="flex justify-end items-center px-3 py-5 w-full h-fit">
          <button type="button" onClick={() => setShowMenu(false)}>
            <Image
              alt={"close"}
              src={close.src}
              height={close.height}
              width={close.width * 1.2}
            />
          </button>
        </div>

        <div className="flex flex-col flex-grow gap-4 justify-end items-start w-full">
          <ul className="flex flex-col gap-4 justify-start items-start">
            {navLinks.map(({ label, pageSection }: NavLinkProps) => {
              return (
                <button
                  type="button"
                  key={label}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMenu(false);
                    router.push(`/#${pageSection}`);
                  }}
                  className="text-[#B0BACF] font-medium text-[40px]"
                >
                  {label}
                </button>
              );
            })}
          </ul>

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowMenu(false);
              router.push("/#contact");
            }}
            className="flex text-[#051C60] my-14 text-base font-medium tracking-wide px-4 py-3.5 border border-white/30 bg-gradient-to-tr from-[#B2CAFD] to-[#768DCF] hover:bg-gradient-to-tr hover:scale-105 active:scale-95 rounded"
          >
            <span className="px-[25px]">Get in touch</span>
          </button>
        </div>
      </div>
    </div>
  );
}
