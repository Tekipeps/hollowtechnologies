import Heading from "../components/Heading";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#051B5A] w-full flex flex-col justify-start items-center pb-32 gap-14 px-3 sm:px-10 md:px-20 lg:px-36"
    >
      <div className="border flex flex-col justify-center py-16 xs:py-20 items-center border-[#96AAE2]/40 w-full rounded-[9.28px] bg-gradient-to-b from-[#051D61] to-[#0A2977] max-w-[1100px]">
        <Heading light center length={895} text={"Contact us"} />

        {/* <!-- Calendly inline widget begin --> */}
        <InlineWidget
          styles={{ width: "100%", height: "750px" }}
          url="https://calendly.com/hollowtechnologies/30min"
        />

        {/* <!-- Calendly inline widget end --> */}
      </div>
    </section>
  );
}
