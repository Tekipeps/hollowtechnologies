import Iconify from "./Iconify";
type Props = {
  image?: any;
  desc: string;
  label: string;
  icon?: JSX.Element;
  delay: number;
};
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ServiceCard({
  delay,
  icon,
  image,
  desc,
  label,
}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        show: {
          opacity: 1,
          scale: 1,
          translateX: 0,
          translateY: 0,
          transition: { duration: 0.5, delay: delay * 0.2 },
        },
        hidden: { opacity: 0, scale: 0, translateX: -50, translateY: -50 },
      }}
      initial="hidden"
      animate={controls}
      className="rounded-[9.28px] flex flex-col gap-4 justify-center items-center w-full py-[22px] px-[24px] border border-[#96AAE2]/20 bg-gradient-to-b from-[#051D61] to-[#0A2977]"
    >
      <Iconify icon={icon} image={image} />

      <h3 className="w-full text-base font-semibold bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#3D57A2] text-transparent text-center">
        {label}
      </h3>

      <p className="w-full text-sm font-normal text-center text-slate-400">
        {desc}
      </p>
    </motion.div>
  );
}
