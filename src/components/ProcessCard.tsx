import Iconify from "./Iconify";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = {
  image?: any;
  desc: string;
  label: string;
  icon?: JSX.Element;
};

export default function ProcessCard({ icon, image, desc, label }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
      }}
      initial="hidden"
      animate={controls}
      className="rounded-[9.28px] flex flex-col gap-3 justify-center items-center w-full py-[22px] px-[24px] border border-slate-300 bg-gradient-to-b from-[#D9DEE8] to-[#EAEFF9]/70"
    >
      <Iconify icon={icon} image={image} />

      <h3 className="w-full text-base font-semibold bg-clip-text bg-gradient-to-b from-[#072783] to-[#051B5A] text-transparent text-center">
        {label}
      </h3>

      <p className="w-full text-sm font-normal text-center text-slate-500">
        {desc}
      </p>
    </motion.div>
  );
}
