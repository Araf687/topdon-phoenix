import React from "react";
import Top from "./Top";
// import { Separator } from './ui/separator';
import Image from "next/image";
import brandlogo from "@/assets/image/albionshire.svg";
import { Heart, LogIn, Search, ShoppingCart, Smartphone } from "lucide-react";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Top />
      <div className="px-[10px] lg:px-[120px] flex flex-wrap justify-between items-center bg-[#1A1F28] py-[20px]">
        <div className="flex items-center gap-[50px]">
          <Image
            src={brandlogo}
            alt="brand-logo"
            className="h-[30px] w-auto lg:h-[39px]" // Adjust height for mobile and desktop
          />

          {/* search section  */}
          <div className="hidden lg:flex w-[430px] border border-[#253146] items-center rounded-lg">
            <input
              type="text"
              className="flex-1 bg-transparent border-none rounded-lg focus:outline-none focus:ring-0 text-white px-3 py-2"
              placeholder="Search Here..."
            />
            <Search className="text-[#253146] mx-3 cursor-pointer" />
          </div>
          {/* contact section  */}
          <div className="hidden lg:flex items-center">
            <div>
              <Smartphone size={40} color="#EA4C49" />
            </div>
            <div className="w-auto ml-2">
              <p className="text-[#737F96] text-[12px]">Call us free</p>
              <p className="text-[#CCCCCC]">+1 86.36.166</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[10px] lg:gap-[20px] lg:gap-[30px] text-[#CCCCCC]">
          <div className="flex items-center gap-[8px]">
            <LogIn /> <span className="hidden lg:block">Account</span>
          </div>{" "}
          <Heart className="hidden lg:block" />
          <Search className="lg:hidden cursor-pointer" />
          <ShoppingCart />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Header;
