import { useRouter } from "next/router";
import { IconCloudUpload, IconTestPipe } from "@tabler/icons";

import Heading from "../components/Heading";
import ProcessCard from "../components/ProcessCard";
import HeadingDescription from "../components/HeadingDescription";

import box from "../assets/icons/box.svg";
import code from "../assets/icons/code.svg";
import design from "../assets/icons/design.svg";

type Props = { icon?: JSX.Element; image?: any; desc: string; label: string };

export default function OurProcess() {
  const router = useRouter();

  const processes: Props[] = [
    {
      image: box,
      label: "Research",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: design,
      label: "Design",
      desc: "We build performing design and quality control tests on every",
    },
    {
      image: code,
      label: "Implementation",
      desc: "We build performing design and quality control tests on every",
    },
    {
      label: "Testing",
      icon: <IconTestPipe size={28} stroke={1.5} />,
      desc: "We build performing design and quality control tests on every",
    },
    {
      label: "Deployment",
      icon: <IconCloudUpload size={28} stroke={1.5} />,
      desc: "We build performing design and quality control tests on every",
    },
  ];
  return (
    <section
      id="process"
      className="bg-gradient-to-b w-full from-[#072783]/10 via-[#ECECEE] to-[#ECECEE] pt-24 pb-24 sm:pb-[13rem] flex justify-center items-center px-4 sm:px-10 md:px-20 lg:px-36"
    >
      <div className="flex flex-col justify-start items-center gap-14 w-full max-w-[1100px]">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <Heading
            dark
            center
            length={811}
            text={"Let's make it hassle-free."}
          />

          <HeadingDescription
            dark
            center
            length={720}
            text={
              "Whatever your needs are, we are happy to help. We pride ourselves on providing the highest level of expertise in every project we undertake."
            }
          />

          <button
            onClick={() => router.push("/#contact")}
            className="text-[#051C60] text-base font-normal tracking-wide px-6 mt-5 py-2.5 border border-slate-400/40 bg-gradient-to-tr from-[#B0BACF]/30 to-[#F5F5F5]/10 hover:bg-gradient-to-tr hover:scale-105 active:scale-95 rounded"
          >
            Get in touch
          </button>
        </div>

        <div className="flex justify-center items-center mt-5 w-full text-base font-normal text-center uppercase border text-slate-500">
          See Our Process
        </div>

        <div className="grid grid-cols-1 gap-7 w-full md:grid-cols-3 xs:grid-cols-2">
          {processes.map((process: Props) => {
            return (
              <ProcessCard
                key={process.label}
                desc={process.desc}
                icon={process.icon}
                image={process.image}
                label={process.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
