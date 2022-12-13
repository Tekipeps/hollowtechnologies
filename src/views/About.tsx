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

type Props = { icon?: JSX.Element; image?: any; desc: string; label: string };

export default function Services() {
  const about: Props[] = [
    {
      image: design,
      label: "UI/UX Design",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: code,
      label: "SAAS Development",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: layers,
      label: "Affordable Hybrid Apps",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: gitPullRequest,
      label: "High Performance Native Apps",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: user,
      label: "Give your app User Accounts and track usage",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: doubleChevronUp,
      label: "In-App Purchases and Premium Subscription",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: checkUser,
      label: "Authenticate users with ease",
      desc: "We build performing design and quality control tests on every",
    },
    {
      icon: <IconSeo size={28} stroke={1.5} />,
      label: "Search Engine Optimization",
      desc: "We build performing design and quality control tests on every",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b w-full from-[#072783]/10 via-[#ECECEE] to-[#072783]/10 pt-32 flex flex-col justify-start items-center gap-14 px-4 sm:px-10 md:px-20 lg:px-36"
    >
      <div className="flex flex-col items-center justify-center w-full gap-5">
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

      <div className="grid w-full grid-cols-1 md:grid-cols-3 xs:grid-cols-2 gap-7">
        {about.map((abt: Props) => {
          return (
            <AboutCard
              key={abt.label}
              desc={abt.desc}
              icon={abt.icon}
              image={abt.image}
              label={abt.label}
            />
          );
        })}
      </div>

      <Divider />
    </section>
  );
}
