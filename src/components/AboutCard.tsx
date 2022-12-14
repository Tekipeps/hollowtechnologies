import Iconify from "./Iconify";
import { motion } from "framer-motion";

type Props = {
  image?: any;
  desc: string;
  label: string;
  icon?: JSX.Element;
  delay: number;
  variant: "A" | "B";
};

export default function AboutCard({
  delay,
  variant,
  icon,
  image,
  desc,
  label,
}: Props) {
  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  return (
    <motion.div
      variants={variant === "A" ? itemA : itemB}
      className={`rounded-[9.28px] flex flex-col gap-3 justify-start items-start w-full py-[22px] px-[24px] border border-slate-300 bg-gradient-to-b from-[#D9DEE8] to-[#EAEFF9]/70 ${
        delay % 2 === 0 ? "left-20" : "left-7"
      }`}
    >
      <Iconify icon={icon} image={image} />

      <h3 className="w-full text-base font-semibold bg-clip-text bg-gradient-to-b from-[#072783] to-[#051B5A] text-transparent">
        {label}
      </h3>

      <p className="w-full text-sm font-normal text-slate-500">{desc}</p>
    </motion.div>
  );
}
