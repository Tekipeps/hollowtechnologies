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
      desc: "Transform your digital experience with intuitive and visually stunning UI/UX design.",
      variant: "A",
    },
    {
      image: code,
      label: "SAAS Development",
      desc: "Streamline your business operations with cutting-edge SAAS development.",
      variant: "B",
    },
    {
      image: layers,
      label: "Affordable Hybrid Apps",
      desc: "Get the best of both worlds with affordable hybrid app development.",
      variant: "A",
    },
    {
      image: gitPullRequest,
      label: "High Performance Native Apps",
      desc: "Utilizing the latest technologies and best practices, we build apps that deliver a seamless and intuitive user experience on any device.",
      variant: "B",
    },
    {
      image: user,
      label: "Give your app User Accounts and track usage",
      desc: "Gain valuable insights into user behavior with our powerful usage tracking capabilities.",
      variant: "A",
    },
    {
      image: doubleChevronUp,
      label: "In-App Purchases and Premium Subscription",
      desc: "Monetize your app and drive revenue with in-app purchases and premium subscriptions.",
      variant: "B",
    },
    {
      image: checkUser,
      label: "Authenticate users with ease",
      desc: "Effortlessly secure your users online presence with hassle-free user authentication.",
      variant: "A",
    },
    {
      icon: <IconSeo size={28} stroke={1.5} />,
      label: "Search Engine Optimization",
      desc: "Maximize your online visibility and drive traffic to your website with our advanced SEO methods.",
      variant: "B",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
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

        <div ref={ref} className="flex flex-col gap-7 w-full">
          <motion.div
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
            className="grid relative grid-cols-1 gap-7 w-full md:grid-cols-3 xs:grid-cols-2"
          >
            {about.slice(0, 6).map((abt: Props, i) => {
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
            className="grid relative grid-cols-1 gap-7 w-full xs:grid-cols-2"
          >
            {about.slice(6).map((abt: Props, i) => {
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
        </div>

        <Divider />
      </div>
    </section>
  );
}
