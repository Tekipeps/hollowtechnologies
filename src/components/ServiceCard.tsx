import Iconify from "./Iconify";

type Props = {
  image?: any;
  desc: string;
  label: string;
  icon?: JSX.Element;
};

export default function ServiceCard({ icon, image, desc, label }: Props) {
  return (
    <div className="rounded-[9.28px] flex flex-col gap-4 justify-center items-center w-full py-[22px] px-[24px] border border-[#96AAE2]/20 bg-gradient-to-b from-[#051D61] to-[#0A2977]">
      <Iconify icon={icon} image={image} />

      <h3 className="w-full text-base font-semibold bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#3D57A2] text-transparent text-center">
        {label}
      </h3>

      <p className="w-full text-sm font-normal text-center text-slate-400">
        {desc}
      </p>
    </div>
  );
}
