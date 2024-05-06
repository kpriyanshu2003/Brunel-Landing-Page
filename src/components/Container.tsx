import React from "react";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`p-4 mx-8 my-6 ${className}`}>{children}</div>;
}

export default Container;
