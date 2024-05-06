import React from "react";

function Button({
  className,
  children,
  variant,
  onClick,
  disabled,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
}) {
  let buttonClassName = "";
  switch (variant) {
    case "primary":
      buttonClassName += "bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]";
      break;
    case "secondary":
      buttonClassName += "border hover:bg-[#EAEAEA] hover:border-transparent";
      break;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-8 transition-all duration-300flex items-center p-4 rounded-full ${buttonClassName} ${className} ${
        disabled && "cursor-not-allowed bg-[#4E4E4E]"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
