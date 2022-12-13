type Props = {
  text: string;
  length: number;
  dark?: boolean;
  light?: boolean;
  center?: boolean;
};

export default function Heading({ text, dark, light, center, length }: Props) {
  return (
    <h1
      style={{ maxWidth: `${length}px` }}
      className={`font-bold text-3xl text-transparent bg-gradient-to-b bg-clip-text md:text-[52px] md:leading-[4rem] w-full
      ${light && "from-[#E1E1EC] to-[#8999B8]"} ${
        dark && "from-[#072783] to-[#051B5A]"
      } ${center && "text-center"}`}
    >
      {text}
    </h1>
  );
}
