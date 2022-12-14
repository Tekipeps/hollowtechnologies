import Image from "next/image";
import { useRouter } from "next/router";

import bgBlur from "../assets/images/bgBlur.svg";

import Heading from "../components/Heading";
import ServiceCard from "../components/ServiceCard";
import HeadingDescription from "../components/HeadingDescription";

import code from "../assets/icons/code.svg";
import globe from "../assets/icons/globe.svg";
import speed from "../assets/icons/speed.svg";
import stack from "../assets/images/stack.svg";
import layout from "../assets/icons/layout.svg";
import design from "../assets/icons/design.svg";
import layers from "../assets/icons/layers.svg";

type Props = { icon?: JSX.Element; image?: any; desc: string; label: string };

export default function Services() {
  const router = useRouter();

  const services: Props[] = [
    {
      image: globe,
      label: "Web Development",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: speed,
      label: "Search Engine Optimization",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: layers,
      label: "CI/CD DevOps",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: design,
      label: "UI/UX Design",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: code,
      label: "Mobile Development",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: layout,
      label: "Others",
      desc: "We build performing design and quality control tests on every",
    },
  ];

  const bg = {
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgBlur.src})`,
  };

  return (
    <section id="services" className="bg-[#051B5A] w-full">
      <div
        style={bg}
        className="flex flex-col items-center justify-center w-full px-4 pt-32 gap-14 pb-44 sm:px-10 md:px-20 lg:px-36"
      >
        <div className="flex flex-col justify-start items-center gap-14 w-full max-w-[1100px]">
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <Heading light center length={811} text={"Services we Offer"} />

            <HeadingDescription
              light
              center
              length={476}
              text={
                "We pride ourselves on providing the highest level of expertise in every project we build."
              }
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3 xs:grid-cols-2">
            {services.map((service: Props, i) => {
              return (
                <ServiceCard
                  delay={i}
                  key={service.label}
                  desc={service.desc}
                  icon={service.icon}
                  image={service.image}
                  label={service.label}
                />
              );
            })}
          </div>

          <div
            id="pricing"
            className="flex flex-col-reverse w-full mt-20 sm:items-center sm:flex-row"
          >
            <div className="flex flex-col items-start justify-start gap-5">
              <Heading light length={476} text={"We work with your Budget"} />

              <HeadingDescription
                light
                length={459}
                text={
                  "We pride ourselves on providing the highest level of expertise in every project we build."
                }
              />

              <button
                onClick={() => router.push("/#contact")}
                className="text-base font-normal tracking-wide px-6 mt-5 py-2.5 border border-slate-400/20 bg-gradient-to-tr from-[#051B5A] to-[#B0BACF]/20 hover:scale-105 active:scale-95 rounded"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#B0BACF]">
                  Request a Quote
                </span>
              </button>
            </div>

            <div
              className={`w-[${stack.width}px] h-[${stack.height}px] flex justify-center items-center`}
            >
              <Image
                alt={"stacks"}
                src={stack.src}
                width={stack.width}
                height={stack.height}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
