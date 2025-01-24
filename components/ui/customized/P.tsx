import React from "react";

type PProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const P: React.FC<PProps> = ({ children, className = "", color = "white" }) => {
  return (
    <p
      className={`text-[19px] text-wide lg:text-[27px] ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
};

export default P;
