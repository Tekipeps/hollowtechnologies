type Props = {
  text: string;
  dark?: boolean;
  light?: boolean;
  center?: boolean;
  length: number;
};

export default function HeadingDescription({
  text,
  dark,
  light,
  center,
  length,
}: Props) {
  return (
    <p
      style={{ maxWidth: `${length}px` }}
      className={`text-sm xs:text-base font-normal w-full ${
        light && "text-[#B0BACF]"
      } ${dark && "text-[#646D88]"}
      ${center && "text-center"}`}
    >
      {text}
    </p>
  );
}
