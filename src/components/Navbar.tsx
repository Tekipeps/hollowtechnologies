import { useRouter } from "next/router";

import Logo from "./Logo";
import NavLink from "./NavLink";

type NavLinkProps = { label: string; pageSection: string };

export default function Navbar() {
  const router = useRouter();

  const navLinks: NavLinkProps[] = [
    { label: "Services", pageSection: "services" },
    { label: "About", pageSection: "about" },
    { label: "Process", pageSection: "process" },
    { label: "Pricing", pageSection: "pricing" },
  ];

  return (
    <nav className="absolute py-2 px-5 md:px-2.5 z-10 mt-5 flex justify-between items-center w-full max-w-[1132.7px] h-[84px]">
      <div className="p-2.5 flex gap-10 justify-center items-center">
        <Logo width={48.7} height={48} />

        <ul className="hidden sm:flex justify-center items-center gap-2.5">
          {navLinks.map(({ label, pageSection }: NavLinkProps) => {
            return (
              <NavLink key={label} label={label} pageSection={pageSection} />
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => router.push("/#contact")}
        className="text-[#051C60] text-base font-normal tracking-wide px-4 py-3.5 border border-white/30 bg-gradient-to-tr from-[#B2CAFD] to-[#768DCF] hover:bg-gradient-to-tr hover:scale-105 active:scale-95 rounded"
      >
        <span className="px-[25px]">Get in touch</span>
      </button>
    </nav>
  );
}
70;
