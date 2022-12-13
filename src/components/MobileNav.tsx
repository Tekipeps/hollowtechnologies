import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/router"

import NavLink from "../components/NavLink"

import menu  from "../assets/icons/menu.svg"
import close  from "../assets/icons/close.svg"

type NavLinkProps = { label: string; pageSection: string };

export default function MobileNav() {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const navLinks: NavLinkProps[] = [
    { label: "Services", pageSection: "services" },
    { label: "About", pageSection: "about" },
    { label: "Process", pageSection: "process" },
    { label: "Pricing", pageSection: "pricing" },
  ];

  return (
    <div className="flex sm:hidden flex-col justify-start items-start">
      <button type="button" onClick={() => setShowMenu(true)}>
        <Image src={menu.src} width={menu.width * 1.4} height={menu.height} alt="menu" />
      </button>

      <div className={`w-full flex-col justify-start items-start h-screen fixed left-0 right-0 top-0 z-50 p-7 bg-gradient-to-b to-[#051D61] via-[#030B40] from-[#000000] ${showMenu ? "flex" : "hidden"}`}>
        <div className="w-full flex justify-end items-center py-5 px-3 h-fit">
          <button type="button" onClick={() => setShowMenu(false)}>
            <Image src={close.src} width={close.width * 1.2} height={close.height} alt="close" />
          </button>
        </div>

        <div className="w-full flex-grow flex flex-col justify-end gap-4 items-start">
          <ul className="flex flex-col justify-start items-start gap-4">
            {navLinks.map(({ label, pageSection }: NavLinkProps) => {
              return (
                <button type="button" key={label} onClick={(e) => {
                  e.preventDefault()
                  setShowMenu(false)
                  router.push(`/#${pageSection}`)
                }}

                className="text-[#B0BACF] font-medium text-[40px]"
                >{label}</button>
              );
            })}
          </ul>

          <button
            onClick={(e) => {
              e.preventDefault()
              setShowMenu(false)
              router.push("/#contact")
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
