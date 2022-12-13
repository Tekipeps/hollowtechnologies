import Link from "next/link";

type Props = { label: string; pageSection: string };

export default function NavLink({ label, pageSection }: Props) {
  return (
    <li id="nav-link">
      <Link href={`/#${pageSection}`}>
        <span className="text-base font-light tracking-wide text-[#B0BACF]">
          {label}
          <div id="nav-underline" className="h-px bg-[#B0BACF]"></div>
        </span>
      </Link>
    </li>
  );
}
