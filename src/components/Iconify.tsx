import Image from "next/image";

type Props = { image?: any; icon?: JSX.Element };

export default function Iconify({ icon, image }: Props) {
  return (
    <span className="flex justify-center items-center text-[#BCCCEB] rounded-2xl bg-gradient-to-tr h-[53px] w-[53px] from-[#051B5A] to-[#072887]">
      {(image && (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt="service card icon"
        />
      )) ||
        icon}
    </span>
  );
}
