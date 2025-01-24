import React from "react";

type DescriptionProps = {
  children: React.ReactNode; 
  color?: string; // Optional color prop for text
  className?: string; // Optional className for additional styles
};

const Description: React.FC<DescriptionProps> = ({ children, color = "inherit", className = "" }) => {
  return (
    <p style={{ color }} className={`text-sm lg:text-base text-justify${className}`}>
      {children}
    </p>
  );
};

export default Description;
