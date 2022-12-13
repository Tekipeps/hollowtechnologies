import Link from "next/link";

type Props = { label: string; pageSection: string };

export default function NavLink({ label, pageSection }: Props) {
  return (
    <li id="nav-link">
      <Link href={`/#${pageSection}`}>
        <span className="text-base font-normal tracking-wide text-white">
          {label}
          <div id="nav-underline" className="h-px bg-white"></div>
        </span>
      </Link>
    </li>
  );
}
