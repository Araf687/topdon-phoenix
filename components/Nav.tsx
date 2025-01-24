import { ChevronDown } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div className="hidden lg:flex gap-[40px] justify-center py-[12px] bg-[#1F242D] text-[#CCCCCC]">
      <span className="cursor-pointer">OBDeleven</span>
      <span className="flex items-center gap-1 cursor-pointer">
        Scanner Types <ChevronDown size={16} />
      </span>
      <span className="flex items-center gap-1 cursor-pointer">
        Car Makes <ChevronDown size={16} />
      </span>
      <span className="flex items-center gap-1 cursor-pointer">
        Service Reset Tools <ChevronDown size={16} />
      </span>
      <span className="flex items-center gap-1 cursor-pointer">
        Other Tools & Accessories <ChevronDown size={16} />
      </span>
    </div>
  );
};

export default Nav;
