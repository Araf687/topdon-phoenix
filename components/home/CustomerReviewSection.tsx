import React from "react";
import H from "../ui/customized/Heading";
import { ChevronRight } from "lucide-react";
import rewview from "@/assets/image/reviewStar.svg";
import trustExport from "@/assets/image/trust-export.svg";
import Image, { StaticImageData } from "next/image";
import author1 from "@/assets/image/customers/author1.svg";
import author2 from "@/assets/image/customers/author-2.svg";
import P from "../ui/customized/P";

type Author = {
  name: string;
  image: StaticImageData;
  companyName: string;
  isSelected: boolean;
  designation: string;
};

const CustomerReviewSection = () => {
  const authors = [
    {
      name: "Paul L",
      image: author1,
      designation: "Creative Director at",
      companyName: "CompanyName",
      isSelected: true,
    },
    {
      name: "DAVID G",
      image: author2,
      designation: "Creative Director at",
      companyName: "CompanyName",
      isSelected: false,
    },
    {
      name: "LEE W",
      image: author1,
      designation: "Creative Director at",
      companyName: "CompanyName",
      isSelected: false,
    },
  ];
  return (
    <div className="bg-[#1D232D] lg:px-[120px] pt-[40px] px-[26px] lg:pt-[80px] space-y-[50px] borde-3 border-gray-900 border-b">
      <div className="flex justify-between items-center">
        <div>
          <H className="italic uppercase font-bold">the love from our</H>
          <H className="italic uppercase font-bold">customers</H>
        </div>

        <p className="text-[#737F96] flex items-center lg:gap-1 ">
          <span className="text-sm lg:text-md text-wrap pl-5 flex-1">
            {" "}
            See All Reviews
          </span>
          <ChevronRight size={15} />
        </p>
      </div>
      <div className="bg-[#1F2632] space-y-[15px] lg:space-y-[30px] px-[25px] lg:px-[50px] py-[25px] lg:py-[60px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-0 lg:gap-[60px]">
            <div className="flex items-center lg:gap-2">
              {" "}
              <p className="text-[#737F96] text-[14px] lg:text-[24px]">
                Very good
              </p>{" "}
              <Image
                src={rewview}
                alt="customer-review"
                className="inline h-[9px] w-[60px] lg:w-[116px] lg:h-auto"
              />
            </div>

            <Image
              src={trustExport}
              alt="trustExport"
              className="h-[9px] w-[82px] lg:w-auto lg:h-auto"
            />
          </div>
          <p className="text-[#737F96] text-[12px] lg:text-[16px]">4 days ago</p>
        </div>

        <p className="italic text-[14px] lg:text-[23px] text-white leading-relaxed text-justify">
          &quot;Awesome service, next day delivery, friendly staff that know
          their stuff. Reassured support is always available should it be
          needed. It was like dealing with someone you’ve known 20 years.&quot;
        </p>
      </div>
      {/* our customer */}
      <div className="flex justify-between items-center w-full pb-[40px] lg:pb-[90px] overflow-x-auto space-x-4">
        {authors.map((item: Author, index: number) => (
          <div
            key={index}
            className="relative flex items-center gap-[20px] flex-shrink-0"
          >
            <Image src={item?.image} alt="author-image" className="h-[84px]" />
            <div>
              {/* Black overlay for unselected items */}
              {!item.isSelected && (
                <div className="absolute inset-0 bg-[#1D232D] bg-opacity-40 z-10"></div>
              )}
              <P className="font-bold">{item.name}</P>
              <p className="text-semibold text-[#737F96]">
                {item?.designation}
              </p>
              <p className="text-semibold text-[#0099CC]">{item.companyName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewSection;
