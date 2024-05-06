import { CautionIcon } from "../constants/Icons";

function Input({
  text,
  type,
  placeholder,
  className,
  value,
  onChange,
}: {
  text: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={`group my-3 w-80 ${className}`}>
      <div className="bg-[#EFEFEF] rounded-full px-4 focus-within:border-[#537FF1] border border-transparent transition-all duration-300 focus-within:bg-[#F5F8FF]">
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-none bg-transparent p-4 w-full"
          value={value}
          onChange={onChange}
        />
      </div>
      {text && (
        <span className="text-sm text-[#FF0808] flex items-center">
          <CautionIcon /> {text}
        </span>
      )}
    </div>
  );
}

export default Input;
