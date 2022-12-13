import Logo from "./Logo";
import NavLink from "../components/NavLink";
import { useRouter } from "next/router";

type NavLinkProps = { label: string; pageSection: string };

export default function Footer() {
  const router = useRouter();

  const navLinks: NavLinkProps[] = [
    { label: "Services", pageSection: "services" },
    { label: "About", pageSection: "about" },
    { label: "Process", pageSection: "process" },
    { label: "Pricing", pageSection: "pricing" },
    { label: "Contact us", pageSection: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#051D61] via-[#162E72] to-[#051D61] py-20 w-full text-white px-4 sm:px-10 md:px-20 lg:px-36">
      <div className="flex gap-3 justify-start items-center">
        <Logo width={32.7} height={32} />
        <span className="text-[#B0BACF] font-medium text-base">
          Hollow Technologies
        </span>
      </div>

      <div className="max-w-[1067px] mt-8 w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent h-px"></div>

      <div className="flex flex-col justify-between items-end mt-10 md:flex-row">
        <div className="flex flex-col gap-2 text-base font-normal text-[#B0BACF] justify-start items-start">
          <span className="max-w-[244px] w-full">
            Building Digital Products for Digital Businesses
          </span>

          <span className="max-w-[244px] w-full">info@hallowtech.com</span>
        </div>

        <div className="">
          <ul className="flex gap-10 justify-center items-center">
            {navLinks.map(({ label, pageSection }: NavLinkProps) => {
              return (
                <NavLink key={label} label={label} pageSection={pageSection} />
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
