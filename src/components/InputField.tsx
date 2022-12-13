type Props = {
  value: string;
  required?: boolean;
  placeholder?: string;
  type: "text" | "email";
  setValue: (value: string) => void;
};

export default function InputField({
  type,
  value,
  setValue,
  required,
  placeholder,
}: Props) {
  return (
    <input
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={({ currentTarget }) => setValue(currentTarget.value)}
      className="h-12 rounded border border-slate-400/30 bg-gradient-to-r from-[#051D61] to-[#0A2977] w-full px-3 text-white outline-0 text-sm xs:text-base font-normal"
    />
  );
}
