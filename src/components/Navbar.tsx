import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="border absolute z-10 mt-5 flex justify-between items-center w-full max-w-[1132.7px] h-[84px]">
      <Logo />
    </nav>
  );
}
