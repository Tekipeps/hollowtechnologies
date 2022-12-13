type Props = {
  value: string;
  required?: boolean;
  placeholder?: string;
  setValue: (value: string) => void;
};

export default function TextArea({
  value,
  setValue,
  required,
  placeholder,
}: Props) {
  return (
    <textarea
      rows={10}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={({ currentTarget }) => setValue(currentTarget.value)}
      className={
        "rounded border border-slate-400/30 bg-gradient-to-r from-[#051D61] to-[#0A2977] w-full p-3 resize-none text-white outline-0 text-sm xs:text-base font-normal"
      }
    ></textarea>
  );
}
