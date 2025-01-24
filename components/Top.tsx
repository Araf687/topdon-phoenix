import { topNavLinks } from "@/lib/constants";
import { NavLinkProps } from "@/types/data";
import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, MailOpen, Youtube } from "lucide-react";
import Link from "next/link";

const Top = () => {
  const NavLink = ({
    data,
    showSeparator,
  }: {
    data: NavLinkProps;
    showSeparator: boolean;
  }) => {
    return (
      <Link href={data.link} className="text-white flex items-center">
        <span className="tracking-wide text-[#CCCCCC] text-[14px]">
          {data.name}
        </span>
        {showSeparator && (
          <Separator
            orientation="vertical"
            className="h-[10px] mx-[10px] text-[#737F96]"
          />
        )}
      </Link>
    );
  };

  return (
    <div className="bg-[#253146] py-[10px] border-b border-[#CCCCCC]">
      <div className="px-[10px] lg:px-[120px] flex flex-wrap justify-between items-center">
        {/* Navigation Links */}
        <div className="lg:flex hidden">
          {topNavLinks.map((item: NavLinkProps, index: number) => (
            <NavLink
              key={index}
              data={item}
              showSeparator={index !== topNavLinks.length - 1}
            />
          ))}
        </div>

        {/* Contact and Social Links */}
        <div className="flex justify-between gap-2 w-full lg:w-auto items-center text-[#CCCCCC]">
          {/* Contact Info */}
          <div className="flex items-center gap-[8px]">
            <MailOpen size={"14px"} />
            <span className="text-[14px]">contact@abc.com</span>
          </div>

          {/* Separator (Hidden on Mobile) */}
          <Separator
            orientation="vertical"
            className="h-[10px] mx-[10px] text-[#737F96] hidden lg:block"
          />

          {/* Social Media Icons */}
          <div className="flex justify-between items-center gap-[15px] lg:gap-[17px] lg:w-[125px] lg:w-auto">
            <Link href="#">
              <Facebook size={17} />
            </Link>
            <Link href="#">
              <Instagram size={17} />
            </Link>
            <Link href="#">
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
