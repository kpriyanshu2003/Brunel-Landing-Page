import React from "react";

function Button({
  className,
  children,
  variant,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
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
  console.log(variant);
  return (
    <button
      onClick={onClick}
      className={`px-8 transition-all duration-300flex items-center p-4 rounded-full ${buttonClassName} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
