import React from "react";

type HProps = {
  children: React.ReactNode;
  className?: string;
};

const H: React.FC<HProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-[23px] lg:text-[34px] text-white ${className}`}>
      {children}
    </h1>
  );
};

export default H;
