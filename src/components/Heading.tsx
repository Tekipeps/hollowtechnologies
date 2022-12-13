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
      className={`font-bold text-3xl md:text-[52px] md:leading-[4rem] w-full
      ${light && "text-[#E1E1EC]"} ${dark && "text-[#072783]"} ${
        center && "text-center"
      }`}
    >
      {text}
    </h1>
  );
}
