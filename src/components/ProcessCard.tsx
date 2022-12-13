import Iconify from "./Iconify";

type Props = {
  image?: any;
  desc: string;
  label: string;
  icon?: JSX.Element;
};

export default function ProcessCard({ icon, image, desc, label }: Props) {
  return (
    <div className="rounded-[9.28px] flex flex-col gap-3 justify-center items-center w-full py-[22px] px-[24px] border border-slate-300 bg-gradient-to-b from-[#D9DEE8] to-[#EAEFF9]/70">
      <Iconify icon={icon} image={image} />

      <h3 className="w-full text-base font-semibold bg-clip-text bg-gradient-to-b from-[#072783] to-[#051B5A] text-transparent text-center">
        {label}
      </h3>

      <p className="w-full text-sm font-normal text-center text-slate-500">
        {desc}
      </p>
    </div>
  );
}
