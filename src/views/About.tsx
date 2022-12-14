import { IconSeo } from "@tabler/icons";

import Heading from "../components/Heading";
import Divider from "../components/Divider";
import AboutCard from "../components/AboutCard";
import HeadingDescription from "../components/HeadingDescription";

import user from "../assets/icons/user.svg";
import code from "../assets/icons/code.svg";
import design from "../assets/icons/design.svg";
import layers from "../assets/icons/layers.svg";
import checkUser from "../assets/icons/user-check.svg";
import gitPullRequest from "../assets/icons/git-pull-request.svg";
import doubleChevronUp from "../assets/icons/double-chevron-up.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = {
  icon?: JSX.Element;
  image?: any;
  desc: string;
  label: string;
  variant: "A" | "B";
};

export default function Services() {
  const about: Props[] = [
    {
      image: design,
      label: "UI/UX Design",
      desc: "We build performing design and quality control tests on every",
      variant: "A",
    },
    {
      image: code,
      label: "SAAS Development",
      desc: "We build performing design and quality control tests on every",
      variant: "B",
    },
    {
      image: layers,
      label: "Affordable Hybrid Apps",
      desc: "We build performing design and quality control tests on every",
      variant: "A",
    },
    {
      image: gitPullRequest,
      label: "High Performance Native Apps",
      desc: "We build performing design and quality control tests on every",
      variant: "B",
    },
    {
      image: user,
      label: "Give your app User Accounts and track usage",
      desc: "We build performing design and quality control tests on every",
      variant: "A",
    },
    {
      image: doubleChevronUp,
      label: "In-App Purchases and Premium Subscription",
      desc: "We build performing design and quality control tests on every",
      variant: "B",
    },
    {
      image: checkUser,
      label: "Authenticate users with ease",
      desc: "We build performing design and quality control tests on every",
      variant: "A",
    },
    {
      icon: <IconSeo size={28} stroke={1.5} />,
      label: "Search Engine Optimization",
      desc: "We build performing design and quality control tests on every",
      variant: "B",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.set("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      className="bg-gradient-to-b w-full from-[#072783]/10 via-[#ECECEE] to-[#072783]/10 pt-32 px-4 flex justify-center items-center sm:px-10 md:px-20 lg:px-36"
    >
      <div className="w-full max-w-[1100px] flex flex-col justify-start items-center gap-14">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <Heading
            dark
            center
            length={811}
            text={"Hollow Technologies Believes that your Expertise Matters."}
          />

          <HeadingDescription
            dark
            center
            length={720}
            text={
              "We build performing design and quality control tests on every product before shipping it out to you so you can be sure you are receiving a quality product."
            }
          />
        </div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { rotate: 90, scale: 0 },
            show: {
              rotate: 0,
              scale: 1,
              transition: {
                duration: 0.1,
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-7 w-full md:grid-cols-3 xs:grid-cols-2 relative"
        >
          {about.map((abt: Props, i) => {
            return (
              <AboutCard
                delay={i}
                variant={abt.variant}
                key={abt.label}
                desc={abt.desc}
                icon={abt.icon}
                image={abt.image}
                label={abt.label}
              />
            );
          })}
        </motion.div>

        <Divider />
      </div>
    </section>
  );
}
