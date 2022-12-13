import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../Navbar";

type Props = {
  title: string;
  children: ReactNode;
};

export default function index({ title, children }: Props) {
  return (
    <div className="flex justify-center items-start w-full">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hollow Technologies is a business that helps you bring your software ideas to life. We design and implement your product based on your business requirements."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex relative flex-col justify-start items-center w-full">
        <Navbar />

        <div className="w-full flex flex-col bg-[#072783]/10 justify-start items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
