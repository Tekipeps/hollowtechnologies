import { useState } from "react";
import Heading from "../components/Heading";
import HeadingDescription from "../components/HeadingDescription";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendRequest = (event: any) => {
    event.preventDefault();

    const reqDetails = { name, email, message };

    console.log(reqDetails);
  };

  return (
    <section
      id="contact"
      className="bg-[#051B5A] w-full flex flex-col justify-start items-center pb-32 gap-14 px-3 sm:px-10 md:px-20 lg:px-36"
    >
      <div className="border flex flex-col justify-center py-16 xs:py-20 items-center border-[#96AAE2]/40 w-full rounded-[9.28px] bg-gradient-to-b from-[#051D61] to-[#0A2977] max-w-[1100px]">
        <div className="flex flex-col justify-start items-center gap-14 w-full max-w-[1100px]">
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <Heading light center length={895} text={"Contact us"} />

            <HeadingDescription
              light
              center
              length={459}
              text={"Let's talk and get started with your project"}
            />
          </div>

          <form
            onSubmit={sendRequest}
            className="flex flex-col gap-5 w-full max-w-[600px] mt-0 sm:mt-16 px-5 xs:px-0"
          >
            <InputField
              required
              value={name}
              type={"text"}
              setValue={setName}
              placeholder={"Enter your full name"}
            />

            <InputField
              required
              value={email}
              type={"email"}
              setValue={setEmail}
              placeholder={"Enter your email address"}
            />

            <TextArea
              required
              value={message}
              setValue={setMessage}
              placeholder={"Project brief..."}
            />

            <button
              type="submit"
              className="rounded w-full bg-gradient-to-tr h-[52px] hover:scale-105 active:scale-95 text-center text-[#051C5D] from-[#768DCF] to-[#B2CAFD]"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
