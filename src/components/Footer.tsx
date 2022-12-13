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
    <footer className="bg-gradient-to-b sm:bg-gradient-to-r from-[#051D61] via-[#162E72] flex justify-center items-center to-[#051D61] pt-10 pb-20 sm:py-20 w-full text-white px-3 sm:px-10 md:px-20 lg:px-36">
      <div className="flex flex-col justify-start items-start md:items-center w-full max-w-[1100px]">
        <div className="flex flex-col gap-5 justify-start px-7 w-full xs:px-0 xs:gap-3 xs:items-center xs:flex-row">
          <Logo width={32.7} height={32} />
          <span className="text-[#B0BACF] font-medium text-base">
            Hollow Technologies
          </span>
        </div>

        <div className="max-w-[1067px] my-7 sm:mt-8 w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent h-px"></div>

        <div className="flex flex-col-reverse justify-between items-start px-5 w-full sm:flex-col sm:items-end md:flex-row xs:px-0">
          <div className="flex flex-col  gap-10 sm:gap-2 text-base font-normal text-[#B0BACF] justify-start items-start">
            <span className="max-w-[244px] w-full">
              Building Digital Products for Digital Businesses
            </span>

            <span className="max-w-[244px] w-full">info@hallowtech.com</span>
          </div>

          <ul className="flex flex-col gap-3 justify-center items-start mb-8 sm:gap-10 sm:items-center sm:flex-row sm:mb-0">
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
